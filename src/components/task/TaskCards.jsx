import React, { useState } from 'react';
import TaskCard from './TaskCard';
import AddTaskCardButton from './button/AddTaskCardButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, startIndex, endIndex) => {
  // タスクを並び変える
  const remove = taskCardsList.splice(startIndex, 1); // タスクの削除
  taskCardsList.splice(endIndex, 0, remove[0]); // タスクの追加
}

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableId: "0"
  }]); // タスクカード保存するステート
  const hanldDragEnd = result => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  }

  return (
    <DragDropContext onDragEnd={hanldDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {provided => (
          <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
          {taskCardsList.map((taskCard, index) => (
            <TaskCard key={taskCard.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} index={index} />
          ))}
          {provided.placeholder}
          <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
        </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
