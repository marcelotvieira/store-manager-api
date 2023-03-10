const { getProducts, getById } = require("../../../src/services/product.services");
const conn = require("../../../src/models/connection");
const { productsMock } = require("../../mocks");
const chaiHttp = require("chai-http");
const chai = require("chai");
const sinon = require("sinon");

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

});

describe("Testando Service getById de produtos", () => {
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
    const response = await getById('1');
    expect(getById).to.be.instanceOf(Function);
    expect(response).to.be.instanceOf(Array);
    expect(response).to.be.equals(productsMock);
  });

});
