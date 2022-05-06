const sinon = require('sinon');
const { expect } = require('chai');
// const { describe, before, it } = require('mocha');

const MoviesController = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = {};

      res.status = sinon.stub().returns(res);
      res.send = sinon.stub().returns();
    });

    it('é chamado o status com o código 400', async () => {
      await MoviesController.create(req, res);

      expect(res.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await MoviesController.create(req, res);

      expect(res.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const res = {};
    const req = {};

    before(() => {
      req.body = {
        title: 'BeetleJuice',
        directedBy: 'Tim Burton',
        releaseYear: 1988,
      };

      res.status = sinon.stub().returns(res);

      sinon.stub(MoviesService, 'create').resolves(true);
      res.send = sinon.stub().returns();
    });

    after(() => {
      MoviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await MoviesController.create(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await MoviesController.create(req, res);

      expect(res.send.calledWith('Filme criado com sucesso!')).to.be.equal(
        true
      );
    });
  });
});
