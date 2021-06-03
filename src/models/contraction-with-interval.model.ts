import { Contraction } from './contraction.model';

export interface ContractionWithInterval extends Contraction {
  interval?: number;
}
