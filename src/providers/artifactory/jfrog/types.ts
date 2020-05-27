import {CreateRespositoryResponse} from '../../../models';
import {Artifactory, ArtifactoryRepositoryConfigurations} from '../types';

/**
 * The available JFrog configurations required at the time of creating the
 * a root folder/repository on JForg
 * https://www.jfrog.com/confluence/display/JFROG/Repository+Configuration+JSON
 */
export interface JFrogRepositoryConfigurations extends ArtifactoryRepositoryConfigurations {
  /**
   * Represents the name of the repository
   */
  key: string,
  /**
   * The repository class can contain either of
   * local, remote, virtual. Usually local
   */
  rclass: string,
  /**
   * The type of package being hosted. Can be either of specified values.
   * Most used configuration is "generic"
   */
  packageType: "maven" | "gradle" | "ivy" | "sbt" | "helm" | "cocoapods" | "opkg" | "rpm" | "nuget" | "cran" | "gems" | "npm" | "bower" | "debian" | "composer" | "pypi" | "docker" | "vagrant" | "gitlfs" | "go" | "yum" | "conan" | "chef" | "puppet" | "generic",
  /**
   * optional description about respoitory
   */
  description?: string,
  /**
   * some internal notes
   */
  notes?: string,
  /**
   * Pattern structure
   */
  includesPattern?: string,
  /**
   *
   */
  excludesPattern?: string,
  /**
   * The repository layout format definition
   * go-default, ivy-default, maven-default, build-default
   * The layout format could be custom and could defined in Artifactory dashboard
   * https://www.jfrog.com/confluence/display/JFROG/Repository+Layouts
   */
  repoLayoutRef?: string,
  /**
   * Whether to handle releases
   */
  handleReleases?: boolean,
  /**
   * whether to handle snapshots
   */
  handleSnapshots?: boolean,
  /**
   * number of max unique snapshots
   */
  maxUniqueSnapshots?: number,
  /**
   * max unique allowed tags
   */
  maxUniqueTags?: number,
  snapshotVersionBehaviour?: string,
  xrayIndex?: boolean,
};

export interface JFrogArtifactory extends Artifactory {
  /**
   * The JFrog service function to create the repository
   * @param {JFrogRepositoryConfigurations} repositoryConfigurations represents the
   * configurations accepted by the JFrog HTTP REST API as part of payload. The data
   * will be composed into a json file and send to JFrog REST API.
   * @see https://www.jfrog.com/confluence/display/JFROG/Artifactory+REST+API#ArtifactoryRESTAPI-CreateRepository
   *
   */
  createRepository(repositoryConfigurations: JFrogRepositoryConfigurations): Promise<CreateRespositoryResponse>;
}
