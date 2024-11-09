const query = {
    SELECTFILTERED: "SELECT * FROM products ORDER BY id LIMIT ? OFFSET ?",
    SELECTBYID: "SELECT * FROM products WHERE id = ?",
    SELECTBYCOLOR: "SELECT * FROM products WHERE color = ?",
    SELECTBYTYPE: "SELECT p.* FROM products p INNER JOIN typeOf t ON t.id = p.type AND t.name = ?",
    SELECTCAT: "SELECT * FROM categories",
    SELECTBRANDS: "SELECT * FROM brands",
    SELECTLIKE: "SELECT * FROM products WHERE name LIKE ? OR color LIKE ?",
  };
  
  module.exports = query;