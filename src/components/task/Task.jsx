import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({task, taskList,setTaskList, index}) => {
    const handleDelete = id => {
        setTaskList(taskList.filter(task => task.id !== id));
    };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div className='taskBox' key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p className='TaskText'>{task.text}</p>
          <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

      )}
    </Draggable>
  )
}

export default Task
