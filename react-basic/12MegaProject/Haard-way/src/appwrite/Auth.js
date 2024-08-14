import conf from "../conf/conf";
import {Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    contructor(){
        this.client
                .setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);
        this.account = new Account( this.client );        
    }

    async createAccount({ email, password, name}) {
        try {
          const userAccount = await this.account.create( ID.unique(), email, password, name );
          if(userAccount){
            return await this.login({ email, password })
          }
          else{ 
          return userAccount;
          }
        } catch (error) {
            console.log(" user account is not created",error)
        }
    }
    async login({ email, password }){
        try{
           return await this.account.createEmailSession( email, password )
        }
        catch(error){
            console.log("invalid credentials ",error)
        }
    }
    async getCurrentUser(){
        try {
            return this.account.get();
           
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    } 
    async logout() {
        try {
            this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

export const authService = new AuthService();