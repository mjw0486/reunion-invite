import isLoggedInReducer from './isLoggedIn.js';
import inRoomReducer from './inRoom.js';
import inviteListReducer from './inviteList.js';
import newInviteReducer from './newInvite.js';
import numberOfInvitesReducer from './numberOfInvites.js';
import inviteSentReducer from './inviteSent.js';
import videoReducer from './video.js';
import userInputIsActiveReducer from './userInputIsActive.js';
import passwordIsActiveReducer from './passwordIsActive.js';
import passwordReducer from './passwordReducer.js';
import usernameReducer from './usernameReducer.js';
import roomNameInputIsActiveReducer from './roomNameInputIsActiveReducer.js';
import roomNameReducer from './roomNameReducer.js';
import updateAddToListReducer from './updateAddToListReducer.js';
import addToListInputIsActiveReducer from './addToListInputIsActiveReducer.js';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  inRoom: inRoomReducer,
  inviteList: inviteListReducer,
  newInvite: newInviteReducer,
  numberOfInvites: numberOfInvitesReducer,
  inviteSent: inviteSentReducer,
  userInputIsActive: userInputIsActiveReducer,
  passwordIsActive: passwordIsActiveReducer,
  username: usernameReducer,
  password: passwordReducer,
  roomNameInputIsActive: roomNameInputIsActiveReducer,
  roomName: roomNameReducer,
  addToList: updateAddToListReducer,
  addToListInputIsActive: addToListInputIsActiveReducer,
  videos: videoReducer
});

export default allReducer;