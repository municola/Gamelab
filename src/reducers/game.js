const initialState = {
  counter: 10,
  callNumber: 10,
  count: 10,
  progressBarCounter: 0,
  counterEnabler: true,
  errorMessage: null,
  key: 'RGAPI-5b813980-c836-4d36-b88e-74548dd18c6b',
  region: 'euw',
  name: '',
  summonerID: '',
  error: null,
  game: [
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
    'Not fetched yet',
  ],
  friendsArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  friendsName: [
    'Aaaron',
    'wäkipfui',
    'Helli98',
    'Râphy',
    'Guinosaji',
    'Guinosaji2',
    'SagothDerDieb',
    'I need 13900 lP',
    'Pomsi99',
    'Billie67',
  ],
  friendsId: [
    42699023,
    41117886,
    34898586,
    29324850,
    36857263,
    24353882,
    38868095,
    39706261,
    34565363,
    79569856,
  ],
  gameStart: ['', '', '', '', '', '', '', '', '', ''],
  gameParticipants: ['', '', '', '', '', '', '', '', '', ''],
  gameParticipantsTeam: ['', '', '', '', '', '', '', '', '', ''],
  showParticipants: [false, false, false, false, false, false, false, false, false, false],
  bannedChampions: ['', '', '', '', '', '', '', '', '', ''],
  gameMode: ['', '', '', '', '', '', '', '', '', ''],
  gameType: ['', '', '', '', '', '', '', '', '', ''],
  gameId: ['', '', '', '', '', '', '', '', '', ''],
  styles: {
    style1: { backgroundColor: '#008e43' },
    style2: { backgroundColor: '#c6002e' },
    style3: { backgroundColor: 'white' },
  },
};

