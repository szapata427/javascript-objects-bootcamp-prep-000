var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, Maluma, mala) {
  
 return Object.assign({}, playlist, {[Maluma]: mala})
}

function removeFromPlaylist(playlist, Maluma) {
  delete.playlist.Maluma;
  
  return playlist
}


var playlist = {};
var playlist = { artistName: 'songTitle' };


function updatePlaylist (playlist, Adele, hello) {
  return Object.assign({}, playlist, { [Adele]: hello})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Alison'];
}