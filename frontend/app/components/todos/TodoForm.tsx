import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button, Input } from '@headlessui/react';
import { createTodoAction } from "@/app/(pages)/actions";



function SubmitButton() {
  const status = useFormStatus();
  return (
    <Button
      className="inline-flex items-center gap-2 rounded-md py-1.5 px-3
        bg-gray-700 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none
        data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      disabled={status.pending}
      type={'submit'}
    >
      { status.pending ? 'Submitting...' : 'Submit' }
    </Button>
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
      <Input
        type='text'
        name='title'
        placeholder="title"
        className="mt-3 rounded-lg border-none py-1.5 px-3
        text-sm text-white bg-white/5
        focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-white/25"
      />
      <SubmitButton />
    </form>
  )
};