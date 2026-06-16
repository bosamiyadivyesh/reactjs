import conf from "../conf/conf"
import {Client, Account, ID, Databases,Storage,Query} from "appwrite";

export class Service{
    client=new Client();
    account;
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)    
    }
    async createPost({title,slug,content,featuredImage,status,userid}){
        try{
            return await this.database.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug
            ,{
                title,
                content,
                featuredImage,
                status,
                userid
            })            
        }
        catch(error){
            console.error("Error creating post:", error);
            throw error;    
        }
    }

    async upd

}
