type ID = string | number;

export interface ItemInterface {
  readonly id: ID;
  icon?: string;
  message: string;
  modify?: string;
  callback?: () => void;
}

export interface IconInterface {
  id: string;
  toString: () => string;
  url: string;
  viewBox: string;
}
