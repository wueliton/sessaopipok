import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'OMDBAPI',
  connector: 'openapi',
  spec: 'http://www.omdbapi.com/?apikey=ea68db65&',
  validate: false,
  positional: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class OmdbapiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'OMDBAPI';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.OMDBAPI', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
