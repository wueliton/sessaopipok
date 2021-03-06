import {repository} from '@loopback/repository';
import {get, param, response} from '@loopback/rest';
import axios from 'axios';
import {MoviesHistoryRepository} from '../repositories';

export class QueryMovieController {
  constructor(
    @repository(MoviesHistoryRepository)
    public moviesHistoryRepository: MoviesHistoryRepository,
  ) {}

  @get('/query/{name}')
  @response(200, {
    description: 'Search Movie by Name',
  })
  async getMovieByName(
    @param.path.string('name') name: string,
  ): Promise<object> {
    const filter = JSON.stringify(name);
    const data = await axios.get(
      `http://www.omdbapi.com/?apikey=ea68db65&t=${filter}`,
    );
    return data;
  }
}
