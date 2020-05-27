import {Binding, Component, ProviderMap} from '@loopback/core';
import {ArtifactoryBindings} from './keys';
import {ArtifactoryProvider} from './providers';
import {JFrogBindings} from './providers/artifactory';

export class ArtifactsComponent implements Component {
  constructor() {}

  providers?: ProviderMap = {
    [ArtifactoryBindings.ArtifactoryProvider.key]: ArtifactoryProvider,
  };

  bindings?: Binding[] = [
    Binding.bind(ArtifactoryBindings.Config.key).to(null),
    Binding.bind(JFrogBindings.Config.key).to(null),
  ];
}
