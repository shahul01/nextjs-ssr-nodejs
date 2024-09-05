import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createTodoAction } from "@/app/(pages)/actions";



function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      className="text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 rounded-sm"
      disabled={status.pending}
    >
      { status.pending ? 'Submitting...' : 'Submit' }
    </button>
  );
};


export default function TodoForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [ formState, formAction ] = useFormState(createTodoAction, {
    message: ''
  });

  if (formState.message === 'success') formRef.current?.reset();


  return (
    <form ref={formRef} action={formAction}>
      <input
        type="text"
        name='title'
        placeholder="title"
        className="text-black border border-gray-400 mr-2 outline-none"
      />
      <SubmitButton />
    </form>
  )
};