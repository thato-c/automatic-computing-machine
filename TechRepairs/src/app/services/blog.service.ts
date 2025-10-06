import { Injectable } from "@angular/core";
import { BlogPost } from "../models/blog.model";

@Injectable({
    providedIn: 'root'
})
export class BlogService{
    private blogPosts: BlogPost[] = [
        {id: 1, title: 'Introduction to Angular', author: 'Me', date: '2025-08-26', content: 'Angular is a platform for building mobile and desktop web applications...'},
    ];

    constructor() {}

    getAllPosts(): BlogPost[]{
        return this.blogPosts;
    }

    getPostsById(id:number): BlogPost | undefined{
        return this.blogPosts.find(post => post.id === id);
    }
}