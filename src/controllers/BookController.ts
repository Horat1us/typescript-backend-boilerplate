import { Router, Request, Response } from "express";
import { Book, BookModel } from "../models/Book";
import { connection } from "../connection";
import * as mongoose from "mongoose";

export const BookController: Router = Router();

BookController.get('/:id', async (request: Request, response: Response) => {
    let id;
    try {
        id = new mongoose.mongo.ObjectId(request.params.id);
    }
    catch (error) { }
    
    let book: BookModel;
    try {
        book = id ? await Book.findById(id).exec() : undefined;
    }
    catch (error) {
        response.send(error);
        return;
    }


    if (!book) {
        response.statusCode = 405;
        return response.send().end();
    }

    response.json({
        id: book._id,
        title: book.title,
    });
});
