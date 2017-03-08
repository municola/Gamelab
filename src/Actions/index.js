import 'whatwg-fetch';

export const saveName = (name) => {
  return {
    type: 'SAVE_NAME',
    name,
  };
};

export const saveRegion = (region) => {
  return {
    type: 'SAVE_REGION',
    region,
  };
};

export const getFriends = () => {
  return {
    type: 'GET_FRIENDS',
  };
};

export function fetchId(url) {
  return (dispatch) => {
    fetch(url)
    .then((response) => {
      return response.json().then((json) => {
        dispatch({ type: 'FETCH_ID_FULFILLED', payload: json[Object.keys(json)[0]].id });
        dispatch({ type: 'INCREMENT_CALLNUMBER' });
      });
    }).catch((err) => {
      dispatch({ type: 'FETCH_ID_REJECTED', payload: err });
    });
  };
}

export function fetchGame(url, arrayId) {
  return (dispatch) => {
    fetch(url)
    .then((response) => {
      return response.json().then((json) => {
        if (response.ok) {
          console.log(json);
          if (json.gameType === 'CUSTOM_GAME') {
            console.log('custom');
            dispatch({
              type: 'FETCH_GAME_FULFILLED_CUSTOM',
              title: 'In game',
              startTime: json.gameStartTime,
              gameType: json.gameType,
              gameMode: json.gameMode,
              gameId: json.gameId,
              arrayId,
            });
          } else {
            dispatch({
              type: 'FETCH_GAME_FULFILLED_MATCHED',
              title: 'In game',
              startTime: json.gameStartTime,
              participants: [
                json.participants[0].summonerName,
                json.participants[1].summonerName,
                json.participants[2].summonerName,
                json.participants[3].summonerName,
                json.participants[4].summonerName,
                json.participants[5].summonerName,
                json.participants[6].summonerName,
                json.participants[7].summonerName,
                json.participants[8].summonerName,
                json.participants[9].summonerName,
              ],
              teamId: [
                json.participants[0].teamId,
                json.participants[1].teamId,
                json.participants[2].teamId,
                json.participants[3].teamId,
                json.participants[4].teamId,
                json.participants[5].teamId,
                json.participants[6].teamId,
                json.participants[7].teamId,
                json.participants[8].teamId,
                json.participants[9].teamId,
              ],
              bannedChampions: json.bannedChampions.length,
              gameType: json.gameType,
              gameMode: json.gameMode,
              gameId: json.gameId,
              arrayId,
            });
          }
          dispatch({ type: 'INCREMENT_CALLNUMBER' });
        } else {
          dispatch({ type: 'FETCH_GAME_NOT_FULFILLED', title: 'Not in game', arrayId });
          dispatch({ type: 'INCREMENT_CALLNUMBER' });
        }
      });
    }).catch((err) => {
      console.log('not ok. fetch game rejected', err);
      dispatch({ type: 'FETCH_GAME_REJECTED', payload: err });
    });
  };
}

export const addSummoner = () => {
  return {
    type: 'ADD_SUMMONER',
  };
};

export const resetCounter = () => {
  return {
    type: 'RESET_COUNTER',
  };
};

export const errorMessage = (text) => {
  return {
    type: 'ERROR_MESSAGE',
    text,
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT_COUNTER',
  };
};

export const deleteFriend = (arrayId) => {
  return {
    type: 'DELETE_FRIEND',
    arrayId,
  };
};

export const setParticipants = (arrayId, bool) => {
  return {
    type: 'SET_PARTICIPANTS',
    arrayId,
    bool,
  };
};

export const progressBarCounter = () => {
  return {
    type: 'INCREMENT_PROGRESS_BAR_COUNTER',
  };
};
