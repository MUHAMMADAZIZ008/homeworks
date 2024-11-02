CREATE TABLE Publishers (
    publisher_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(100),
    phone VARCHAR(100),
    email VARCHAR(50)
);

INSERT INTO Publishers (name, address, phone, email)
VALUES
('Penguin Random House', '123 Publisher St.', '555-1234', 'contact@penguin.com'),
('HarperCollins', '456 Publisher Ave.', '555-2345', 'info@harpercollins.com'),
('Simon & Schuster', '789 Publisher Blvd.', '555-3456', 'support@simon.com'),
('Hachette Book Group', '101 Publisher Ln.', '555-4567', 'hachette@books.com'),
('Macmillan Publishers', '202 Publisher Pl.', '555-5678', 'info@macmillan.com');




CREATE TABLE Categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(50)
);

INSERT INTO Categories (category_name)
VALUES
('Fiction'),
('Non-Fiction'),
('Science Fiction'),
('Fantasy'),
('Mystery');



CREATE TABLE Books (
    book_id SERIAL PRIMARY KEY,
    publisher_id INT,
    publication_year DATE,
    isbn INT,
    price INT,
    category_id INT,
    stock_quantity INT,
    FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

INSERT INTO Books (publisher_id, publication_year, isbn, price, category_id, stock_quantity)
VALUES
(1, '2020-06-15', 9781234567890, 15, 1, 50),
(2, '2018-09-22', 9782345678901, 20, 2, 30),
(3, '2019-03-11', 9783456789012, 25, 3, 40),
(4, '2021-01-25', 9784567890123, 18, 4, 60),
(5, '2017-12-05', 9785678901234, 10, 5, 20),
(1, '2022-02-10', 9786789012345, 22, 1, 35),
(2, '2023-05-19', 9787890123456, 28, 3, 45),
(3, '2016-08-13', 9788901234567, 19, 2, 55),
(4, '2015-11-27', 9789012345678, 12, 4, 25),
(5, '2014-04-18', 9780123456789, 30, 5, 65);



CREATE TABLE Authors (
    author_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    bio TEXT
);

INSERT INTO Authors (first_name, last_name, bio)
VALUES
('John', 'Doe', 'An American author known for his thrillers.'),
('Jane', 'Smith', 'A British author famous for her historical novels.'),
('Emily', 'Johnson', 'Writes primarily in the science fiction genre.'),
('Michael', 'Brown', 'Author of several best-selling mystery novels.'),
('Sarah', 'Davis', 'Award-winning fantasy writer.'),
('James', 'Wilson', 'Focuses on non-fiction works in science and technology.'),
('Mary', 'Garcia', 'Renowned author of childrens books.');





CREATE TABLE BookAuthors (
    book_id INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES Books(book_id),
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);


INSERT INTO BookAuthors (book_id, author_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 3),
(8, 2),
(9, 4),
(10, 5);




CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(100),
    address VARCHAR(100)
);


INSERT INTO Customers (first_name, last_name, email, phone, address)
VALUES
('Alice', 'Williams', 'alice@example.com', '555-1111', '10 Elm St.'),
('Bob', 'Miller', 'bob@example.com', '555-2222', '20 Oak St.'),
('Charlie', 'Wilson', 'charlie@example.com', '555-3333', '30 Pine St.'),
('Diana', 'Moore', 'diana@example.com', '555-4444', '40 Maple St.'),
('Eve', 'Taylor', 'eve@example.com', '555-5555', '50 Cedar St.');



CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    status VARCHAR(100),
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
INSERT INTO Orders (customer_id, order_date, status)
VALUES
(1, '2023-10-15', 'Shipped'),
(2, '2023-09-22', 'Pending'),
(3, '2023-08-30', 'Delivered'),
(4, '2023-07-05', 'Shipped'),
(5, '2023-10-01', 'Delivered');



SELECT first_name
from Customers
inner join Orders on Orders.customer_id = Customers.customer_id;


SELECT count(*) as firstname
from Authors
group by first_name;

