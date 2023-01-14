const { getAll } = require("../../../src/models/product.model");
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
  });

  it("Testando o disparo de erro", async () => {
    execStub.rejects(new Error());
    const response = await getAll();
    expect(response).to.be.instanceOf(Error);
  });
});
