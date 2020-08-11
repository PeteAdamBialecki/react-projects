import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    players: [{
        name: 'Kye Kim',
        score: 31,
        created: '11/8/2016',
        updated: '11/9/2016'
    },
    {
        name: 'Eva Bialecki',
        score: 20,
        created: '11/9/2016',
        updated: '11/10/2016'
    },
    {
        name: 'Phil Hardman',
        score: 50,
        created: '11/11/2016',
        updated: '11/12/2016'
    }
    ],
    selectedPlayerIndex: -1
}

export default function Player(state = initialState, action) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            const addPlayerList = [...state.players, {
                name: action.name,
                score: 0,
                created: `${month}/${day}/${year}`
            }];
            return {
                ...state,
                players: addPlayerList
            };

        case PlayerActionTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            return [
                ...state,
                players: removePlayerList
            ];
        }

        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        updated: `${month}/${day}/${year}`
                    };
                }
                return player;
            });
            return {
                ...state,
                players: updatePlayerList
            };
        }

        case PlayerActionTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            };

        default:
            return state;
    }
}