import './App.css';
import TaskForm from '../components/TaskForm';
import TaskColumn from '../components/TaskColumn';
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
<<<<<<< HEAD
import { useState,useEffect,useContext } from 'react';
import { createContext } from 'react';
=======
import { useState,useEffect } from 'react';
>>>>>>> 49fcb0de0452b105d95b4c7ab869834a63f6c37e


const saveTasks = localStorage.getItem('tasks');


export default function App() {
	

<<<<<<< HEAD
	const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};

	const[tasks,setTasks] = useState(JSON.parse(saveTasks) || []);

=======
	

	const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};

	const[tasks,setTasks] = useState(JSON.parse(saveTasks) || []);

>>>>>>> 49fcb0de0452b105d95b4c7ab869834a63f6c37e
	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className='app'>
			<TaskForm setTasks={setTasks}/>
			<main className='app_main'>
        		<TaskColumn title='할 일' icon={todoIcon}  tasks={tasks} status='todo' handleDelete={handleDelete} />
				<TaskColumn title='진행중' icon={doingIcon}  tasks={tasks} status='doing' handleDelete={handleDelete} />
				<TaskColumn title='완 료' icon={doneIcon}  tasks={tasks} status='done' handleDelete={handleDelete} />
			</main>
		</div>
	);
}