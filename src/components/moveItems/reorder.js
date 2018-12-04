export const reorder = (list, startIndex, endIndex) => {
    // reorders list, similar to move but from one col to the same col.
    // makes an array from list
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};