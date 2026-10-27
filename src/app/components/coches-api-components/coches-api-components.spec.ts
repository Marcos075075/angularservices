import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CochesApiComponents } from './coches-api-components';

describe('CochesApiComponents', () => {
  let component: CochesApiComponents;
  let fixture: ComponentFixture<CochesApiComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CochesApiComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(CochesApiComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
