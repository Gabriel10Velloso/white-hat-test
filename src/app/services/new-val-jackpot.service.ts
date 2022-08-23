import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewValJackpot } from '../interfaces';
@Injectable({ providedIn: 'root' })

export class JnewValJackpotService {

    private JACKPOTS_API = `${environment.apiGame}/jackpots.php`;

    constructor(private http: HttpClient) { }

    getJackpots(): Observable<NewValJackpot[]> {
        return this.http.get<NewValJackpot[]>(this.JACKPOTS_API);
    }
}
