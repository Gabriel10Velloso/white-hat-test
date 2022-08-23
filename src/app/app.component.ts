import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { UpdayeGameService } from './services/update-game.service';
import { VariablesService } from './shared/service/variables.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
              private titleService: Title,
              private variablesService: VariablesService,
              private updayeGameService: UpdayeGameService) {}

  ngOnInit() {
    this.updayeGameService.startState().subscribe();

    this.router.events
      .pipe(
        filter((e): e is NavigationStart => e instanceof NavigationStart),
        tap((res:any)=>{

          let checkRouter  = res.url.split('/')[2];
          this.variablesService.changeNavBar(checkRouter)
        }),
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
          }
          return routeTitle;
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`White Hat ↔️ ${title}`);
        }
      });
  }
}
