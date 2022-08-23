import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as actions from '../shared/store/actions';

@Injectable({ providedIn: 'root' })
export class GamesService {
  private GAMES_API = `${environment.apiGame}/games.php`;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getGames(): Observable<Game[]> {
    this.store.dispatch(actions.isLoading());

    return this.http.get<Game[]>(this.GAMES_API).pipe(
      map((res: Game[]) => {
        setTimeout(() => {
          this.store.dispatch(actions.stopLoading());
        }, 1500);

        return res;
      }),
      catchError((error) => this.handleError(error))
    );
  }

  handleError(error: any): Observable<any> {
    this.store.dispatch(actions.stopLoading());
    return of({ error });
  }
}
