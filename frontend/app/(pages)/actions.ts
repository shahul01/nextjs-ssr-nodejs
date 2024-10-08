"use server";

import { revalidatePath } from "next/cache";
import { backendUrl } from "../utils/constants";

async function postTodo(todoPayload: Record<string, any>) {

  const postTodo = await fetch(
    `${backendUrl}/todos`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todoPayload)
    }
  );
  const resPost = await postTodo.json();
  console.log(`resPost: `, resPost);
  return resPost;

};

export async function createTodoAction(state:{message: string}, formData: FormData)
: Promise<{message: string}>
{
  console.log(`state: `, state);
  await new Promise( res => setTimeout( res, 200 ));
  const titleForm = formData.get('title') as string;
  const todoPayload = { title: titleForm };

  await postTodo(todoPayload);

  revalidatePath('/');

  return {
    message: 'success'
  };

};
