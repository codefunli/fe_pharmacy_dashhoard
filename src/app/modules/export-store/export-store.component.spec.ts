import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportStoreComponent } from './export-store.component';

describe('ExportStoreComponent', () => {
  let component: ExportStoreComponent;
  let fixture: ComponentFixture<ExportStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
