import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, response} from '@loopback/rest';
import {MoviesHistory} from '../models';
import {MoviesHistoryRepository} from '../repositories';

export class MoviesHistoryController {
  constructor(
    @repository(MoviesHistoryRepository)
    public moviesHistoryRepository: MoviesHistoryRepository,
  ) {}

  @get('/history')
  @response(200, {
    description: 'Array of MoviesHistory model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(MoviesHistory, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<MoviesHistory[]> {
    return this.moviesHistoryRepository.find();
  }
}
