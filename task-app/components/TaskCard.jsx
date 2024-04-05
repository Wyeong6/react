import Tag from './Tag';
import deleteIcon from '../src/assets/delete.png';
import './TaskCard.css';
import { useState } from 'react';





export default function TaskCard({title,tags,handleDelete, index}) {

	const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
		tags: [],
	});

	const handleChange = (e) => {
		const {name,value} = e.target;
		setTaskData((prev) => {
			return { ...prev, [name] : value };
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
		<article className='task_card'>
			<p className='task_text'>{title}</p>
			<div className='task_card_bottom_line'>
				<div className='task_card_tags'>
				{tags.map((tag, index) => (
						<Tag tagName={tag} key={index} selected={true} />
					))}
				</div>
				<div className='task_delete'>
					<img className='delete_icon' src={deleteIcon} alt='' onClick={() => handleDelete(index)}/>
				</div>
				<form>
					<select className='task_status' name='status' value={taskData.status} onChange={handleChange} >
						<option value='todo'>할일</option>
						<option value='doing'>진행중</option>
						<option value='done'>완료</option>
					</select>
					<button type='submit' className='task_submit'>
						변경
					</button>
				</form>
			</div>
		</article>
	);
}