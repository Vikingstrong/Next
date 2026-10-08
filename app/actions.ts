'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { url } from "./api/api";

export async function deleteTask(id: string) {
  await axios.delete(`${url}/${id}`)
  revalidatePath('/')
}

export async function deleteTaskAndGoHome(id: string) {
  await axios.delete(`${url}/${id}`)
  revalidatePath('/')
  redirect('/')
}