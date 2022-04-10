export enum PERMISSION_GROUP {
  USER = "user",
  ADMIN = "admin",
  MAINTAINER = "maintainer",
}

export interface AccountT {
  _id: string;
  name: string;
  password: string;
  permission: keyof typeof PERMISSION_GROUP;
  likedRecipes: string[];
}
