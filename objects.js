var playlist = { Maluma: "Corazon" };

function updatePlaylist(playlist, artistName, songTitle) {
  
playlist[artistName] = songTitle
 
 return playlist
}

updatePlaylist(playlist, 'Reykon', 'Mala')

return playlist

function removeFromPlaylist(playlist, Reykon) {
  delete playlist.Reykon;
  
}