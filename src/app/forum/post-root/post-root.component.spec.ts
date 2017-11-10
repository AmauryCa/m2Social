import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRootComponent } from './post-root.component';

describe('PostRootComponent', () => {
  let component: PostRootComponent;
  let fixture: ComponentFixture<PostRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
