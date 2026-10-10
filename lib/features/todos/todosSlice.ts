import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

const API_URL = "https://6a8446de53754283b0b8552d.mockapi.io/task";

export interface TodoType {
  id: string;
  name: string;
}

interface TodosState {
  items: TodoType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Ошибка при загрузке");
  return (await response.json()) as TodoType[];
});

export const addTaskApi = createAsyncThunk(
  "todos/addTaskApi",
  async (name: string) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) throw new Error("Ошибка при добавлении");
    return (await response.json()) as TodoType;
  }
);

export const deleteTaskApi = createAsyncThunk(
  "todos/deleteTaskApi",
  async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Ошибка при удалении");
    return id; 
  }
);

export const editTaskApi = createAsyncThunk(
  "todos/editTaskApi",
  async (task: TodoType) => {
    const response = await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: task.name }),
    });
    if (!response.ok) throw new Error("Ошибка при редактировании");
    return (await response.json()) as TodoType;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Произошла ошибка";
      })
      .addCase(addTaskApi.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTaskApi.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editTaskApi.fulfilled, (state, action: PayloadAction<TodoType>) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default todoSlice.reducer;

export const selectTodos = (state: RootState) => state.todos.items;
export const selectTodosStatus = (state: RootState) => state.todos.status;
export const selectTodosError = (state: RootState) => state.todos.error;