import mongoose from "mongoose"
export async function connect_mongo(mongo_uri){
    try {
        await mongoose.connect(mongo_uri);
        console.log("Connct to MongoDB !");
    } catch (error) {
        console.error("Error:", error);
    }
}

