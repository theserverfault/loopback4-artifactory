import {inject, Provider} from '@loopback/core';
import {ArtifactoryBindings} from '../keys';
import {CreateRespositoryResponse} from '../models';
import {ArtifactoryFacade, RepositoryConfigurations} from '../types';

export class ArtifactoryProvider implements Provider<ArtifactoryFacade> {
  constructor(
    @inject(ArtifactoryBindings.ArtifactoryProvider)
    private readonly artifactoryProvider: ArtifactoryFacade,
  ) {}


  createRepository(config: RepositoryConfigurations): Promise<CreateRespositoryResponse> {
    return this.artifactoryProvider?.createRepository(config);
  }

  value() {
    return {
      createRepository: async (config: RepositoryConfigurations) => this.createRepository(config),
    };
  }
}
