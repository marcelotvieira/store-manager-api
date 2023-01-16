const camelize = require('camelize');
const conn = require('./connection');

const insert = async (sales) => {
  try {
    const [dateRegister] = await conn.execute(
      'INSERT INTO StoreManager.sales(date) VALUES (?)',
      [new Date().toISOString().split('T')[0]],
    );
    const { insertId } = dateRegister;

    sales.forEach(async (sale) => {
      await conn.execute(
        `INSERT INTO StoreManager.sales_products
      (sale_id, product_id, quantity) VALUES (?, ?, ?)`,
        [insertId, sale.productId, sale.quantity],
      );
    });
    return insertId;
  } catch (err) {
    return err;
  }
};

const getAll = async () => {
  try {
    const [sales] = await conn.execute(
      `SELECT sales_products.*, sales.date
        FROM sales_products
        JOIN sales ON sales_products.sale_id = sales.id;`,
    );
    return camelize(sales);
  } catch (err) {
    return err;
  }
};

const findById = async (id) => {
  try {
    const [sales] = await conn.execute(
      `SELECT sales_products.product_id, sales_products.quantity, sales.date
        FROM sales_products
        JOIN sales ON sales_products.sale_id = sales.id
        WHERE sales_products.sale_id = ${id};`,
    );
    return camelize(sales);
  } catch (err) {
    return err;
  }
};

module.exports = {
  findById,
  insert,
  getAll,
};
