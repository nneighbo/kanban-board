let grid = 8
//creates styles for cols
export const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? '#1f2532' : '#1f2532',
    padding: grid,
    width: 300,
    opacity: isDraggingOver ? 0.9 : 1.0,
});