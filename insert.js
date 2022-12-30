const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("db/fakeStore.db");

const colors = [
  "azure",
  "beige",
  "bistre",
  "black",
  "blue",
  "blue-green",
  "blue-violet",
  "bondi-blue",
  "brass",
  "bronze",
  "brown",
  "buff",
  "burgundy",
  "camouflage-green",
  "cardinal",
  "carmine",
  "carrot-orange",
  "celadon",
  "cerise",
  "cerulean",
  "champagne",
  "charcoal",
  "chartreuse",
  "cherry-blossom-pink",
  "chestnut",
  "chocolate",
  "cinnabar",
  "cinnamon",
  "cobalt",
  "copper",
  "coral",
  "corn",
  "cornflower",
  "cream",
  "crimson",
  "cyan",
  "dandelion",
  "denim",
  "ecru",
  "emerald",
  "eggplant",
  "falu-red",
  "fern-green",
  "firebrick",
  "flax",
  "forest-green",
  "french-rose",
  "fuchsia",
  "gamboge",
  "gold",
];

for (let i = 0; i < 24; i++) {
  // insert one row into the langs table
  db.run(
    `UPDATE laptops SET image = 'https://github.com/ricocondee/store-api/blob/main/public/images/laptops/asus/asus${i+1}.jpg' WHERE brand = ${7}`,
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
}
// close the database connection
db.close();
console.log(colors.length);
