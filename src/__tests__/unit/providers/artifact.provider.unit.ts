import {expect} from '@loopback/testlab';
import {JFrogArtifactoryProvider, JFrogRepositoryConfigurations} from '../../../providers';

describe('Artifactiry Provider (unit)', () => {
	it('will test calling the sample provider function', async () => {
		const config = <JFrogRepositoryConfigurations>{
			key: 'sample-repository',
			rclass: 'local',
			repoLayoutRef: 'build-default',
		};
		const provider = new JFrogArtifactoryProvider().value();
		const response = await provider.createRepository(config);
		expect(response.name).to.equal('testname');
	})
});

