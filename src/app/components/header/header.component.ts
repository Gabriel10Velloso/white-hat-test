import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VariablesService } from 'src/app/shared/service/variables.service';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  checkRouter!: string;

  @Output() toolbarColor = new EventEmitter<string>();

  constructor(private variablesService: VariablesService) {

    /**
     * @tollbar change navigation color
     */
    this.variablesService.setNavBar$.pipe(debounceTime(50)).subscribe((res) => {
      this.checkRouter = res === undefined ? '1' : res;
      if (this.checkRouter === '1' || !this.checkRouter) {
        this.toolbarColor.emit('var(--primary)');
      } else if (this.checkRouter === '2') {
        this.toolbarColor.emit('var(--tollbar)');
      }
    });
  }

  ngOnInit(): void {}
}
