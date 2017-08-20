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

