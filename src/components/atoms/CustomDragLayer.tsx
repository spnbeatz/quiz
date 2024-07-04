import React from "react";
import { useDragLayer } from "react-dnd";
import { motion } from "framer-motion";

const layerStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  opacity: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

const getItemStyles = (currentOffset: { x: number, y: number } | null) => {
  if (!currentOffset) {
    return { display: "none" };
  }

  const { x, y } = currentOffset;
  return {
    transform: `translate(${x}px, ${y}px)`,
    WebkitTransform: `translate(${x}px, ${y}px)`,
  };
};

export const CustomDragLayer: React.FC = () => {
  const {
    item,
    itemType,
    currentOffset,
    isDragging,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <motion.div
        className="dnd-preview-hidden"
        style={getItemStyles(currentOffset)}
      >
        {/* Customize the preview if needed */}
      </motion.div>
    </div>
  );
};
