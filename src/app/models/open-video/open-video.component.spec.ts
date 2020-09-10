import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenVideoComponent } from './open-video.component';

describe('OpenVideoComponent', () => {
  let component: OpenVideoComponent;
  let fixture: ComponentFixture<OpenVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
