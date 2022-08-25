import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportStoreComponent } from './import-store.component';

describe('ImportStoreComponent', () => {
  let component: ImportStoreComponent;
  let fixture: ComponentFixture<ImportStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
