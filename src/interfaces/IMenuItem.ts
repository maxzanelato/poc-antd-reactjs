export interface IMenuItem {
  id: number;
  icon: string;
  text: string;
}

export interface OwnPropsIMenuItem {
  menuItem: Array<IMenuItem>;
}
