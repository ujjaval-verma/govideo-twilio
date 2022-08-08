import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorVideoContainerComponent } from './coordinator-video-container.component';

describe('CoordinatorVideoContainerComponent', () => {
  let component: CoordinatorVideoContainerComponent;
  let fixture: ComponentFixture<CoordinatorVideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorVideoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
