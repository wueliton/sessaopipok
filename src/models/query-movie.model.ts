import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class QueryMovie extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  query: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<QueryMovie>) {
    super(data);
  }
}

export interface QueryMovieRelations {
  // describe navigational properties here
}

export type QueryMovieWithRelations = QueryMovie & QueryMovieRelations;
