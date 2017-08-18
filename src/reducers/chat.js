const initialState = {
  chatlog: [],
  login: false,
  username: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'NEW_CHAT' : {
      return { ...state, chatlog: action.chatlog };
    }
    case 'SET_USERNAME' : {
      return { ...state, username: action.username };
    }
    case 'LOGIN_TRUE' : {
      return { ...state, login: true };
    }
    default: {
      return state;
    }
  }
}
