import * as mongoose from "mongoose";
import { connection } from "../connection";

export interface BookInterface {
    title: string,
    createdAt?: Date,
}

export interface BookModel extends BookInterface, mongoose.Document {

}

export const BookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    }
);

BookSchema.pre("save", next => {
    if (!this.createdAt) {
        this.createdAt = new Date;
    }
    next();
});


export const Book: mongoose.Model<BookModel> = connection.model<BookModel>("Book", BookSchema);