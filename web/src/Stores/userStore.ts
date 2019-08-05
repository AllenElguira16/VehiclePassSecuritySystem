import { EventEmitter } from "events";
import Axios from 'axios';

class userStore extends EventEmitter{
  constructor() {
    super();
    this.fetchAuthUser();
  }
  
  public user = {};

  private async fetchAuthUser() {
    let {data} = await Axios.get('/user');
    this.user = data.user;
  }

  public getUser() {
    return this.user;
  }
}

export default new userStore();