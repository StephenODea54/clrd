export interface ITableHeader {
  id: number,
  label: string,
};

export interface IGame {
  gameId: number;
  team: string;
  opponent: string;
  opponentNickName: string;
  opponentLogo: string;
  gameLocation: string;
  gameAddress: string;
  gameDate: string;
  gameTime: string;
};
