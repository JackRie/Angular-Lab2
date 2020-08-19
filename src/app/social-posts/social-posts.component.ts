import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool',
    },
    {
      title: 'Banana Bois',
      thought: 'And the Lemon Ladies',
    },
    {
      title: 'Pizza',
      thought: 'Is a vegetable',
    },
  ];
  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onAdd(post: Post) {
    this.posts.unshift(post);
  }

  ngOnInit(): void {}
}
