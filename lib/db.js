// lib/db.js
import mysql from 'mysql2/promise';

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'absen'
};

const pool = mysql.createPool(dbConfig);

export async function getUserByUsername(username) {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE username = ?', [username]);
        connection.release();
        return rows[0]; // Assuming username is unique, so we return the first row
    } catch (error) {
        console.error('Error fetching user by username:', error);
        throw error;
    }
}
