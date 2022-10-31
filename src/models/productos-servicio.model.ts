import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ProductosServicio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProductosServicio>) {
    super(data);
  }
}

export interface ProductosServicioRelations {
  // describe navigational properties here
}

export type ProductosServicioWithRelations = ProductosServicio & ProductosServicioRelations;
