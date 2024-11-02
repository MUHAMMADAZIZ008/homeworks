import pg from 'pg';
const { Client } = pg;

const client = new Client({
    user: 'postgres',
    password: 'Mm08gulomov',
    port: 5432,
    database: 'books_db'
});
await client.connect()

export const allDataDb = async () => {
    try {
        let data = await client.query('SELECT * FROM users');
        // console.log(data.rows);
        return data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
export const createUser = async (newUser) => {
    try {
        let text = `insert into users(username, password, email) values($1, $2, $3)`
        let values = []
        values.push(newUser["username"], newUser["password"], newUser["email"])

        await client.query(text, values);
        // console.log(data.rows);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const allDataDbByBooks = async () => {
    try {
        let data = await client.query('SELECT * FROM books');
        return data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const creatBook = async (newBook) => {
    try {
        let text = `insert into books(title, author, publication_date, gener, user_id) values($1, $2, $3, $4, $5)`
        let values = []
        values.push(newBook.title, newBook.author, newBook.publication_date, newBook.gener, newBook.user_id)

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const updateBook = async (id, book) => {
    try {
        let text = `
        update books
        set title = $1, author = $2, publication_date = $3, gener = $4
        where id = $5
        `
        let values = []
        values.push(book.title, book.author, book.publication_date, book.gener, id)

        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        let text = `delete from books where id = $1`
        let values = []
        values.push(+id)
        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const createCommmentDb = async (id, newComments) => {
    try {
        let text = `insert into comments(comment_text, books_id, user_id) values($1, $2, $3)`
        let values = []
        values.push(newComments.comment_text, id, newComments.user_id)
        await client.query(text, values);
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const allDataByComments = async () => {
    try {
        let data = await client.query('SELECT * FROM comments');
        return data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
console.log(allDataByComments());