'use client'

import axios from "axios";
import { useEffect, useState } from "react";



type Todo = {
  id: number;
  title: string;
  isComplited: boolean;
};

export default function page() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [editData, setEditData] = useState({id: -1, title: '', isComplited: false})
  const [postTitle, setPostTitle] = useState('')
  const [searchParams, setSearchParams] = useState('');

  async function getTasks(search:string='') {
      const data = await axios.get('/api/todos',{params: {search}})
      setTodos(data.data)
  }
  async function delTask(id:number) {
    try {
      await axios.delete('/api/todos?id='+id);
      getTasks(searchParams);
    } catch (error) {
      console.error(error)
    }
  }
  async function editTask(newTask:Todo) {
    try {
      await axios.put('/api/todos', newTask);
      getTasks(searchParams);
      setEditData({id: -1, isComplited: false, title: ''})
    } catch (error) {
      console.error(error)
    }
  }
  async function switchStatus(id:number) {
    try {
      await axios.patch('/api/todos', null, {params: {id} })
      getTasks(searchParams);
    } catch (error) {
      console.error(error)
    }
  }
  async function postTask() {
    try {
      await axios.post('/api/todos', { title: postTitle });
      getTasks(searchParams);
      setPostTitle('')
    } catch (error) {
      
    }
  }


  function handleEdit(task:Todo){
    setEditData({id: task.id, title: task.title, isComplited: task.isComplited})
  }

  useEffect(() => {
    getTasks(searchParams);
  },[])
  return(
    <>
      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex gap-5">
          <input onChange={(e) => setSearchParams(e.target.value)} value={searchParams} className="border border-gray-400 p-2 rounded-sm" type="text" />
          <button onClick={() => getTasks(searchParams)} className="bg-green-600 cursor-pointer p-2 rounded-lg font-bold w-full">SEARCH</button>
        </div>

        <div className="flex flex-col gap-3">
          <input onChange={(e) => setPostTitle(e.target.value)} value={postTitle} className="border border-gray-400 p-2 rounded-sm" type="text" />
          <button onClick={postTask} className="bg-green-600 cursor-pointer p-2 rounded-lg font-bold w-full">POST</button>
        </div> 
        {
          editData.id != -1 ? <div className="flex flex-col gap-3">
            <input onChange={(e) => setEditData({...editData, title: e.target.value})} value={editData.title} className="border border-gray-400 p-2 rounded-sm" type="text" />
            <button onClick={() => editTask(editData)} className="bg-orange-600 cursor-pointer p-2 rounded-lg font-bold w-full">SAVE</button>
          </div> : null
        } 

        {
          todos.map(e => (
            <div className="w-100 bg-white p-5 text-black rounded-lg items-center flex flex-col gap-2 font-bold" key={e.id}>
              <h1>{e.title}</h1>
              <p>{e.isComplited ? 'complited' : 'not complited'}</p>
              <input onChange={() => switchStatus(e.id)} checked={e.isComplited} type="checkbox" />
              <button onClick={() => delTask(e.id)} className="bg-red-700 text-white cursor-pointer p-2 rounded-xl w-full">DELETE</button>
              <button onClick={() => handleEdit(e)} className="bg-orange-600 text-white cursor-pointer p-2 rounded-xl w-full">EDIT</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
