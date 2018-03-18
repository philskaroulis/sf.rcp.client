
export default {
  migrate
}

function migrate(db) {

  if (!db) {
    console.error("Failed to load sql.js")
    return
  }

  let sqlStr = '';

  // console.log("Load account data")
  sqlStr = "CREATE TABLE account (id TEXT PRIMARY KEY, title TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'active');"
  sqlStr += "INSERT INTO account (id, title) VALUES ('72a30b01-c2d0-4f10-9caf-1ae433044ac4', 'Skaroulis Company');"
  db.run(sqlStr)

  // console.log("Load person data")
  sqlStr = "CREATE TABLE person (id TEXT PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, status TEXT NOT NULL DEFAULT 'active', created_on TEXT NOT NULL DEFAULT (datetime('now')) );"
  sqlStr += "INSERT INTO person (id, first_name, last_name, email) VALUES ('40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Phil', 'Skaroulis', 'name1@company.com');"
  db.run(sqlStr)

  // console.log("Load ingredient data")
  sqlStr = "CREATE TABLE ingredient (id TEXT PRIMARY KEY, title TEXT NOT NULL, unit_of_measure TEXT NOT NULL, created_on TEXT NOT NULL DEFAULT (datetime('now')) );"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('1e8fab98-082e-4932-97d9-9cc7a31442b0', 'Heart Angelica', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('f144f50f-bb84-4e2c-b227-d74724856bdb', 'Fade Grains', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('b50bcf47-bd99-49a2-96e9-9fb0260b507e', 'Cave Creeper', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('ade3d6ec-0e25-4807-bc2b-7b329baf589a', 'Wolf Grass', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('21888729-f3fc-4196-898b-5139663aaafb', 'Bitter Saffron', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('7bcfb537-57d5-4ebf-8c5f-a352bd4df403', 'Ice Moss', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('24104c34-14ff-44ed-a66c-f596fd95e7dd', 'Dream Sorrel', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('53f5687d-abad-4669-94a5-57c9e1b9d456', 'Emerald Chervil', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('378908b4-2dec-44aa-8d63-9e4796ab012d', 'Knot Fenugreek', 'oz');"
  sqlStr += "INSERT INTO ingredient (id, title, unit_of_measure) VALUES ('a7ac75fe-3f12-4296-bab0-e156fd1fabab', 'Fade Herb', 'oz');"
  // db.run(sqlStr)

  // console.log("Load recipe data")
  sqlStr = "CREATE TABLE recipe (id TEXT PRIMARY KEY, code TEXT, person_id TEXT, title TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'draft', created_on TEXT NOT NULL DEFAULT (datetime('now')), FOREIGN KEY(person_id) REFERENCES person(id));"
  sqlStr += "INSERT INTO recipe (id, code, person_id, title) VALUES ('3b4a5b48-f2b7-4348-9986-db21c3042329', '111-111-1111', '40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Sweet Phantom');"
  sqlStr += "INSERT INTO recipe (id, code, person_id, title) VALUES ('60c60cb3-c8e3-4ef5-abaa-850426baea26', '222-222-2222', '40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Flying Twilight');"
  sqlStr += "INSERT INTO recipe (id, code, person_id, title) VALUES ('10e51a4a-a611-4229-9a45-0e4ac781d1b5', '333-333-3333', '40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Electric Tremor');"
  sqlStr += "INSERT INTO recipe (id, code, person_id, title) VALUES ('3e9c7a85-ad75-45e5-9608-355ab64025d9', '444-444-4444', '40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Nutmeg Five');"
  db.run(sqlStr)

  // console.log("Load recipe_ingredient data")
  sqlStr = "CREATE TABLE recipe_ingredient (id TEXT PRIMARY KEY, recipe_id TEXT, ingredient_id TEXT, quantity INTEGER, unit_of_measure TEXT, created_on TEXT NOT NULL DEFAULT (datetime('now')), FOREIGN KEY(recipe_id) REFERENCES recipe(id), FOREIGN KEY(ingredient_id) REFERENCES ingredient(id));"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('067fe224-04a7-42aa-84a2-fb05e2f5871f', '3b4a5b48-f2b7-4348-9986-db21c3042329', '1e8fab98-082e-4932-97d9-9cc7a31442b0', 6, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('bb2df167-04d5-4085-907c-66388319a2f6', '3b4a5b48-f2b7-4348-9986-db21c3042329', 'f144f50f-bb84-4e2c-b227-d74724856bdb', 2, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('87a92d0e-938c-4472-a7e7-d2feb371ec58', '3b4a5b48-f2b7-4348-9986-db21c3042329', '24104c34-14ff-44ed-a66c-f596fd95e7dd', 5, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('25ae5c6c-3782-4e31-8eac-23cda2755ae1', '60c60cb3-c8e3-4ef5-abaa-850426baea26', 'b50bcf47-bd99-49a2-96e9-9fb0260b507e', 12, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('ee00a64f-c4b4-4fb9-a390-8e65c2941687', '60c60cb3-c8e3-4ef5-abaa-850426baea26', '53f5687d-abad-4669-94a5-57c9e1b9d456', 8, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('d1e2f697-79d8-4cd0-8905-1ebfc4c4132c', '60c60cb3-c8e3-4ef5-abaa-850426baea26', 'ade3d6ec-0e25-4807-bc2b-7b329baf589a', 8, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('4940a4dc-ef07-4a80-a435-5063d0be1fcc', '10e51a4a-a611-4229-9a45-0e4ac781d1b5', '21888729-f3fc-4196-898b-5139663aaafb', 3, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('ec403027-fef6-4687-b34c-e1dfbf616997', '10e51a4a-a611-4229-9a45-0e4ac781d1b5', '7bcfb537-57d5-4ebf-8c5f-a352bd4df403', 7, 'oz');"
  sqlStr += "INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure) VALUES ('e75c53e0-03b6-485a-8b6b-707331142c35', '10e51a4a-a611-4229-9a45-0e4ac781d1b5', '378908b4-2dec-44aa-8d63-9e4796ab012d', 2, 'oz');"
  db.run(sqlStr)

}
