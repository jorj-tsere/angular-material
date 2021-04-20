import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  public flatlogic: string = 'https://flatlogic.com/';
  // tslint:disable-next-line:no-inferrable-types
  public flatlogicAbout: string = 'https://flatlogic.com/about';
  // tslint:disable-next-line:no-inferrable-types
  public flatlogicBlog: string = 'https://flatlogic.com/blog';
  constructor() {}

  ngOnInit(): void {}
}
