const defaultState = {
    items: []
  }
 export const itemReducer = (state = defaultState, action) => {
    switch (action.type) {
    case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload] }
  
      default:
        return state;
    }
  }