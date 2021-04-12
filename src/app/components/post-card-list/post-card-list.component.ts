import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'app/models';

@Component({
  selector: 'app-post-card-list',
  templateUrl: './post-card-list.component.html',
  styleUrls: ['./post-card-list.component.scss']
})
export class PostCardListComponent implements OnInit {

  @Input() posts: Post[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() loadAllRequested = new EventEmitter();
  @Output() loadCategoryRequested = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

}
