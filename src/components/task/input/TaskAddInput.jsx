import React from 'react'
import { v4 as uuid } from 'uuid';

const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  const handleSubmit = e => {
    const taskId = uuid();
    e.preventDefault();
    // カード追加
    setTaskList([...taskList, {
      id: taskId,
      draggableId: `task-${taskId}`,
      text: inputText,
    }]);
    setInputText("");
    // console.log(...taskList, inputText);
  }
  const handleChange = e => {
    setInputText(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='taskAddInput' onChange={handleChange} value={inputText} />
      </form>
    </div>
  )
}

export default TaskAddInput
