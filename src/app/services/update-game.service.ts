import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, forkJoin, interval } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Game, BeastGame, NewValJackpot } from '../interfaces';
import { GamesService } from './games.service';
import { JnewValJackpotService } from './new-val-jackpot.service';

@Injectable({ providedIn: 'root' })
export class UpdayeGameService {

  private gamesSource = new BehaviorSubject<BeastGame[]>([]);
  beastGames$ = this.gamesSource.asObservable();

  constructor(
    private gamesService: GamesService,
    private jnewValJackpotService: JnewValJackpotService) { }

  next(games: BeastGame[]): void {
    this.gamesSource.next(games);
  }


  addGamesPlusJackpots(games: BeastGame[], jackpots: NewValJackpot[]): BeastGame[] {
    return games.map(game => {
      const addJackpot = jackpots.find(jackpot => jackpot.game === game.id);
      game.amount = addJackpot?.amount;
      return game as BeastGame;
    });
  }


  startState(): Observable<BeastGame[]> {
    return forkJoin([this.gamesService.getGames(), this.jnewValJackpotService.getJackpots()]).pipe(
      map(([games, jackpots]: [Game[], NewValJackpot[]]) => this.addGamesPlusJackpots(games, jackpots)),
      tap(result => this.next(result))
    );
  }


  updateJackpots(ms: number): Observable<BeastGame[]> {
    return interval(ms).pipe(
      switchMap(() => this.jnewValJackpotService.getJackpots()),
      withLatestFrom(this.beastGames$),
      map(([jackpots, games]: [NewValJackpot[], BeastGame[]]) => this.addGamesPlusJackpots(games, jackpots)),
      tap((result) => this.next(result))
    );
  }
}
