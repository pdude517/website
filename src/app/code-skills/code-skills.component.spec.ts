import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSkillsComponent } from './code-skills.component';

describe('CodeSkillsComponent', () => {
  let component: CodeSkillsComponent;
  let fixture: ComponentFixture<CodeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
