'use client'

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  fetchTodos,
  addTaskApi,
  deleteTaskApi,
  editTaskApi,
  selectTodos,
  selectTodosStatus,
  selectTodosError,
  TodoType,
} from "@/lib/features/todos/todosSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const dataTodo = useAppSelector(selectTodos);
  const status = useAppSelector(selectTodosStatus);
  const error = useAppSelector(selectTodosError);

  const [editData, setEditData] = useState({ id: '', name: '' });
  const [newTaskName, setNewTaskName] = useState('');

  // Загружаем данные с API при загрузке страницы
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  function handleDelete(id: string) {
    dispatch(deleteTaskApi(id));
  }

  function handleAdd() {
    if (!newTaskName.trim()) return;
    dispatch(addTaskApi(newTaskName));
    setNewTaskName('');
  }

  function handleEdit() {
    if (!editData.id || !editData.name.trim()) return;
    dispatch(editTaskApi({ id: editData.id, name: editData.name }));
    setEditData({ id: '', name: '' });
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Список задач (MockAPI)</h1>

      {status === "loading" && <p className="text-blue-500 font-bold">Загрузка...</p>}
      {status === "failed" && <p className="text-red-500 font-bold">Ошибка: {error}</p>}

      {dataTodo.map((e: TodoType) => (
        <div className="bg-gray-300 rounded-lg p-5 text-black my-3 flex justify-between items-center" key={e.id}>
          <div>
            <p className="text-xs text-gray-600">ID: {e.id}</p>
            <h2 className="text-lg font-semibold">{e.name}</h2>
          </div>
          <button
            className="bg-red-500 py-2 px-4 rounded-lg text-white font-bold cursor-pointer hover:bg-red-600"
            onClick={() => handleDelete(e.id)}
          >
            DELETE
          </button>
        </div>
      ))}

      <div className="flex gap-2 my-6">
        <input
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="border border-gray-600 p-2 rounded-lg flex-1 text-black"
          type="text"
          placeholder="Название новой задачи"
        />
        <button
          onClick={handleAdd}
          className="bg-green-800 cursor-pointer py-2 px-6 text-lg font-bold rounded-lg text-white hover:bg-green-900"
        >
          ADD TASK
        </button>
      </div>

      <div className="flex flex-col gap-3 my-3 border-t pt-4">
        <h3 className="font-bold text-lg">Редактировать задачу</h3>
        <input
          value={editData.id}
          onChange={(e) => setEditData({ ...editData, id: e.target.value })}
          className="border border-gray-600 p-2 rounded-sm text-black"
          type="text"
          placeholder="ID задачи"
        />
        <input
          value={editData.name}
          onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          className="border border-gray-600 p-2 rounded-sm text-black"
          type="text"
          placeholder="Новое название"
        />
        <button
          onClick={handleEdit}
          className="bg-orange-700 cursor-pointer py-2 text-lg font-bold rounded-lg text-white hover:bg-orange-800"
        >
          Edit TASK
        </button>
      </div>
    </main>
  );
}