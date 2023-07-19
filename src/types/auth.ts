export interface ITokens {
  access: {
    expires: string;
    token: string;
  };
  refresh: {
    expires: string;
    token: string;
  };
}

export interface IAuth {
  tokens: ITokens;
  user: IUser;
}

export enum Role {
  HEAD = "head_cpy",
  BRANCH = "branch_cpy",
}

export interface IUser {
  id: number;
  email: string;
  role: Role;
  status: number;
  address: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}

export interface IRefreshToken {
  user: string;
  tokens: ITokens;
}
