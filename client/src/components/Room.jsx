import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../actions';
// import createSocket from '../socket.js';
import { useHistory } from "react-router-dom";

const Room = function() {
  const history = useHistory();
  // history.push(`/room/${ROOM_ID}`);
  // createSocket();
  return(
    <React.Fragment>
      <div>
        Room!
      </div>
    </React.Fragment>
  );
};

export default Room;