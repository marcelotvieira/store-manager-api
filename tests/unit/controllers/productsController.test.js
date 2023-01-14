const sinon = require("sinon");
const chai = require("chai");
const conn = require("../../../src/models/connection");
const productServices = require("../../../src/services/product.services");
const productControllers = require("../../../src/controllers/product.controller");
const mock = require("../../mocks");

const { expect } = chai;
const { getProducts } = productServices;
const { getAllProducts } = productControllers;


describe("Testa controller getAllProducts de produtos", () => {
  let stub;
  let execStub;
  let res;

  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([mock.productsMock]);
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
    expect(res.status().json.calledWith(mock.productsMock)).to.be.true;
    sinon.assert.calledOnce(execStub);
  });

  // it("Verifica disparo de erro", async () => {
  //   execStub.rejects(new Error());
  //   const response = await getAllProducts({}, res);
  //   expect(response).to.be.instanceOf(Error);
  // });
});
