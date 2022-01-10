CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    password TEXT
);

INSERT INTO users(firstName , lastName , password) VALUES('user1' , 'user2' , 'password');

