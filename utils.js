const request = require('request')

require('dotenv').config()

const baseUrl = 'https://api.soundcloud.com/users/'

const searchUser = (q, callback) => {
    const url = baseUrl + '?q=' + q + '&client_id=' + process.env.CLIENT_ID
    request({url, json: true}, (err, data) => {
        callback(data.body)
    })
}

const getPlaylist = (playlistOptions, callback) => {
    callback(playlistOptions)
}

module.exports = { searchUser, getPlaylist, }