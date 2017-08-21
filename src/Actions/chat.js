import 'whatwg-fetch';

export const newMessage = (username, message) => {
  return {
    type: 'NEW_MESSAGE',
    username,
    message,
  };
};

export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    username,
  };
};

export const joinTrue = () => {
  return {
    type: 'JOIN_TRUE',
  };
};

export const newUser = (user) => {
  return {
    type: 'NEW_USER',
    user,
  };
};

export const update = (msg) => {
  return {
    type: 'UPDATE',
    msg,
  };
};

export const room = (i) => {
  return {
    type: 'ROOM',
    i,
  };
};

