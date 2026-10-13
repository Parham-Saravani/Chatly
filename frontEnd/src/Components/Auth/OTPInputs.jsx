import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

function OTPInputs({ setCode, resetInputs, setResetInputs }) {
  const [currentInput, setCurrentInput] = useState(0);
  const [isPasted, setIsPasted] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    inputs.current.forEach((item, index) => {
      if (index) {
        item.disabled = true;
      }
      item.value = "";
    });
    setCurrentInput(0);
    inputs.current[0].focus();
    setCode("");
    setResetInputs(false);
  }, [resetInputs]);

  const onInputHandler = (event) => {
    const value = event.target.value;
    if (!/^[0-9]$/.test(value)) {
      event.target.value = "";
      return;
    }
    setCode((prev) => prev + value);
    if (currentInput + 1 < inputs.current.length) {
      flushSync(() => setCurrentInput(currentInput + 1));
      if (currentInput !== inputs.current.length) {
        inputs.current[currentInput + 1].focus();
      }
    }
  };
  const onPasteHandler = (event) => {
    event.preventDefault();
    const value = event.clipboardData.getData("text");
    if (/^\d{6}$/.test(value)) {
      inputs.current.forEach((item, index) => {
        item.value = value[index];
        item.disabled = false;
      });
      setIsPasted(true);
      setCurrentInput(inputs.current.length - 1);
      inputs.current[inputs.current.length - 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <input
            maxLength={1}
            key={index}
            disabled={!isPasted && index !== currentInput}
            onPaste={(event) => {
              onPasteHandler(event);
            }}
            onKeyDown={(event) => {
              if (event.key === "Backspace" && !event.target.value) {
                flushSync(() =>
                  setCurrentInput((prev) => {
                    if (prev === 0) return 0;
                    return prev - 1;
                  }),
                );
                inputs.current[currentInput]?.focus();
              }
              if (event.key === "Backspace" && event.target.value) {
                setCode((prev) => prev.slice(0, index));
              }
            }}
            onChange={(event) => {
              onInputHandler(event);
            }}
            ref={(element) => (inputs.current[index] = element)}
            className=" border dark:border-dark-border-primary text-center border-light-border-primary transition-colors duration-300 dark:focus:border-dark-primary-accent focus:border-light-primary-accent outline-hidden w-14 h-14 rounded-xl disabled:dark:bg-dark-bg-secondary/10 disabled:bg-light-bg-secondary/10 disabled:cursor-default"
            type="text"
            inputMode="numeric"
          />
        );
      })}
    </div>
  );
}

export default OTPInputs;
