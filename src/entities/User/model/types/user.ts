export type User = {
  id: string;
  username: string;
};

export type UserSchema = {
  authData?: User;
  __initialized__: boolean;
};
