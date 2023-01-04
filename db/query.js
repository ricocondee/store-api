const query = {
    SELECTALL: "SELECT * FROM phones",
    SELECTCAT: "SELECT * FROM categories",
    SELECTMEN: "SELECT * FROM menClothing WHERE category = ?",
    SELECTWOMEN: "SELECT * FROM womenClothing WHERE category = ?",
    SELECTPHONES: "SELECT * FROM phones WHERE category = ?",
    SELECTLAPTOPS: "SELECT * FROM laptops WHERE category = ?",
    SELECTHEADP: "SELECT * FROM headPhones WHERE category = ?",
    SELECTWATCHES: "SELECT * FROM watches WHERE category = ?",
    SELECTSMARTW: "SELECT * FROM smartWatches WHERE category = ?",
  };
  
  module.exports = query;