const conn = require('./connection');

const insert = async (sales) => {
  try {
    const [dateRegister] = await conn.execute(
      'INSERT INTO StoreManager.sales(date) VALUES (?)',
      [(new Date().toISOString()).split('T')[0]],
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

module.exports = {
  insert,
};
