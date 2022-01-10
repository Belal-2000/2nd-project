CREATE TABLE product (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(50),
    price INTEGER,
    category VARCHAR(50)
);

INSERT INTO product(name , price , category) VALUES('prod1' , 120 , 'testCat');