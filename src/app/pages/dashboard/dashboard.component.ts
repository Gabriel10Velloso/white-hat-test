import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {  MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';
import { ExampleFlatNode, FoodNode } from '../../interfaces/mat-tree.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  clickToggle = false;
  valSelectedRouter: string = 'best-games';
  valSelected: string = 'Top Gamas';
  routerTab: string = 'Top Gamas';
  matToolbarColor = 'var(--primary)';

  TREE_DATA: FoodNode[] = [
    {
      name: 'Best games',
      id: '1',
      children: [
        { id: '1/best-games', name: 'Top Gamas' },
        { id: '1/new-games', name: 'New Games' },
        { id: '1/slots', name: 'Slots' },
        { id: '1/jackpots', name: 'Jackpots' },
        { id: '1/live', name: 'Live' },
        { id: '1/black-jack', name: 'Blackjack' },
        { id: '1/roulette', name: 'Roulette' },
        { id: '1/table', name: 'Table' },
        { id: '1/poker', name: 'Poker' },
        { id: '1/other', name: 'Others' },
      ],
    },
    {
      name: 'All games',
      id: '2',
      children: [
        { id: '2/all-games', name: 'Testing' },
        { id: '2/all-games1', name: 'Testing1' },
        { id: '2/all-games2', name: 'Testing2' },
        { id: '2/all-games3', name: 'Testing3' },
        { id: '2/all-games4', name: 'Testing4' },
        { id: '2/all-games5', name: 'Testing5' },
        { id: '2/all-games6', name: 'Testing6' },
        { id: '2/all-games7', name: 'Testing7' },
        { id: '2/all-games8', name: 'Testing8' },
        { id: '2/all-games9', name: 'Testing9' },
      ],
    },
  ];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      level: level,
      id: node.id,
      name: node.name,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void {
    // this.showObjective(this.contratarObj);
  }

  /**
   * @title Tree with flat nodes
   */
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  toolbarColor(event: string) {
    this.matToolbarColor = event;
  }

  clickToggleNew() {
    // this.clickToggle != this.clickToggle
    if (this.clickToggle) {
      this.clickToggle = false;
      return;
    }
    this.clickToggle = true;
  }
}
