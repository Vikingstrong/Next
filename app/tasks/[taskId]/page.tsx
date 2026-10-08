import { deleteTaskAndGoHome } from "@/app/actions";
import { url } from "@/app/api/api";
import axios from "axios";


export default async function page({params}: {params: Promise<{taskId: string}>}) {
  
  const {taskId} = await params;
  async function getTaskById() {
    try {
      const {data} = await axios.get(`${url}/${taskId}`)
      return data
    } catch (error) {
      console.error(error)
    }  
  }
  const task = await getTaskById();
  
  return (
    <>
      

      <div className="flex flex-col gap-3 py-35 font-bold items-center w-full">
        <p className="text-lg">USERID: {task?.id}</p>
        <h1 className="text-2xl font-bold">User Name: {task?.name}</h1>
        <p className="text-lg">User Description: {task?.description}</p>
         <form action={deleteTaskAndGoHome.bind(null, task.id)}>
            <button type="submit" className="bg-red-500 w-full text-white font-bold text-lg p-2 rounded-sm transition-all hover:bg-red-800 hover:-translate-y-1 cursor-pointer">Delete</button>
          </form>
      </div>
    </>
  )
}
