import React from "react";
import { useDrag } from "react-dnd";

const DraggableItem = ({ itemText }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "DRAGGABLE_ITEM", text: itemText },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "move",
        backgroundColor: "lightblue",
        textAlign: "center",
      }}
    >
      {itemText}
    </div>
  );
};

export default DraggableItem;
