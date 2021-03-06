import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from 'app/models/joke';


@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.scss']
})
export class JokeCardListComponent implements OnInit {
  @Input() jokes: Joke[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() loadAllRequested = new EventEmitter();
  @Output() loadCategoryRequested = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }
}