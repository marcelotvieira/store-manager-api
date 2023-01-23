const { getAll, findById } = require("../../../src/models/product.model");
const conn = require("../../../src/models/connection");
const { productsMock } = require("../../mocks");
const chaiHttp = require("chai-http");
const chai = require("chai");
const sinon = require("sinon");

const { expect } = chai;

chai.use(chaiHttp);

describe("Testando Model getAll de produtos", () => {
  let stub;
  let execStub;

  ////////////// stubing /////////
  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([productsMock]);
  });

  afterEach(() => {
    stub.restore();
  });
  /////////////// restoring ////////////

  it("Testando se a função tem o retorno esperado", async () => {
    expect(getAll).to.be.instanceOf(Function);
    const response = await getAll();
    expect(response).to.be.instanceOf(Array);
    expect(response).to.be.equals(productsMock);
  });
});


describe("Testando Model findById de produtos", () => {
  let stub;
  let execStub;
  const id = 2;

  ////////////// stubing /////////
  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([productsMock[id - 1]]);
  });

  afterEach(() => {
    stub.restore();
  });
  /////////////// restoring ////////////

  it("Testando se a função tem o retorno esperado", async () => {
    expect(findById).to.be.instanceOf(Function);
    const response = await findById('1');
    expect(response).to.be.instanceOf(Object);
    console.log(response)
    expect(response).to.be.equals(productsMock[id - 1]);
  });
});
