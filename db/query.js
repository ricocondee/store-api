const query = {
    SELECTALL: "SELECT * FROM products",
    SELECTBYID: "SELECT * FROM products WHERE id = ?",
    SELECTBYTYPE: "SELECT p.* FROM products p INNER JOIN typeOf t ON t.id = p.type AND t.name = ?",
    SELECTCAT: "SELECT * FROM categories",
    SELECTBRANDS: "SELECT * FROM brands",
    SELECTLIKE: "SELECT * FROM products WHERE name LIKE ?",
  };
  
  module.exports = query;