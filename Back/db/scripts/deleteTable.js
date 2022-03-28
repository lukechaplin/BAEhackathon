import query from '../connection.js';

const deleteTableString = 'DROP TABLE plants';

async function deleteTable() {
  const res = await query(deleteTableString);
}

deleteTable();
