const sinon = require("sinon");
const chai = require("chai");
const chaiHttp = require('chai-http');
const conn = require("../../../src/models/connection");
const productServices = require("../../../src/services/product.services");
const productControllers = require("../../../src/controllers/product.controller");
const mock = require("../../mocks");
const productModels = require('../../../src/models/product.model');
const { use } = require("chai");
const app = require('../../../src/app');

const { expect } = chai;
// const { getProducts } = productServices;
const { getAllProducts, insertNewProduct, getProductById } = productControllers;
const { getAll } = productModels;

use(chaiHttp);


describe("Testa controller getProductById de produtos", () => {
  let stub;
  let execStub;
  let res;

  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([mock.productsMock]);
    res = {
      status: sinon.stub().returns({ json: sinon.spy() }),
    };
    req = {
      params: {
        id: '1'
      }
    }
  });

  afterEach(() => {
    stub.restore();
  });

  it("Verifica se o retorno é o esperado", async () => {
    await getProductById(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    sinon.assert.calledOnce(execStub);
  });
});

describe("Testa controller insertNewProduct de produtos", () => {
  let stub;
  let execStub;
  let res;

  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute").resolves([mock.productsMock]);
    res = {
      status: sinon.stub().returns({ json: sinon.spy() }),
    };
    req = {
      body: {
        name: 'Produto de teste'
      }
    }
  });

  afterEach(() => {
    stub.restore();
  });

  it("Verifica se o retorno é o esperado", async () => {
    await insertNewProduct(req, res)
    expect(res.status.calledWith(201)).to.be.true;
    sinon.assert.calledOnce(execStub);
  });
});


describe("Testa controller getAllProducts de produtos", () => {

  let stub;
  let execStub;

  beforeEach(() => {
    stub = sinon.createSandbox();
    execStub = stub.stub(conn, "execute");
  })

  afterEach(() => {
    stub.restore();
  })

  it('Testando se o retorno é o esperado', async () => {

    execStub.resolves([mock.productsMock])

    const response = await chai.request(app).get('/products');

    expect(response.status).to.equal(200);

    expect(response.body).to.be.instanceOf(Array);

    stub.restore();

  })

  // it("Testando disparo de erro", async () => {

  //   // execStub.rejects(new Error('deu erro'));
  //   execStub.rejects(new Error);

  //   const response = await chai.request(app).get("/products");

  //   console.log(response.body)

  //   expect(response.status).to.be.equal(400);
  // });
  
});
