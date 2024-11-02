create database homework_1024;
\c homework_1024

create table author(
    id serial primary key,
    name varchar(50),
    birth_of_day date
);

INSERT INTO author (name, birth_of_day) 
VALUES 
('Mark Twain', '1835-11-30'),
('Jane Austen', '1775-12-16'),
('George Orwell', '1903-06-25'),
('J.K. Rowling', '1965-07-31'),
('Ernest Hemingway', '1899-07-21'),
('Fyodor Dostoevsky', '1821-11-11'),
('Gabriel Garcia Marquez', '1927-03-06'),
('Leo Tolstoy', '1828-09-09'),
('Charles Dickens', '1812-02-07'),
('Virginia Woolf', '1882-01-25');



create table books(
    id serial primary key,
    book_name varchar(50),
    price int,
    page int,
    author_id int,
    foreign key(author_id) references author(id) on delete cascade
);


INSERT INTO books (book_name, price, page, author_id)
VALUES 
('Sawyer', 100, 274, 1),
('The Adventures of Tom Sawyer', 10000, 274, 1),
('Pride and Prejudice', 12000, 432, 2),
('1984', 15000, 328, 3),
('Harry Potter and the Philosophers Stone', 18000, 223, 4),
('The Old Man and the Sea', 13000, 127, 5),
('Crime and Punishment', 14000, 671, 6),
('One Hundred Years of Solitude', 17000, 417, 7),
('War and Peace', 20000, 1225, 8),
('Great Expectations', 16000, 505, 9),
('To the Lighthouse', 11000, 209, 10);


create table book_sale(
    id serial primary key,
    book_id int,
    date_of_sale date,
    sale_of_count int,
    foreign key(book_id) references books(id) on delete cascade
);


INSERT INTO book_sale (book_id, date_of_sale, sale_of_count)
VALUES 
(1, '2024-10-01', 5),
(2, '2024-10-02', 3),
(3, '2024-10-03', 7),
(4, '2024-10-04', 10),
(5, '2024-10-05', 4),
(6, '2024-10-06', 6),
(7, '2024-10-07', 8),
(8, '2024-10-08', 2),
(9, '2024-10-09', 5),
(10, '2024-10-10', 9);


create table customer(
    id serial primary key,
    name varchar(50),
    phone varchar(50)
);

INSERT INTO customer (name, phone)
VALUES 
('John Doe', '123456789'),
('Jane Smith', '987654321'),
('Michael Brown', '111222333'),
('Emily Davis', '444555666'),
('Daniel Johnson', '777888999'),
('Sarah Wilson', '123123123'),
('David Clark', '456456456'),
('Laura Martinez', '789789789'),
('Robert Lee', '321654987'),
('Sophia Taylor', '654321987');




create table books_of_comments(
    id serial primary key,
    book_id int,
    customer_id int,
    comment text,
    marks int,
    foreign key(book_id) references books(id) on delete cascade,
    foreign key(customer_id) references customer(id) on delete cascade
);


INSERT INTO books_of_comments (book_id, customer_id, comment, marks)
VALUES 
(1, 1, 'Great book! A true classic.', 5),
(2, 2, 'Engaging and well-written.', 4),
(3, 3, 'Thought-provoking and intense.', 5),
(4, 4, 'Magical and captivating.', 5),
(5, 5, 'A short but powerful story.', 4),
(6, 6, 'A bit long, but worth it.', 5),
(7, 7, 'Beautifully written.', 5),
(8, 8, 'A masterpiece of literature.', 5),
(9, 9, 'A bit hard to follow at times.', 3),
(10, 10, 'Interesting, but not my style.', 3);




select name, sale_of_count as count, price,(sale_of_count * price) as total_amount
from author
inner join books on books.author_id = author.id
inner join book_sale on book_sale.book_id = books.id
where author.id = books.author_id and books.id = book_sale.book_id;

select book_name, marks
from books
inner join books_of_comments on books.id = books_of_comments.book_id
where marks >= (
    select avg(marks) as midle from books_of_comments
);

select author.name, max(price) as price_max, min(price) as price_min
from author
inner join books on books.author_id = author.id
group by author.name
having max(price) = (select max(price) from books) 
or min(price) = (select min(price) from books);
