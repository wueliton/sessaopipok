import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MoviesHistoryDataSource} from '../datasources';
import {MoviesHistory, MoviesHistoryRelations} from '../models';

export class MoviesHistoryRepository extends DefaultCrudRepository<
  MoviesHistory,
  typeof MoviesHistory.prototype.id,
  MoviesHistoryRelations
> {
  constructor(
    @inject('datasources.MoviesHistory') dataSource: MoviesHistoryDataSource,
  ) {
    super(MoviesHistory, dataSource);
  }
}
