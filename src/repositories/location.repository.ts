import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Location, LocationRelations} from '../models';

export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype._id,
  LocationRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Location, dataSource);
  }
}
