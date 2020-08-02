CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "orders_id" int,
  "name" text,
  "address" text,
  "telephone" text,
  "cpf" text
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "orders_id" int,
  "addresses_id" int UNIQUE,
  "name" text,
  "manager" text
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "street" text,
  "number" int,
  "neighborhood" text,
  "zip_code" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "models_id" int,
  "color" text,
  "plate" text,
  "uses" int
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text,
  "model" text,
  "price" int,
  "speed" text
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "order_date" datetime,
  "take_date" datetime,
  "price" int,
  "responsible" text
);

CREATE TABLE "car_order" (
  "car_id" int,
  "order_id" int
);

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("orders_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "customers" ("orders_id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("addresses_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("models_id") REFERENCES "models" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("id");

ALTER TABLE "car_order" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");
