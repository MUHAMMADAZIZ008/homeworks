create database books_db;

create table users (
    id serial primary key,
    username varchar(50) unique,
    password varchar(50),
    created_at date default CURRENT_DATE
    email varchar(50) unique,
);

insert into users(username, password, email) values
('coder', '1234qwer', 'example@gmail.com');

create table books(
    id serial primary key,
    title varchar(50),
    author varchar(50),
    publication_date date,
    gener varchar(50),
    user_id int references users(id) on delete cascade
);

create table comments(
    id serial primary key,
    comment_text text,
    created_at date default CURRENT_DATE,
    books_id int references books(id) on delete cascade,
    user_id int references users(id) on delete cascade
);