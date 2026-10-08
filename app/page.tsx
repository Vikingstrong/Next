
import axios from "axios";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { url } from "./api/api";
import { deleteTask } from "./actions";

type TasksType={
  id: string,
  name: string,
  description: string
}

export default async function Home() {

  async function getTasks() {
    try {
      const {data} = await axios.get(url)
      return data
    } catch (error) {
      return error
    }
  }
  const data: TasksType[] = await getTasks()
  

  return (
    <>
    <div className="flex flex-col items-center gap-5 py-5">
      {
        data.map(e => (
          <div key={e.id} className="flex flex-col bg-black text-white p-5 gap-5 rounded-lg w-160">
            <Link href={`tasks/${e.id}`}>
              <div>
                <h1 className="text-xl font-bold">{e.name}</h1>
                <p>{e.description}</p>
              </div>
            </Link>
            <form action={deleteTask.bind(null,e.id)}>
            <button type="submit" className="bg-red-500 w-full text-white font-bold text-lg p-2 rounded-sm transition-all hover:bg-red-800 hover:-translate-y-1 cursor-pointer">Delete</button>
            </form>
          </div>
        ))
      }
    </div>
    </>
  );
}

