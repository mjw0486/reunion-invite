const userInputIsActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLEACTIVEUSERNAME':
      return !state;
    default:
      return state;
  };
};

export default userInputIsActiveReducer;