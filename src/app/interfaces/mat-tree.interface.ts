export interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: string;
}


export interface FoodNode {
  name: string;
  id: string;
  children?: FoodNode[];
}
