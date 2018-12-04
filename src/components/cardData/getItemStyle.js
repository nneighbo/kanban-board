let grid = 8;
//creates style for cards
export const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? '#e5e5e5' : 'white',

    opacity: isDragging ? 0.9 : 1.0,
  
    // styles we need to apply on draggables
    ...draggableStyle
});