import 'whatwg-fetch';

export const newChat = (chatlog) => {
  return {
    type: 'NEW_CHAT',
    chatlog,
  };
};

export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    username,
  };
};

export const loginTrue = () => {
  return {
    type: 'LOGIN_TRUE',
  };
};

