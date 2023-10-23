import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Distance, DistanceRelations, Location} from '../models';
import {LocationRepository} from './location.repository';

export class DistanceRepository extends DefaultCrudRepository<
  Distance,
  typeof Distance.prototype._id,
  DistanceRelations
> {

  public readonly Origin: BelongsToAccessor<Location, typeof Distance.prototype._id>;

  public readonly Destination: BelongsToAccessor<Location, typeof Distance.prototype._id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('LocationRepository') protected locationRepositoryGetter: Getter<LocationRepository>,
  ) {
    super(Distance, dataSource);
    this.Destination = this.createBelongsToAccessorFor('Destination', locationRepositoryGetter,);
    this.registerInclusionResolver('Destination', this.Destination.inclusionResolver);
    this.Origin = this.createBelongsToAccessorFor('Origin', locationRepositoryGetter,);
    this.registerInclusionResolver('Origin', this.Origin.inclusionResolver);
  }
}
