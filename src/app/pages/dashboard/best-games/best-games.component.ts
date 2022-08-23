import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Game, BeastGame } from 'src/app/interfaces';
import { UpdayeGameService } from 'src/app/services/update-game.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
// import * as actions from '../../../shared/store/actions';

@Component({
  selector: 'app-best-games',
  templateUrl: './best-games.component.html',
  styleUrls: ['./best-games.component.scss'],
})
export class BestGamesComponent implements OnInit, OnDestroy {
  private currentCategories: string[] = [];
  loader = false;
  loadingSubscription: Subscription;
  beastGames$!: Observable<BeastGame[]>;
  destroy$ = new Subject<void>();
  updateJackpots = 10000;
  lengthGames: any;

  constructor(
    private route: ActivatedRoute,
    private updayeGameService: UpdayeGameService,
    private store: Store<AppState>,
  ) {
    // LOADER NGRX
    this.loadingSubscription = this.store.select('loading')
    .subscribe((res) => {
      this.loader = res.isLoading;
    });
  }

  ngOnInit(): void {
    this.updateBeastGames();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.loadingSubscription.unsubscribe();
  }

  updateBeastGames() {
    this.currentCategories = this.route.snapshot.data['categories'];
    this.beastGames$ = this.updayeGameService.beastGames$.pipe(
      map((games) =>
        games.filter((game) =>
          game.categories.some((category) =>
            this.currentCategories.includes(category)
          )
        )
      )
    );

    this.beastGames$.subscribe((res) => (this.lengthGames = res));

    this.updayeGameService
      .updateJackpots(this.updateJackpots)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  searchCategory(game: Game | BeastGame): boolean {
    if (
      this.currentCategories.some(
        (category) => category !== 'new' && category !== 'top'
      )
    ) {
      return game.categories.some(
        (category) => category === 'new' || category === 'top'
      );
    }
    return false;
  }
}
