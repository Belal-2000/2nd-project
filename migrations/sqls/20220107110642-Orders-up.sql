CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    quantity INTEGER,
    status VARCHAR(15) NOT NULL,
    user_id int  REFERENCES users(id),
    product_id int  REFERENCES product(id)
);