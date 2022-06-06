import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedComponentComponent } from './blocked-component.component';

describe('BlockedComponentComponent', () => {
  let component: BlockedComponentComponent;
  let fixture: ComponentFixture<BlockedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
