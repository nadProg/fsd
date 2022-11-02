export type User = {
  id: string;
  username: string;
  avatar?: string;
};

export type UserSchema = {
  authData?: User;
  __initialized__: boolean;
};
