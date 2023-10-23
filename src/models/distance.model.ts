import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Location} from './location.model';

@model()
export class Distance extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Meters: number;

  @belongsTo(() => Location)
  OriginId: string;

  @belongsTo(() => Location)
  DestinationId: string;

  constructor(data?: Partial<Distance>) {
    super(data);
  }
}

export interface DistanceRelations {
  // describe navigational properties here
}

export type DistanceWithRelations = Distance & DistanceRelations;
