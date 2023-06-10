import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgPagesComponent } from './kg-pages.component';

describe('KgPagesComponent', () => {
  let component: KgPagesComponent;
  let fixture: ComponentFixture<KgPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KgPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KgPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
