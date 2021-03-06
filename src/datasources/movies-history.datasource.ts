import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MoviesHistory',
  connector: 'mongodb',
  url: 'mongodb+srv://paulo:A71f3VnFXfV4LDUN@cluster0.wghbx.mongodb.net/SessaoPipoK?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MoviesHistoryDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MoviesHistory';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MoviesHistory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
