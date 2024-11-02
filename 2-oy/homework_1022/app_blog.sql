CREATE DATABASE blog_app;
\c blog_app

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(50) UNIQUE,
    firstname varchar(50),
    lastname varchar(50),
    age int
);

INSERT INTO users (username, firstname, lastname, age) VALUES
('user1', 'John', 'Doe', 25),
('user2', 'Jane', 'Smith', 30),
('user3', 'Alice', 'Johnson', 28),
('user4', 'Bob', 'Williams', 35),
('user5', 'Charlie', 'Brown', 22),
('user6', 'David', 'Miller', 27),
('user7', 'Emily', 'Davis', 26),
('user8', 'Frank', 'Wilson', 31),
('user9', 'Grace', 'Moore', 24),
('user10', 'Henry', 'Taylor', 29),
('user11', 'Ivy', 'Anderson', 33),
('user12', 'Jack', 'Thomas', 21),
('user13', 'Kelly', 'Jackson', 32),
('user14', 'Leo', 'White', 36),
('user15', 'Mia', 'Harris', 23),
('user16', 'Nathan', 'Martin', 34),
('user17', 'Olivia', 'Thompson', 28),
('user18', 'Paul', 'Garcia', 27),
('user19', 'Quincy', 'Martinez', 25),
('user20', 'Ruby', 'Clark', 29);


CREATE TABLE blogs(
    id SERIAL PRIMARY KEY,
    blog TEXT,
    user_id int,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO blogs (blog, user_id) VALUES
('This is the first post by user 1', 1),
('This is the first post by user 2', 2),
('This is the first post by user 3', 3),
('This is the second post by user 1', 1),
('This is the first post by user 4', 4);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id int,
    blog_id int,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(blog_id) REFERENCES blogs(id)
);

INSERT INTO comments(comment, user_id, blog_id) VALUES
('wrote by user 1', 1, 3),
('wrote by user 3', 3, 1),
('wrote by user 4', 4, 2),
('wrote by user 5', 5, 2);