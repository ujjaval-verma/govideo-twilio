import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorVideoContainerComponent } from './inspector-video-container.component';

describe('InspectorVideoContainerComponent', () => {
  let component: InspectorVideoContainerComponent;
  let fixture: ComponentFixture<InspectorVideoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorVideoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectorVideoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
