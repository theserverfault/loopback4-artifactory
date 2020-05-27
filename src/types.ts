import {CreateRespositoryResponse} from './models';

/**
 * ArtifactoryFacade
 */
export interface ArtifactoryFacade {
  /**
   * The simple repository that will hold the
   * artifact contents including the version.
   * The T is generic and can contain the
   */
  createRepository(T: object): Promise<CreateRespositoryResponse>;
}

export interface RepositoryConfigurations {
  /**
   * name of repository
   */
  key: string,
}

/**
 * configuration properties required for using third party
 * artifactory services.
 * Assuming the Authentication will be Header Key-Value type authentication
 * for APIs
 */
export interface ArtifactoryServiceConfig {
  apiKey: string,
  headerKey: string,
  clientId?: string,  // future proof
}
