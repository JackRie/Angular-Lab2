import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../interfaces/post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-thought',
  templateUrl: './new-thought.component.html',
  styleUrls: ['./new-thought.component.css'],
})
export class NewThoughtComponent implements OnInit {
  @Output() added = new EventEmitter<Post>();
  constructor() {}

  addPost(form: NgForm) {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.added.emit(newPost);
    form.reset();
  }

  ngOnInit(): void {}
}
