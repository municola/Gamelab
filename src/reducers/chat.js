const initialState = {
  chatlog: [],
  users: [],
  join: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'NEW_MESSAGE' : {
      return {
        ...state,
        chatlog: state.chatlog.concat([[action.username, action.message]]),
      };
    }
    case 'SET_USERNAME' : {
      return { ...state, username: action.username };
    }
    case 'JOIN_TRUE' : {
      return { ...state, join: true };
    }
    case 'NEW_USER' : {
      return {
        ...state,
        users: action.user,
      };
    }
    default: {
      return state;
    }
  }
}
