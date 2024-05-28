export type TLoginUser = {
  identity: string;
  password: string;
};

export type TRegisterUser = {
  username: string;
  password: string;
  email: string;
};

interface UserProfile {
  id: string;
  userId: string;
  bio: string;
  name: string;
  profession: string;
  address: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUser {
  id: string;
  username: string;
  role: string;
  createdAt: string;
  email: string;
  userprofile: UserProfile;
}

export interface IUserInfo {
  id: string;
  role: string;
  username: string;
  iat: number;
  exp: number;
}
