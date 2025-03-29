import React from 'react'

const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}) => {
  const taskCardDeleteBtn = (id) => {
    setTaskCardsList(taskCardsList.filter(e => e.id !== id));
  }
  return (
    <div>
      <button className='taskCardDeleteBtn' onClick={() => taskCardDeleteBtn(taskCard.id)}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
