import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Distance,
  Location,
} from '../models';
import {DistanceRepository} from '../repositories';

export class DistanceLocationController {
  constructor(
    @repository(DistanceRepository)
    public distanceRepository: DistanceRepository,
  ) { }

  @get('/distances/{id}/location', {
    responses: {
      '200': {
        description: 'Location belonging to Distance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Location),
          },
        },
      },
    },
  })
  async getLocation(
    @param.path.string('id') id: typeof Distance.prototype._id,
  ): Promise<Location> {
    return this.distanceRepository.Destination(id);
  }
}
