import type { Released } from './types';

export default interface Item {
  Id: number;
  IsReleased: Released;
  Category: string;
  Name: string;
}
