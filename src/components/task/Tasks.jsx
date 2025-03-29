import React from 'react'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び変える
  const remove = taskList.splice(startIndex, 1); // タスクの削除
  taskList.splice(endIndex, 0, remove[0]); // タスクの追加
}

const Tasks = ({taskList ,setTaskList}) => {
  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => 
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task task={task} taskList={taskList} setTaskList={setTaskList} index={index}  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          }
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
