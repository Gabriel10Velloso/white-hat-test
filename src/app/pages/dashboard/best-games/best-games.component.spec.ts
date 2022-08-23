import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGamesComponent } from './best-games.component';

describe('BestGamesComponent', () => {
  let component: BestGamesComponent;
  let fixture: ComponentFixture<BestGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
