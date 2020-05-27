import {BindingKey} from '@loopback/core';
import {ArtifactoryServiceConfig} from '../../../types';

export namespace JFrogBindings {
  export const Config = BindingKey.create<ArtifactoryServiceConfig>(
    'sf.artifactoryprovider.jforg',
  );
}
