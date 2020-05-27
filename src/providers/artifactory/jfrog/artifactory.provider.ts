import {Provider} from '@loopback/core';
import {CreateRespositoryResponse} from '../../../models';
import {JFrogArtifactory, JFrogRepositoryConfigurations} from './types';

export class JFrogArtifactoryProvider implements Provider<JFrogArtifactory> {
  constructor() {

  }

  value(): JFrogArtifactory {
    return {
      createRepository: (config: JFrogRepositoryConfigurations): Promise<CreateRespositoryResponse> => {
        return Promise.resolve(<CreateRespositoryResponse>{
          url: 'https://testurl.com',
          id: 1,
          name: 'testname',
          creaetedOn: new Date().toString(),
        });
      }
    };
  }
}
