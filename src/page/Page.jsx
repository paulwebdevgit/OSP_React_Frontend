import React from 'react';
import TodoListOverviewComponent from "../components/TodoListOverviewComponent";
import AddTodo from "../components/AddTodo";
import {Box} from "@mui/material";

const Page = () => {
    return (
        <Box>
            <h1>TodoList</h1>
            <AddTodo/>
            <TodoListOverviewComponent/>
        </Box>
    );
};

export default Page;