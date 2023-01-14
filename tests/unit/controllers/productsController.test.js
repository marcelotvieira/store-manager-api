const { expect } = require('chai');

const { getAllProducts, getProductsById } = require('../../../src/controllers/product.controller');

console.log('wseyuifgsduiyfgsdyufsd');
describe('Testando função controller getAllProducts', () => {

  it('Testando se a função tem o retorno esperado', () => {

    expect(getAllProducts).to.be.instanceOf(Function);
  });
});