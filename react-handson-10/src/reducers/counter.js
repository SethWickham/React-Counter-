const initialState = {
  count: 0,
  count2: 0,
  addNewNumber: null
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        count2: state.count2 + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        count2: state.count2 + 1
      };
      case 'ADD_NUMBER':
      return {
        ...state,
        count: parseInt(state.addNewNumber),
        count2: 0,
      };
        
      case 'NUMBER_CHANGED':
      return {
        ...state,
        addNewNumber: action.number
      }
    default:
      return state;
  };
}

export default counterReducer;