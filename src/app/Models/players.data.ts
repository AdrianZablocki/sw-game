export enum Players {
    PLAYER_ONE = 'Player One',
    PLAYER_TWO = 'Player Two',
}

export interface IPlayerResult {
    player: string;
    score?: number;
}

export interface IGameType {
    type: string;
    player: string;
}
