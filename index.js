const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json())

const port = 5000

app.get('/', (req, res) => {
    res.send('I am learing node and express js')
})

const users = [
    { id: 0, name: 'masum', email: 'masum@gmail.com', phone: '01382938293' },
    { id: 1, name: 'shawan', email: 'shawan@gmail.com', phone: '01382938293' },
    { id: 2, name: 'atik', email: 'atik@gmail.com', phone: '01382938293' },
    { id: 3, name: 'pranto', email: 'pranto@gmail.com', phone: '01382938293' },
    { id: 4, name: 'arman', email: 'arman@gmail.com', phone: '01382938293' },
    { id: 5, name: 'sifat', email: 'sifat@gmail.com', phone: '01382938293' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

//post method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser)
})

//dynamic route parameters
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () => {
    console.log('my node server start at', port)
})