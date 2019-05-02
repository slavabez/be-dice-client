export interface RollAuthor {
  name: string;
  avatar: string;
  color: string;
}

export interface singleRoll {
  order?: number;
  sides: number;
  result: number;
}

export interface RollMessage {
  author: RollAuthor;
  rollString: string;
  total: number;
  rolls: singleRoll[];
  // Created at is either a date or a timestamp
  createdAt: Date | number;
}

export interface Avatar {
  thumb: string;
  src: string;
  name: string;
}

export interface User {
  avatar: Avatar;
  name: string;
  color: {
    hex: string;
    name: string;
  };
  id?: string;
}

export interface Room {
  name: string;
  users: User[];
  history: RollMessage[];
  createdAt: Date | number;
  numOfUsers?: number;
}
