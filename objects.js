var playlist = { Maluma: "Corazon" };

function updatePlaylist(playlist, artistName, songTitle) {
  
playlist[artistName] = songTitle
 
 return playlist
}

updatePlaylist(playlist, 'Reykon', 'Mala')


function removeFromPlaylist(playlist, artistName) {
  delete playlist.Maluma;
  
   return playlist
  }
  
 

