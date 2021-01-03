export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  };
};

export const decrement = (num) => {
  return {
    type: 'DECREMENT',
    payload: num
  };
};

export const enter = () => {
  return {
    type: 'ENTER'
  };
};

export const exit = () => {
  return {
    type: 'EXIT'
  };
};

export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const addToInvites = (k, val) => {
  return {
    type: 'ADDTOLIST',
    payload: {
      key: k,
      value: val
    }
  };
};

export const sendInvites = (list) => {
  return {
    type: 'SENDINVITES',
    payload: list
  };
};

export const createInvite = (char) => {
  return {
    type: 'CREATEINVITE',
    payload: char
  };
};

export const resetInvite = () => {
  return {
    type: 'RESETINVITE',
  };
};

export const addToNumberOfInvites = () => {
  return {
    type: 'ADDTONUMBEROFINVITES',
  };
};

export const resetNumberOfInvites = () => {
  return {
    type: 'RESETNUMBEROFINVITES',
  };
};

export const sendInvitesAndEnter = () => {
  return {
    type: 'INVITESENT',
  };
};

export const addVideo = (video, index) => {
  return {
    type: 'ADDVIDEO',
    payload: video,
    payload_index: index
  };
};

export const removeVideo = (video, index) => {
  return {
    type: 'REMOVEVIDEO',
    payload: video,
    payload_index: index
  };
};

export const toggleActiveUsername = () => {
  return {
    type: 'TOGGLEACTIVEUSERNAME',
  };
};

export const toggleActivePassword = () => {
  return {
    type: 'TOGGLEACTIVEPASSWORD',
  };
};

export const updateUsername = (update) => {
  return {
    type: 'UPDATEUSERNAME',
    payload: update
  };
};

export const updatePassword = (update) => {
  return {
    type: 'UPDATEPASSWORD',
    payload: update
  };
};

export const toggleActiveRoomNameInput = () => {
  return {
    type: 'TOGGLEACTIVEROOMNAMEINPUT',
  };
};

export const updateRoomName = (update) => {
  return {
    type: 'UPDATEROOMNAME',
    payload: update
  };
};

export const updateAddToList = (update) => {
  return {
    type: 'UPDATEADDTOLIST',
    payload: update
  };
};

export const toggleActiveAddToListInput = () => {
  return {
    type: 'TOGGLEACTIVEADDTOLISTINPUT',
  };
};