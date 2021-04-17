exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, title: 'We Are The People', artist: 'Empire Of The Sun', audioSrc: '/tracks/EmpireOfTheSun.mp3', image: './coverArt/empireOfTheSun.png', isLiked: false },
        { id: 2, title: 'Temper Temper', artist: 'Lime Cordiale', audioSrc: '/tracks/limeCordiale.mp3', image: './coverArt/limeCordiale.jpg', isLiked: false },
        { id: 3, title: 'Alone', artist: 'Christo', audioSrc: '/tracks/christo.mp3', image: './coverArt/christo.jpg', isLiked: false },
        { id: 4, title: 'Night Shift', artist: 'Balu Brigada', audioSrc: '/tracks/baluBrigada.mp3', image: './coverArt/baluBrigada.jpg', isLiked: false },
        { id: 5, title: 'Hot Girl Bummer', artist: 'Blackbear', audioSrc: '/tracks/blackbear.mp3', image: './coverArt/blackbear.jpg', isLiked: false },
        { id: 6, title: 'Cake By The Ocean', artist: 'DNCE', audioSrc: '/tracks/dnce.mp3', image: './coverArt/dnce.jpg', isLiked: false },
        { id: 7, title: 'Dont Start Now', artist: 'Dua Lipa', audioSrc: '/tracks/duaLipa.mp3', image: './coverArt/duaLipa.png', isLiked: false },
        { id: 8, title: 'You Deserve Better', artist: 'James Arthur', audioSrc: '/tracks/jamesArthur.mp3', image: './coverArt/jamesArthur.png', isLiked: false },
        { id: 9, title: 'Lies', artist: 'Johnny Yukon', audioSrc: '/tracks/johnnyYukon.mp3', image: './coverArt/johnnyYukon.jpg', isLiked: false },
        { id: 10, title: '365', artist: 'Zedd, Katy Perry', audioSrc: '/tracks/zeddKatyPerry.mp3', image: './coverArt/zeddKatyPerry.jpg', isLiked: false }
      ])
    })
}
