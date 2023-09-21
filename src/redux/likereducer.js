export const likereducer = (state = 0, action) => {
    
    if (action.type === "Like") {
      return state+1;
    } else {
        return state;
      
    }
  };
  