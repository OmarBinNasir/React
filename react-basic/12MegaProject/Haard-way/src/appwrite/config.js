import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query} from  "appwrite"

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
          this.databases = new Databases();
          this.bucket = new Storage();
    }
    async createPost({ title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost error", error);
            
        }
    }
    async updatePost(slug, { title, content, featuredImage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
                
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost error", error);
        }
    }
    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug

            )
        } catch (error) {
            console.log("Appwrite service :: deletePost error", error);
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost error", error);
            throw error;
        }
    }
    async getPosts(queries = [Query.equal(["status","active"])]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts error", error);
        }
    }


    // upload files service

    async uploadFile(file){
        try {
          return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
          )
        
        } catch (error) {
            console.log("Appwrite service :: uploadFile error", error);
        }
    }
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: getPost error", error);
        }
    }
    async getFilePreview(fileId){
        try{
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
         } catch(error){
            console.log("Appwrite service ::previewFile error", error);
         }

    }
}

const service = new Service()
export default service