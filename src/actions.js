//Action Types
export const CREATE_PLAYER = 'CREATE_PLAYER'
export const CREATE_GAME = 'CREATE_GAME'
export const JOIN_GAME = 'JOIN_GAME'


export function actionCreatePlayer(playerName) {
    return { type: CREATE_PLAYER, playerName }
}

export function actionCreateGame(player) {
    return { type: CREATE_GAME, player }
}

export function actionJoinGame(gameId) {
    return { type: JOIN_GAME, gameId }
}