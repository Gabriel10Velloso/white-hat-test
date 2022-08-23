import { Game } from './game.interface';
import { NewValJackpot } from './new-val-jackpot.interface';

export interface BeastGame extends Game, Partial<NewValJackpot> { }
