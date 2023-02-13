import { RickAndMortyUser, User } from "@/models";
type RickAndMortyUserToUser = {
  user?: User;
  apiUser: RickAndMortyUser;
};

export class RickyAndMortyUserAdapter {
  private apiUser: RickAndMortyUser;
  private user?: User;
  constructor({ user, apiUser }: RickAndMortyUserToUser) {
    this.apiUser = apiUser;
    this.user = user;
  }
  get User(): User {
    return {
      id: this.apiUser.id,
      name: this.apiUser.name,
    };
  }
}
