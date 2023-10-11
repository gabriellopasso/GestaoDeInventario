import sqlite3 from 'sqlite3'
sqlite3.verbose()
let nItens = new sqlite3.Database('./db/itens.sql', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.')
})
    
//nItens.run('CREATE TABLE itens (produto TEXT, quantidade INTEGER)')     
nItens.run(`INSERT INTO itens (produto, quantidade) VALUES ('pao', 20)`)

let sql = `SELECT DISTINCT Name name FROM itens
           ORDER BY name`
nItens.all(sql, [], (err, rows) => {
    if (err) {
        throw err
    }
    rows.forEach((row) => {
        console.log(row)
    })
})

nItens.close((err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Close the database connection.')
})
/*nItens.run('CREATE TABLE itens (produto TEXT, quantidade INTEGER)')   
nItens.run(`INSERT INTO itens (produto, quantidade) VALUES ('pao', 20)`)
nItens.all(`SELECT * FROM itens`, (err, rows) => {
    if (err) {
    console.error(err)
    return
    }
    console.log(rows)
})*/