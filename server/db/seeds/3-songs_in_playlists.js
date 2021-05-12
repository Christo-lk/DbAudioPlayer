exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs_in_playlists').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs_in_playlists').insert([
        { id: 1, user_id: null, playlist_id: null, song_id: null }
      ])
    })
}
