const conn = require('./connection');

const getAll = async () => {
  try {
    const [data] = await conn.execute(
      'SELECT * FROM StoreManager.products ORDER BY id asc;',
);
    return data;
  } catch (err) {
    return err;
  }
};

const findById = async (id) => {
  try {
    const [data] = await conn.execute(
      'SELECT * FROM StoreManager.products WHERE id=?',
      [id],
    );
    return data;
  } catch (err) {
    return err;
  }
};

const insert = async (product) => {
  try {
    const [newProduct] = await conn.execute(
      'INSERT INTO StoreManager.products(name) VALUES (?)',
        [product.name],
    );
    const response = {
      id: newProduct.insertId,
      ...product,
    };
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = { getAll, findById, insert };
