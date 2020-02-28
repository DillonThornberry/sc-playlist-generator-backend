const express = require('express')
const utils = require('./utils')

const app = express()

app.get('/search', (req, res) => {
    const q = req.query.q
    utils.searchUser(q, userList => res.send(userList))
})

app.get('/playlist', (req, res) => {
    var playlistOptions = req.query
    utils.getPlaylist(playlistOptions, playlist => res.send(playlist))
})

app.listen(3001, () => console.log('listening on 3001'))