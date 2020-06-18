import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdToolsComponent } from './sd-tools.component';

describe('SdToolsComponent', () => {
  let component: SdToolsComponent;
  let fixture: ComponentFixture<SdToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
