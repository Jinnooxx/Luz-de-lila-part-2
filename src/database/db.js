const sqlite3 = require('sqlite3').verbose();
const path = require('path'); // Agregamos esto para rutas seguras

// __dirname se asegura de que siempre busque el archivo en esta misma carpeta
const dbPath = path.join(__dirname, 'luzDeLila.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.log('Error al conectar:', err.message);
    } else {
        console.log('✅ Conectado a SQLite - Luz de Lila');
    }
});

db.serialize(() => {
    // Acá agregamos TODAS las columnas que necesitan tus velas
    db.run(`
        CREATE TABLE IF NOT EXISTS productos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            categoria TEXT,
            subcategoria TEXT,
            precio REAL NOT NULL,
            destacado INTEGER,
            descripcion TEXT,
            imagen TEXT
        )
    `);
});

module.exports = db;