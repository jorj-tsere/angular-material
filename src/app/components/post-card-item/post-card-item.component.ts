import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'app/models/post';

@Component({
  selector: 'app-post-card-item',
  templateUrl: './post-card-item.component.html',
  styleUrls: ['./post-card-item.component.scss']
})
export class PostCardItemComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit(): void {
  }

}
