import React from 'react'
import { v4 as uuid } from 'uuid';

const AddTaskCardButton = ({taskCardsList, setTaskCardsList}) => {
  // タスクカード追加するボタン
  const addTaskCard = () => {
    const taskCard = uuid();
    setTaskCardsList([...taskCardsList, {
      id: taskCard,
      draggableId: `item-${taskCard}`,
    }])
  };
  return (
    <div className='addTaskCardArea'>
      <button className='addTaskCardBtn' onClick={addTaskCard}>+</button>
    </div>
  )
}

export default AddTaskCardButton
