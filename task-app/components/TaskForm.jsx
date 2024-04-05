import React from 'react';
import './TaskForm.css';
import Tag from './Tag';
<<<<<<< HEAD
import { useState,useContext } from 'react';


export default function TaskForm({setTasks}) {

=======
import { useState } from 'react';

export default function TaskForm({setTasks}) {
>>>>>>> 49fcb0de0452b105d95b4c7ab869834a63f6c37e

    const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
		tags: [],
	});
    
	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};


	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};


    const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	}

    const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData]; //새 task 추가
		});
		setTaskData({
			task: '',
			status: 'todo',
			tags: [],
		  });
	}
    
	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleChange} value={taskData.task} name='task' className='task_input' placeholder='Enter your task' />

				<div className='task_form_bottom_line'>
					<div>
						<Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')}/>
						<Tag tagName='CSS'  selectTag={selectTag} selected={checkTag('CSS')}/>
						<Tag tagName='JavaScript'  selectTag={selectTag} selected={checkTag('JavaScript')}/>
						<Tag tagName='REACT'  selectTag={selectTag} selected={checkTag('REACT')}/>
					</div>
					<div>
						<select className='task_status' name='status' value={taskData.status} onChange={handleChange}>
							<option value='todo'>할일</option>
							<option value='doing'>진행중</option>
							<option value='done'>완료</option>
						</select>
						<button type='submit' className='task_submit'>
							+ 추가
						</button>
					</div>
				</div>
			</form>
		</header>
	);
}

