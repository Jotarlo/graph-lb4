import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Distance} from '../models';
import {DistanceRepository} from '../repositories';

export class DistanceController {
  constructor(
    @repository(DistanceRepository)
    public distanceRepository : DistanceRepository,
  ) {}

  @post('/distances')
  @response(200, {
    description: 'Distance model instance',
    content: {'application/json': {schema: getModelSchemaRef(Distance)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distance, {
            title: 'NewDistance',
            exclude: ['_id'],
          }),
        },
      },
    })
    distance: Omit<Distance, '_id'>,
  ): Promise<Distance> {
    return this.distanceRepository.create(distance);
  }

  @get('/distances/count')
  @response(200, {
    description: 'Distance model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Distance) where?: Where<Distance>,
  ): Promise<Count> {
    return this.distanceRepository.count(where);
  }

  @get('/distances')
  @response(200, {
    description: 'Array of Distance model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Distance, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Distance) filter?: Filter<Distance>,
  ): Promise<Distance[]> {
    return this.distanceRepository.find(filter);
  }

  @patch('/distances')
  @response(200, {
    description: 'Distance PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distance, {partial: true}),
        },
      },
    })
    distance: Distance,
    @param.where(Distance) where?: Where<Distance>,
  ): Promise<Count> {
    return this.distanceRepository.updateAll(distance, where);
  }

  @get('/distances/{id}')
  @response(200, {
    description: 'Distance model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Distance, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Distance, {exclude: 'where'}) filter?: FilterExcludingWhere<Distance>
  ): Promise<Distance> {
    return this.distanceRepository.findById(id, filter);
  }

  @patch('/distances/{id}')
  @response(204, {
    description: 'Distance PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Distance, {partial: true}),
        },
      },
    })
    distance: Distance,
  ): Promise<void> {
    await this.distanceRepository.updateById(id, distance);
  }

  @put('/distances/{id}')
  @response(204, {
    description: 'Distance PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() distance: Distance,
  ): Promise<void> {
    await this.distanceRepository.replaceById(id, distance);
  }

  @del('/distances/{id}')
  @response(204, {
    description: 'Distance DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.distanceRepository.deleteById(id);
  }
}
