const camelize = require('camelize');
const conn = require('./connection');

const insert = async (sales) => {
    const [dateRegister] = await conn.execute(
      'INSERT INTO StoreManager.sales(date) VALUES (?)',
      [new Date().toISOString().split('T')[0]],
    );
    const { insertId } = dateRegister;
    sales.forEach(async (sale) => {
      await conn.execute(
        `INSERT INTO StoreManager.sales_products
        (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`,
        [insertId, sale.productId, sale.quantity],
      );
    });
    return insertId;
};

const getAll = async () => {
    const [sales] = await conn.execute(
      `SELECT sales_products.*, sales.date
        FROM sales_products
        JOIN sales ON sales_products.sale_id = sales.id`,
    );
    return camelize(sales);
};

const findById = async (id) => {
    const [sales] = await conn.execute(
      `SELECT sales_products.product_id, sales_products.quantity, sales.date
        FROM sales_products
        JOIN sales ON sales_products.sale_id = sales.id
        WHERE sales_products.sale_id = ${id}`,
    );
    return camelize(sales);
};

const destroy = async (id) => {
  const [destroyed] = await conn.execute(
    `DELETE StoreManager.sales, StoreManager.sales_products
      FROM StoreManager.sales_products
      INNER JOIN StoreManager.sales ON StoreManager.sales_products.sale_id = StoreManager.sales.id
      WHERE StoreManager.sales_products.sale_id = (?)`,
    [Number(id)],
  );
  console.log(destroyed);
  return destroyed;
};

module.exports = {
  findById,
  insert,
  getAll,
  destroy,
};
