import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class MoviesHistory extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  query: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MoviesHistory>) {
    super(data);
  }
}

export interface MoviesHistoryRelations {
  // describe navigational properties here
}

export type MoviesHistoryWithRelations = MoviesHistory & MoviesHistoryRelations;
