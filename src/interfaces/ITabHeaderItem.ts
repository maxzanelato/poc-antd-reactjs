export interface ITabHeaderItem {
  id: number;
  number: string;
  text: string;
  icon?: any;
  content: any;
}

export interface OwnPropsITabHeaderItem {
  tab: Array<ITabHeaderItem>;
}
