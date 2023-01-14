const { getProducts } = require("../../../src/services/product.services");
const conn = require("../../../src/models/connection");
const { productsMock } = require("../../mocks");
const chaiHttp = require("chai-http");
const chai = require("chai");
const sinon = require("sinon");
const { getAll } = require("../../../src/models/product.model");

const { expect } = chai;

chai.use(chaiHttp);

describe("Testando Service getProducts de produtos", () => {
  let stub;
  let execStub;

  ////////////// stubing /////////
  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, 'execute').resolves([productsMock]);
  });

  afterEach(() => {
    stub.restore();
  });
  /////////////// restoring ////////////

  it("Testando se a função tem o retorno esperado", async () => {
    const response = await getProducts();
    expect(getProducts).to.be.instanceOf(Function);
    expect(response).to.be.instanceOf(Array);
    expect(response).to.be.equals(productsMock);
  });

  it('Testando disparo de erro', async () => {
      execStub.rejects(new Error());
      const response = await getProducts();
      expect(response).to.be.instanceOf(Error);
  })
});
