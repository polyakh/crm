export interface EntityShape {
  [key: string]: unknown;
}

export type EntityDto<T extends EntityShape> = T;

export abstract class EntityMapperAbstract<
  Entity extends EntityShape,
  Dto extends EntityDto<Entity>,
> {
  abstract toDto(entity: Entity): Dto;
  abstract toDomain(dto: Dto): Entity;
  abstract toDomainArray(dtos: Dto[]): Entity[];
}
