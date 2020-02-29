const request = require('request')

require('dotenv').config()

const baseUrl = 'https://api.soundcloud.com/users/'

const makeUrl = (userId, param, cursor) => {
    return baseUrl + userId + '/' + param + '?linked_partitioning=1&client_id=' + process.env.CLIENT_ID + 
    (cursor ? '&cursor=' + cursor : '')
}

const searchUser = (q, callback) => {
    const url = baseUrl + '?q=' + q + '&client_id=' + process.env.CLIENT_ID
    request({url, json: true}, (err, data) => {
        callback(data.body)
    })
}

const getPlaylist = (playlistOptions, callback) => {
   
    request({url: makeUrl(playlistOptions.userId, playlistOptions.mine, playlistOptions.cursor), json: true}, 
    (err, res) => {
        var artistList = playlistOptions.mine == "favorites" ? 
            res.body.collection.map(song => song.user.id) :
            res.body.collection.map(artist => artist.id)
        var cursor = res.body.next_href ? getCursorFromHref(res.body.next_href) : null
        playlistOptions.cursor = cursor

        getTheir(artistList, playlistOptions, callback)
    })
}

const getTheir = (artistList, playlistOptions, callback) => {
    var trackList = []
    var theirHandle = playlistOptions.their === 'favorites' ? 'favorites' : 'tracks'

    for (var artistId of artistList){
        var url = makeUrl(artistId, theirHandle) + '&page_size=' + (playlistOptions.their === 'toptrack' ? '200' : '1')
        request({url, json: true}, (err, res) => {
            if (res.body.collection){
                if (playlistOptions.their === 'toptrack'){
                    trackList.push(getTopTrack(res.body.collection))
                } else {
                    trackList.push(res.body.collection[0])
                }
            } else {
                trackList.push(null)
            }
            
            if (trackList.length === artistList.length){
                callback(JSON.stringify({
                    trackList: trackList, 
                    nextPage: (playlistOptions.cursor ? playlistOptions : null)
                }))
            }
        })
    }
}

const getCursorFromHref = nextHref => {
    var lastPart = nextHref.split('?')[1]
    var argus = lastPart.split('&')
    for (var argument of argus){
        if (argument.split('=')[0] === 'cursor'){
            return argument.split('=')[1]
        }
    }
}

const getTopTrack = trackList => {
    var topTrack = null
    var mostLikes = 0
    for (var track of trackList){
        if (track.favoritings_count > mostLikes){
            topTrack = track
            mostLikes = track.favoritings_count
        }
    }
    return topTrack
}

module.exports = { searchUser, getPlaylist, }