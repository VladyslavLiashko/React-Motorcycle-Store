const defaultState = {
    num: 0,
  }
 export const numberReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_NUM":
        return { ...state, num: state.num + action.payload, }

  
      default:
        return state;
    }
  }