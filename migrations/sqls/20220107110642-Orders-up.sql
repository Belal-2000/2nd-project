CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id int  REFERENCES users(id),
    status VARCHAR(15) NOT NULL
);
