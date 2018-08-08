


var playlist = {};
var playlist = { artistName: 'songTitle' };


function updatePlaylist (playlist, Adele, hello) {
  return Object.assign({}, playlist, { [Adele]: hello})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Alison'];
}