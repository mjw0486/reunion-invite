const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATEUSERNAME':
      return action.payload;
    default:
      return state;
  };
};

export default usernameReducer;