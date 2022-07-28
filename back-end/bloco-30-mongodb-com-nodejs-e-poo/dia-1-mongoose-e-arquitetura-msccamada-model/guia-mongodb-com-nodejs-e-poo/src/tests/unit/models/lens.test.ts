import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens.model';
import { Model, isValidObjectId } from 'mongoose';
import { lensMock, lensMocksArray, lensMockWithId } from '../../mocks/Lens.mock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
		sinon.stub(Model, 'find').resolves(lensMocksArray);
		sinon.stub(Model, "findByIdAndDelete").resolves(lensMock);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
	describe('read all lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.read();
			expect(lensFound).to.be.deep.equal(lensMocksArray)
		});
	});

	describe('delete lens by id', () => {
		// before(() => {
		// 	const mock = sinon.mock(isValidObjectId);
		// 	mock.expects('').resolves(false)
		// });

		it('successfully delete', async () => {
			// Esse teste quebra pois não mockei a função do mongoose
			const lensFound = await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMock)
		});

		it('_id not found', async () => {
			try {
				await lensModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});