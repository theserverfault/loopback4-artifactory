import {BindingKey} from '@loopback/core';
import {ArtifactoryFacade, ArtifactoryServiceConfig} from './types';

export namespace ArtifactoryBindings {
  export const ArtifactoryProvider = BindingKey.create<ArtifactoryFacade>(
    'sf.artifactprovider',
  );

  export const Config = BindingKey.create<ArtifactoryServiceConfig | null>(
    'sf.artifactprovider.config',
  );
}
