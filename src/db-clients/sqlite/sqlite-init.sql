/*
 * SQLite CREATE TABLE examples.
 * Created by Alvin Alexander, http://alvinalexander.com
 * Released under the Creative Commons License.
 */


--
-- accounts
--
DROP TABLE IF EXISTS account;
CREATE TABLE account (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active'
);
-- INSERT INTO account VALUES (id, title);
INSERT INTO account (id, title)
VALUES ('72a30b01-c2d0-4f10-9caf-1ae433044ac4', 'Skaroulis Company');

--
-- person
--
DROP TABLE IF EXISTS person;
CREATE TABLE person (
  id TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  created_on TEXT NOT NULL DEFAULT (datetime('now'))
);
-- INSERT INTO person VALUES (id, first_name, last_name, email);
INSERT INTO person (id, first_name, last_name, email)
VALUES ('40508ede-ad1b-4559-9b2b-444b3f875bbe', 'Phil', 'Skaroulis', 'name1@company.com');

--
-- ingredients
--
DROP TABLE IF EXISTS ingredient;
CREATE TABLE ingredient (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  unit_of_measure TEXT NOT NULL,
  created_on TEXT NOT NULL DEFAULT (datetime('now'))
);
-- INSERT INTO ingredient VALUES (id, title, unit_of_measure);
INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('1e8fab98-082e-4932-97d9-9cc7a31442b0', 'Heart Angelica', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('f144f50f-bb84-4e2c-b227-d74724856bdb', 'Fade Grains', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('b50bcf47-bd99-49a2-96e9-9fb0260b507e', 'Cave Creeper', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('ade3d6ec-0e25-4807-bc2b-7b329baf589a', 'Wolf Grass', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('21888729-f3fc-4196-898b-5139663aaafb', 'Bitter Saffron', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('7bcfb537-57d5-4ebf-8c5f-a352bd4df403', 'Ice Moss', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('24104c34-14ff-44ed-a66c-f596fd95e7dd', 'Dream Sorrel', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('53f5687d-abad-4669-94a5-57c9e1b9d456', 'Emerald Chervil', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('378908b4-2dec-44aa-8d63-9e4796ab012d', 'Knot Fenugreek', 'oz');

INSERT INTO ingredient (id, title, unit_of_measure)
VALUES ('a7ac75fe-3f12-4296-bab0-e156fd1fabab', 'Fade Herb', 'oz');

--
-- recipes
--
DROP TABLE IF EXISTS recipe;
CREATE TABLE recipe (
  id TEXT PRIMARY KEY,
  code TEXT,
  person_id TEXT,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  created_on TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY(person_id) REFERENCES person(id)
);
-- INSERT INTO recipe VALUES (id, code, person_id, title);
INSERT INTO recipe (id, code, person_id, title)
VALUES (
  '3b4a5b48-f2b7-4348-9986-db21c3042329',
  '111-111-1111',
  '40508ede-ad1b-4559-9b2b-444b3f875bbe',
  'Sweet Phantom');
INSERT INTO recipe (id, code, person_id, title)
VALUES (
  '60c60cb3-c8e3-4ef5-abaa-850426baea26',
  '222-222-2222',
  '40508ede-ad1b-4559-9b2b-444b3f875bbe',
  'Flying Twilight');
INSERT INTO recipe (id, code, person_id, title)
VALUES (
  '10e51a4a-a611-4229-9a45-0e4ac781d1b5',
  '333-333-3333',
  '40508ede-ad1b-4559-9b2b-444b3f875bbe',
  'Electric Tremor');
INSERT INTO recipe (id, code, person_id, title)
VALUES (
  '3e9c7a85-ad75-45e5-9608-355ab64025d9',
  '444-444-4444',
  '40508ede-ad1b-4559-9b2b-444b3f875bbe',
  'Nutmeg Five');

--
-- recipe items
--
DROP TABLE IF EXISTS recipe_ingredient;
CREATE TABLE recipe_ingredient (
  id TEXT PRIMARY KEY,
  recipe_id TEXT,
  ingredient_id TEXT,
  quantity INTEGER,
  unit_of_measure TEXT,
  created_on TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY(recipe_id) REFERENCES recipe(id),
  FOREIGN KEY(ingredient_id) REFERENCES ingredient(id)
);
-- INSERT INTO recipe_ingredient VALUES (id, recipe_id, ingredient_id, quantity, unit_of_measure);
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  '067fe224-04a7-42aa-84a2-fb05e2f5871f',
  '3b4a5b48-f2b7-4348-9986-db21c3042329',
  '1e8fab98-082e-4932-97d9-9cc7a31442b0',
  6,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  'bb2df167-04d5-4085-907c-66388319a2f6',
  '3b4a5b48-f2b7-4348-9986-db21c3042329',
  'f144f50f-bb84-4e2c-b227-d74724856bdb',
  2,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  '87a92d0e-938c-4472-a7e7-d2feb371ec58',
  '3b4a5b48-f2b7-4348-9986-db21c3042329',
  '24104c34-14ff-44ed-a66c-f596fd95e7dd',
  5,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  '25ae5c6c-3782-4e31-8eac-23cda2755ae1',
  '60c60cb3-c8e3-4ef5-abaa-850426baea26',
  'b50bcf47-bd99-49a2-96e9-9fb0260b507e',
  12,
  'oz');

INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  'ee00a64f-c4b4-4fb9-a390-8e65c2941687',
  '60c60cb3-c8e3-4ef5-abaa-850426baea26',
  '53f5687d-abad-4669-94a5-57c9e1b9d456',
  8,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  'd1e2f697-79d8-4cd0-8905-1ebfc4c4132c',
  '60c60cb3-c8e3-4ef5-abaa-850426baea26',
  'ade3d6ec-0e25-4807-bc2b-7b329baf589a',
  8,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  '4940a4dc-ef07-4a80-a435-5063d0be1fcc',
  '10e51a4a-a611-4229-9a45-0e4ac781d1b5',
  '21888729-f3fc-4196-898b-5139663aaafb',
  3,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  'ec403027-fef6-4687-b34c-e1dfbf616997',
  '10e51a4a-a611-4229-9a45-0e4ac781d1b5',
  '7bcfb537-57d5-4ebf-8c5f-a352bd4df403',
  7,
  'oz');
INSERT INTO recipe_ingredient (id, recipe_id, ingredient_id, quantity, unit_of_measure)
VALUES (
  'e75c53e0-03b6-485a-8b6b-707331142c35',
  '10e51a4a-a611-4229-9a45-0e4ac781d1b5',
  '378908b4-2dec-44aa-8d63-9e4796ab012d',
  2,
  'oz');

--
-- units_of_measure
--
DROP TABLE IF EXISTS units_of_measure;
CREATE TABLE units_of_measure (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  unit_type NOT NULL,
  created_on TEXT NOT NULL DEFAULT (datetime('now'))
);
-- INSERT INTO units_of_measure VALUES (id, code, title, unit_type);
INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('cfdf5c63-3d8d-494e-a33e-f17b25f4583f', 'in', 'inch', 'length');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('7281f178-40b2-4793-8f23-f57e98456207', 'ft', 'foot', 'length');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('5ec5c0cc-c756-4cf2-b34f-e7096bc0bbb8', 'yd', 'yard', 'length');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('9924721e-cb90-4a71-95eb-b19466ebe156', 'oz', 'fluid ounce', 'volume');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('13bf9203-8cae-42a7-8de2-074c5d5d33ca', 'c', 'cup', 'volume');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('0e1700f8-0522-454c-b81f-a6f2b2e66f2e', 'pt', 'pint', 'volume');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('e8182dc8-4fbb-4b54-bee1-614a45a5e6f8', 'qt', 'quart', 'volume');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('0fda5908-2f71-45f3-8663-5bc739657305', 'gal', 'gallon', 'volume');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('11ed0029-32cd-4c27-9cdd-62885c8bddb0', 'oz', 'ounce', 'weight');

INSERT INTO units_of_measure (id, code, title, unit_type)
VALUES ('d2f68272-de80-40b6-b914-159f00583919', 'lb', 'pound', 'weight');
