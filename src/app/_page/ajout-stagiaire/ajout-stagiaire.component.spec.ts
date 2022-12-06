import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutStagiaireComponent } from './ajout-stagiaire.component';

describe('AjoutStagiaireComponent', () => {
  let component: AjoutStagiaireComponent;
  let fixture: ComponentFixture<AjoutStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutStagiaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
