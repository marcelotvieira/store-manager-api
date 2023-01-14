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
const { getProducts } = productServices;
const { getAllProducts } = productControllers;
const { getAll } = productModels;

use(chaiHttp);


describe("Testa controller getAllProducts de produtos", () => {
  // let stub;
  // let execStub;
  // let res;

  // beforeEach(() => {
  //   stub = sinon.createSandbox();
  //   execStub = stub.stub(conn, "execute").resolves([mock.productsMock]);
  //   res = {
  //     status: sinon.stub().returns({ json: sinon.spy() }),
  //   };
  // });

  // afterEach(() => {
  //   stub.restore();
  // });

  // it("Verifica se o retorno é o esperado", async () => {
  //   await getAllProducts({}, res);
  //   expect(res.status.calledWith(200)).to.be.true;
  //   expect(res.status().json.calledWith(mock.productsMock)).to.be.true;
  //   sinon.assert.calledOnce(execStub);
  // });

  // it("Verifica disparo de erro", async () => {
  //   execStub.rejects(new Error('adasdsgesdfsdfsdgsdasdfsaedfwerf'));
  //   try {
  //     await getAllProducts({}, res);
  //   } catch (err) {
  //     expect(res.status.calledWith(200)).to.be.true;
  //   }
  // });

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
  //   });

});
