export interface Solution {
  author: string;
  date: string;
  solutions: string[]; // TODO: revove this from DB and codebase
  solution: string;
  primary: string;
  secondary: string;
}