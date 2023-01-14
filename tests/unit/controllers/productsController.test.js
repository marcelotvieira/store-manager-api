const sinon = require("sinon");
const chai = require("chai");
const conn = require('../../../src/models/connection');
const { getProducts } = require("../../../src/services/product.services");
const {
  getAllProducts,
} = require("../../../src/controllers/product.controller");
const { productsMock } = require("../../mocks");

const { expect } = chai;

describe("Testa controller getAllProducts de produtos", () => {
  let stub;
  let execStub;
  let res;

  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([productsMock]);
    res = {
      status: sinon.stub().returns({ json: sinon.spy() }),
    };
  });

  afterEach(() => {
    stub.restore();
  });

  it("Verifica se o retorno é o esperado", async () => {
    await getAllProducts({}, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status().json.calledWith(productsMock)).to.be.true;
    sinon.assert.calledOnce(execStub);
  });

  it("Verifica disparo de erro", async () => {
    execStub.rejects(new Error());
    const response = await getAllProducts({}, res);
    expect(response).to.be.instanceOf(Error)

  });
});
