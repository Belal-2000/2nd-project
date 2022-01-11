CREATE TABLE prods_in_order(
    id SERIAL PRIMARY KEY,
    product_id int  REFERENCES product(id),
    order_id int  REFERENCES orders(id),
    quantity INTEGER
);