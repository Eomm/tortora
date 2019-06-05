'use strict'

const WebTorrent = require('webtorrent')

const client = new WebTorrent()

const magnetURI = 'magnet:....'

client.add(magnetURI, { path: './' }, function (torrent) {
  torrent.on('done', function () {
    console.log('torrent download finished')
  })

  torrent.files.forEach(function (file) {
    console.log('(ff.)', { file })
  })

  torrent.on('download', function (bytes) {
    console.log('total downloaded: ' + torrent.downloaded)
    console.log('download speed: ' + torrent.downloadSpeed)
    console.log('progress: ' + torrent.progress)
    // f.write(bytes)
  })

  torrent.on('ready', function () {
    console.log('torrent ready')
  })
  torrent.on('warning', function (warn) {
    console.log('torrent warning', warn)
  })
  torrent.on('error', function (err) {
    console.log('torrent error', err)
  })
})
