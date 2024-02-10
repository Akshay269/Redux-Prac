import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "text1" }],
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,

    reducers: {
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);
        },
        editTodo:(state,action)=>{
            const todo=state.todos.find((todo)=>todo.id===action.payload);
            if(todo){
                todo.text=action.payload;
            }
        },
    }
})

export const {addTodo,removeTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;