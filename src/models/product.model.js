const conn = require('./connection');

const getAll = async () => {
    const [data] = await conn.execute(
      'SELECT * FROM StoreManager.products ORDER BY id asc;',
);
    return data;
};

const findById = async (id) => {
    const [data] = await conn.execute(
      'SELECT * FROM StoreManager.products WHERE id=?',
      [id],
    );
    return data;
};

const insert = async (product) => {
    const [newProduct] = await conn.execute(
      'INSERT INTO StoreManager.products(name) VALUES (?)',
        [product.name],
    );
    const response = {
      id: newProduct.insertId,
      ...product,
    };
    return response;
};

const update = async (id, payload) => {
    const [updatedProduct] = await conn.execute(
      `UPDATE StoreManager.products
        SET name = (?)
        WHERE id = (?);`,
      [payload.name, id],
    );
    return updatedProduct;
};

module.exports = { getAll, findById, insert, update };
