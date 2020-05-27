import {CreateRespositoryResponse} from '../../models';
import {ArtifactoryFacade, RepositoryConfigurations} from '../../types';

export interface Artifactory extends ArtifactoryFacade {
  createRepository(T: object): Promise<CreateRespositoryResponse>;
}

export interface ArtifactoryRepositoryConfigurations extends RepositoryConfigurations {
  key: string,
}