function transformToHHMMSS(gameStart) {
  const timeNow = Date.now();
  const d = Number(Math.round(((timeNow - gameStart) / 1000) * 10) / 10);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);
  if (h > 100) {
    return ("0: "(s < 10 ? "0" : "") + s);
  }
  return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SAVE_NAME' : {
      return {
        ...state,
        name: action.name,
      };
    }
    case 'SAVE_REGION' : {
      return {
        ...state,
        region: action.region,
      };
    }
    case 'FETCH_ID_FULFILLED' : {
      return { ...state, summonerID: action.payload };
    }
    case 'FETCH_ID_REJECTED' : {
      return { ...state, error: action.payload };
    }
    case 'FETCH_GAME_FULFILLED_CUSTOM' : {
      const gameStart = action.startTime;
      const time = transformToHHMMSS(gameStart);
      return {
        ...state,
        game: [
          ...state.game.slice(0, action.arrayId),
          state.game[action.arrayId] = action.title,
          ...state.game.slice(action.arrayId + 1),
        ],
        gameStart: [
          ...state.gameStart.slice(0, action.arrayId),
          state.gameStart[action.arrayId] = time,
          ...state.gameStart.slice(action.arrayId + 1),
        ],
        gameMode: [
          ...state.gameMode.slice(0, action.arrayId),
          state.gameMode[action.arrayId] = action.gameMode,
          ...state.gameMode.slice(action.arrayId + 1),
        ],
        gameType: [
          ...state.gameType.slice(0, action.arrayId),
          state.gameType[action.arrayId] = action.gameType,
          ...state.gameType.slice(action.arrayId + 1),
        ],
        gameId: [
          ...state.gameId.slice(0, action.arrayId),
          state.gameId[action.arrayId] = action.gameId,
          ...state.gameId.slice(action.arrayId + 1),
        ],
      };
    }
    case 'FETCH_GAME_FULFILLED_MATCHED' : {
      const gameStart = action.startTime;
      const time = transformToHHMMSS(gameStart);
      return {
        ...state,
        game: [
          ...state.game.slice(0, action.arrayId),
          state.game[action.arrayId] = action.title,
          ...state.game.slice(action.arrayId + 1),
        ],
        gameStart: [
          ...state.gameStart.slice(0, action.arrayId),
          state.gameStart[action.arrayId] = time,
          ...state.gameStart.slice(action.arrayId + 1),
        ],
        gameParticipants: [
          ...state.gameParticipants.slice(0, action.arrayId),
          state.gameParticipants[action.arrayId] = action.participants,
          ...state.gameParticipants.slice(action.arrayId + 1),
        ],
        gameParticipantsTeam: [
          ...state.gameParticipantsTeam.slice(0, action.arrayId),
          state.gameParticipantsTeam[action.arrayId] = action.teamId,
          ...state.gameParticipantsTeam.slice(action.arrayId + 1),
        ],
        bannedChampions: [
          ...state.bannedChampions.slice(0, action.arrayId),
          state.bannedChampions[action.arrayId] = action.bannedChampions,
          ...state.bannedChampions.slice(action.arrayId + 1),
        ],
        gameMode: [
          ...state.gameMode.slice(0, action.arrayId),
          state.gameMode[action.arrayId] = action.gameMode,
          ...state.gameMode.slice(action.arrayId + 1),
        ],
        gameType: [
          ...state.gameType.slice(0, action.arrayId),
          state.gameType[action.arrayId] = action.gameType,
          ...state.gameType.slice(action.arrayId + 1),
        ],
        gameId: [
          ...state.gameId.slice(0, action.arrayId),
          state.gameId[action.arrayId] = action.gameId,
          ...state.gameId.slice(action.arrayId + 1),
        ],
      };
    }
    case 'FETCH_GAME_NOT_FULFILLED' : {
      return {
        ...state,
        game: [
          ...state.game.slice(0, action.arrayId),
          state.game[action.arrayId] = action.title,
          ...state.game.slice(action.arrayId + 1),
        ],
        gameStart: [
          ...state.gameStart.slice(0, action.arrayId),
          state.gameStart[action.arrayId] = '',
          ...state.gameStart.slice(action.arrayId + 1),
        ],
        gameParticipants: [
          ...state.gameParticipants.slice(0, action.arrayId),
          state.gameParticipants[action.arrayId] = '',
          ...state.gameParticipants.slice(action.arrayId + 1),
        ],
        gameParticipantsTeam: [
          ...state.gameParticipantsTeam.slice(0, action.arrayId),
          state.gameParticipantsTeam[action.arrayId] = '',
          ...state.gameParticipantsTeam.slice(action.arrayId + 1),
        ],
        bannedChampions: [
          ...state.bannedChampions.slice(0, action.arrayId),
          state.bannedChampions[action.arrayId] = '',
          ...state.bannedChampions.slice(action.arrayId + 1),
        ],
        gameMode: [
          ...state.gameMode.slice(0, action.arrayId),
          state.gameMode[action.arrayId] = '',
          ...state.gameMode.slice(action.arrayId + 1),
        ],
        gameType: [
          ...state.gameType.slice(0, action.arrayId),
          state.gameType[action.arrayId] = '',
          ...state.gameType.slice(action.arrayId + 1),
        ],
        gameId: [
          ...state.gameId.slice(0, action.arrayId),
          state.gameId[action.arrayId] = '',
          ...state.gameId.slice(action.arrayId + 1),
        ],
      };
    }
    case 'FETCH_GAME_REJECTED' : {
      return { ...state, error: action.payload };
    }
    case 'ADD_SUMMONER' : {
      return {
        ...state,
        game: state.game.concat(['Not fetched yet']),
        friendsArray: state.friendsArray.concat([state.count]),
        friendsName: state.friendsName.concat([state.name]),
        friendsId: state.friendsId.concat([state.summonerID]),
        gameStart: state.gameStart.concat(['']),
        gameParticipants: state.gameParticipants.concat(['']),
        gameParticipantsTeam: state.gameParticipantsTeam.concat([false]),
        showParticipants: state.showParticipants.concat(['']),
        bannedChampions: state.bannedChampions.concat(['']),
        gameMode: state.gameMode.concat(['']),
        gameType: state.gameType.concat(['']),
        gameId: state.gameId.concat(['']),
        count: state.count + 1,
        summonerID: '',
      };
    }
    case 'INCREMENT_CALLNUMBER' : {
      return {
        ...state,
        callNumber: state.callNumber + 1,
      };
    }
    case 'RESET_COUNTER' : {
      return {
        ...state,
        callNumber: 0,
        counter: 10,
        progressBarCounter: 0,
      };
    }
    case 'ERROR_MESSAGE' : {
      return {
        ...state,
        errorMessage: action.text,
      };
    }
    case 'DECREMENT_COUNTER' : {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case 'DELETE_FRIEND' : {
      return {
        ...state,
        friendsArray: [
          ...state.friendsArray.slice(0, -1),
        ],
        friendsId: [
          ...state.friendsId.slice(0, action.arrayId),
          ...state.friendsId.slice(action.arrayId + 1),
        ],
        friendsName: [
          ...state.friendsName.slice(0, action.arrayId),
          ...state.friendsName.slice(action.arrayId + 1),
        ],
        game: [
          ...state.game.slice(0, action.arrayId),
          ...state.game.slice(action.arrayId + 1),
        ],
        gameStart: [
          ...state.gameStart.slice(0, action.arrayId),
          ...state.gameStart.slice(action.arrayId + 1),
        ],
        gameParticipants: [
          ...state.gameParticipants.slice(0, action.arrayId),
          ...state.gameParticipants.slice(action.arrayId + 1),
        ],
        gameParticipantsTeam: [
          ...state.gameParticipantsTeam.slice(0, action.arrayId),
          ...state.gameParticipantsTeam.slice(action.arrayId + 1),
        ],
        showParticipants: [
          ...state.showParticipants.slice(0, action.arrayId),
          ...state.showParticipants.slice(action.arrayId + 1),
        ],
        bannedChampions: [
          ...state.bannedChampions.slice(0, action.arrayId),
          ...state.bannedChampions.slice(action.arrayId + 1),
        ],
        gameMode: [
          ...state.gameMode.slice(0, action.arrayId),
          ...state.gameMode.slice(action.arrayId + 1),
        ],
        gameType: [
          ...state.gameType.slice(0, action.arrayId),
          ...state.gameType.slice(action.arrayId + 1),
        ],
        gameId: [
          ...state.gameId.slice(0, action.arrayId),
          ...state.gameId.slice(action.arrayId + 1),
        ],
        count: state.count - 1,
      };
    }
    case 'SET_PARTICIPANTS' : {
      return {
        ...state,
        showParticipants: [
          ...state.showParticipants.slice(0, action.arrayId),
          state.showParticipants[action.arrayId] = action.bool,
          ...state.showParticipants.slice(action.arrayId + 1),
        ],
      };
    }
    case 'INCREMENT_PROGRESS_BAR_COUNTER' : {
      return {
        ...state,
        progressBarCounter: state.progressBarCounter + 100,
      };
    }
    default: {
      return state;
    }
  }
}
