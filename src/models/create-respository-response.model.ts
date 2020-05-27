import {Model, model, property} from '@loopback/repository';

@model()
export class CreateRespositoryResponse extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({type: 'string'})
  name?: string;

  @property({type: 'string', required: true})
  url: string;

  @property({type: 'string', required: true})
  creaetedOn: string;


  constructor(data?: Partial<CreateRespositoryResponse>) {
    super(data);
  }
}

export interface CreateRespositoryResponseRelations {
  // describe navigational properties here
}

export type CreateRespositoryResponseWithRelations = CreateRespositoryResponse & CreateRespositoryResponseRelations;
