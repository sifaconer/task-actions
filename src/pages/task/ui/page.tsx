import React from "react";
import NewTask from "./components/NewTask";
import TaskContainer from "./components/TaskContainer";
import TotalTask from "./components/TotalTask";

export const TaskPage = () => {
	return (
		<main className="container w-ful py-12  mx-auto">
			<h1 className="text-3xl font-bold">🎒 Task </h1>
			<p>El aplicativo para manejar tus tareas en el dia a dia!</p>

			<div className="flex items-center mt-2 text-lg font-semibold">
				<TotalTask />
				<NewTask />
			</div>
			<div className="border-b border-gray-300 my-4" />
			<TaskContainer />
		</main>
	);
};
