// Handles moving cross column
export const move = (source, destination, droppableSource, droppableDestination) => {
    // makes an array from source and destination
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
   
    //moves card from one array to another
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    
    const result = {};

    // uses cource id and destination id to get result 
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
};