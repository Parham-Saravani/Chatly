import { useFormStatus } from "react-dom";
import { FiArrowRight } from "react-icons/fi";

function AuthBtutton({ isEmailValid }) {
  const {pending} = useFormStatus();
  return (
    <button
      disabled={!isEmailValid || pending}
      type="submit"
      className="flex w-full items-center justify-center gap-2 rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent py-4 font-medium text-dark-text-primary transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent cursor-pointer dark:disabled:bg-dark-primary-accent/50 disabled:cursor-default disabled:bg-light-primary-accent/50"
    >
      {pending ? (
        <div className="aspect-square w-4 h-4 rounded-full animate-loader"></div>
      ) : (
        <>
          Continue
          <FiArrowRight className="size-4" />
        </>
      )}
    </button>
  );
}

export default AuthBtutton;
