export const initialState = [
  {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
  }
];

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case 'TOGGLE_COMPLETED':
      return state.map(todo =>
        todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
      );
    case 'CLEAR_COMPLETED':
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
}