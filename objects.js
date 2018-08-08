var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, Maluma, mala) {
  
 return Object.assign({}, playlist, {[Maluma]: mala})
}

function removeFromPlaylist(playlist, Maluma) {
  delete.playlist.Maluma;
  
  return playlist
}