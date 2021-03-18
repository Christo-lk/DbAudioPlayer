exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, title: 'We Are The People', artist: 'Empire Of The Sun', audioSrc: '/tracks/EmpireOfTheSun.mp3', image: './coverArt/empireOfTheSun.png' },
        { id: 2, title: 'Temper Temper', artist: 'Lime Cordiale', audioSrc: '/tracks/limeCordiale.mp3', image: './coverArt/limeCordiale.jpg' },
        { id: 3, title: 'When Am I Gonna Lose You', artist: 'Local Natives', audioSrc: '/tracks/localNatives.mp3', image: './coverArt/localNatives.jpg' }
      ])
    })
}
