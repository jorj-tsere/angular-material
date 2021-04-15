import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardItemComponent } from './post-card-item.component';

describe('PostCardItemComponent', () => {
  let component: PostCardItemComponent;
  let fixture: ComponentFixture<PostCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
