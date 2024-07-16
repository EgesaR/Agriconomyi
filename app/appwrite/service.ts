import { ID, Account, Client } from "appwrite";

const appwriteClient = new Client();

const APPWRITE_ENDPOINT  = "https://cloud.appwrite.io/v1"
const APPWRITE_PROJECT_ID  = "6671f9de0018ef30635d"

type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }

  async createUserAccount({email, password, name}: CreateUserAccount){
    try{
      const userAccount = await this.account.create(
        ID.unique, 
        email, 
        password, 
        name
      );

      if(userAccount){
        return this.login({ email, password })
      } else {
        return userAccount
      }
    }catch(error){
      console.log("Appwrite service :: createAccount :: "+ error)
    }
  }

  async login({email, password}: LoginUserAccount){
    try{
      return await this.account.createEmailSession( email, password)
    }catch(error){
      console.log("Appwrite service :: loginAccount :: "+ error)
    }
  }

  async getCurrentUser(){
    try{
      return await this.account.get()
    } catch(error){
      console.log("Appwrite service :: loginAccount :: "+ error)
    }
  }

  async logout(){
    try{
      return await this.account.deleteSession('current')
    } catch(error){
      console.log("Appwrite service :: loginAccount :: "+ error)
    }
  }
}


export default AppwriteService