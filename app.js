const express = require('express')
const path = require('path')
const utils = require('./utils')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.get('/search', (req, res) => {
    const q = req.query.q
    utils.searchUser(q, userList => res.send(userList))
})

app.get('/playlist', (req, res) => {
    var playlistOptions = req.query
    utils.getPlaylist(playlistOptions, playlist => res.send(playlist))
})

app.listen(process.env.PORT || 3001, () => console.log('listening on ' + process.env.PORT || '3001'))