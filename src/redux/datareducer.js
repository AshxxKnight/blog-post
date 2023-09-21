const initialState = {
    data: []
  };
  
  export const datareducer = (state = initialState, action) => {
    switch (action.type) {
      case 'Add-Post':
        return {
          ...state,
          data: [...state.data, action.payload],
        };
  
      case 'Edit-Post':
        // Assuming action.payload contains the edited data and an index
        const updatedData = [...state.data];
        updatedData[action.payload.index] = {...action.payload};
        console.log(action.payload);
        console.log(updatedData)
        return {
          ...state,
          data: updatedData,
        };
  
      case 'Delete':
        const id = parseInt(action.payload) ;
        console.log(id);
        const deletedData = state.data.filter((items,index)=>
          index!==id
        );

        console.log(deletedData);
        return {
          ...state,
          data: deletedData,
        };

      default:
        return state;
    }
  };
  