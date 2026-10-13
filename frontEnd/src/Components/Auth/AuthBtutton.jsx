import { useFormStatus } from "react-dom";

function AuthBtutton({ condition, children }) {  
  const { pending } = useFormStatus();
  return (
    <button
      disabled={!condition || pending}
      type="submit"
      className="h-15 flex w-full items-center justify-center gap-2 rounded-xl dark:bg-dark-primary-accent bg-light-primary-accent font-medium text-dark-text-primary transition-colors duration-300 dark:hover:bg-dark-hover-accent hover:bg-light-hover-accent cursor-pointer dark:disabled:bg-dark-primary-accent/50 disabled:cursor-default disabled:bg-light-primary-accent/50"
    >
      {pending ? (
        <div className="aspect-square w-4 h-4 rounded-full animate-loader"></div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}

export default AuthBtutton;
