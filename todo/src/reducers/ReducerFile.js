export const initialValue = {
    todo: [
      {
        name: "Learn about reducers",
        completed: false,
        id: 3889,
      },
      {
        name: "Study React",
        completed: false,
        id: 389290,
      },
      {
        name: "Read about Redux",
        completed: false,
        id: 3591,
      },
    ],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todo: [
            ...state.todo,
            {
              name: action.payload,
              id: Date.now(),
              completed: false,
            },
          ],
        };
      case "TOGGLE_ITEM":
        return {
          ...state,
          todo: state.todo.map((item) => {
            if (action.payload === item.id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return {
              ...item,
            };
          }),
        };
      case "CLEAR_ALL":
        return {
          ...state,
          todo: state.todo.filter((item) => !item.completed),
        };
      default:
        return state; //( completed: true)
    }
  };