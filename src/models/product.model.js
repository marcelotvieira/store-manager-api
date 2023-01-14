const conn = require('./connection');

const getAll = async () => {
  try {
    const [data] = await conn.execute(
      'SELECT * FROM products ORDER BY id asc;',
);
    return data;
  } catch (err) {
    return err;
  }
};

const findById = async (id) => {
  try {
    const [data] = await conn.execute(
      'SELECT * FROM products WHERE id=?',
      [id],
    );
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = { getAll, findById };