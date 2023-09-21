export const dislikereducer = (state = 0, action) => {
    if (action.type === "Dislike") {
      return state+1;
    } else {
        return state;
      
    }
  };
  