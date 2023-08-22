import React, { useState } from "react";
import { useDrop } from "react-dnd";

const DialogBox = ({ title, onDropItem }) => {
  const [droppedItems, setDroppedItems] = useState([]);

  const [, drop] = useDrop({
    accept: "DRAGGABLE_ITEM",
    drop: (item) => {
      // Add the dropped item to the list of dropped items
      setDroppedItems((prevItems) => [...prevItems, item]);
      // Invoke the onDropItem callback to notify the parent component
      onDropItem(item.text);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div
      style={{
        width: "300px",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        minHeight: "150px",
      }}
      ref={drop}
    >
      <h3>{title}</h3>
      {droppedItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "8px" }}>
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default DialogBox;
