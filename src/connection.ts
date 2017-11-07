import * as mongoose from "mongoose";

export const connection: mongoose.Connection = mongoose.createConnection(process.env.MONGODB_CONNECTION);
