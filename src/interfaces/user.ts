export interface UserInterface {
  _id: string;
  avatar: {
    url: string;
    localPath: string;
    _id: string;
  };
  username: string;
  email: string;
  role:string;
  createdAt: string;
  updatedAt: string;
}
