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
  createdAt: string;
  email: string;
  userprofile: UserProfile;
}
