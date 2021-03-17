import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const BoardContainer = () => {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" direction="horizontal" type="list">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  dfcd
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardContainer;
