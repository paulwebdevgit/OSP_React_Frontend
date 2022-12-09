import axios from "axios";
import {useQuery} from "react-query";


export const callGetTodoList = () => axios.get("/api/todoList/").then( response => {
    return Promise.resolve(response.data)
})

// use the function to get Data
export const useGetTodoLisOverview = () => useQuery("todoList-overview", callGetTodoList);

// todo: use POST to create Todo