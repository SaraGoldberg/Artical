import { Comment } from "./comment.model";

export class Article {
    id?: Number;
    title?: string;
    content?: string;
    comments?: Comment [];
}