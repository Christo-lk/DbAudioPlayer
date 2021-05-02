exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        { id: 1, title: 'We Are The People', artist: 'Empire Of The Sun', audioSrc: '/tracks/EmpireOfTheSun.mp3', image: './coverArt/empireOfTheSun.png', isLiked: false },
        { id: 2, title: 'Temper Temper', artist: 'Lime Cordiale', audioSrc: '/tracks/limeCordiale.mp3', image: './coverArt/limeCordiale.jpg', isLiked: false },
        { id: 3, title: 'Alone', artist: 'Christo', audioSrc: '/tracks/christo.mp3', image: './coverArt/christo.jpg', isLiked: false },
        { id: 4, title: 'Old Love', artist: 'Balu Brigada', audioSrc: '/tracks/baluBrigada.mp3', image: './coverArt/baluBrigada.jpg', isLiked: false },
        { id: 5, title: 'Cake By The Ocean', artist: 'DNCE', audioSrc: '/tracks/dnce.mp3', image: './coverArt/dnce.jpg', isLiked: false },
        { id: 6, title: 'Dont Start Now', artist: 'Dua Lipa', audioSrc: '/tracks/duaLipa.mp3', image: './coverArt/duaLipa.png', isLiked: false },
        { id: 7, title: 'You Deserve Better', artist: 'James Arthur', audioSrc: '/tracks/jamesArthur.mp3', image: './coverArt/jamesArthur.png', isLiked: false },
        { id: 8, title: 'Lies', artist: 'Johnny Yukon', audioSrc: '/tracks/johnnyYukon.mp3', image: './coverArt/johnnyYukon.jpg', isLiked: false },
        { id: 9, title: '365', artist: 'Zedd, Katy Perry', audioSrc: '/tracks/zeddKatyPerry.mp3', image: './coverArt/zeddKatyPerry.jpg', isLiked: false },
        { id: 10, title: 'Problems', artist: '6lack', audioSrc: '/tracks/6lack.mp3', image: './coverArt/6lack.jpg', isLiked: false },
        { id: 11, title: 'Roxanne', artist: 'Arizona Zervas', audioSrc: '/tracks/arizonaZervas.mp3', image: './coverArt/arizonaZervas.jpg', isLiked: false },
        { id: 12, title: 'Make It Hot', artist: 'Major Lazer feat. Anita', audioSrc: '/tracks/majorLazer.mp3', image: './coverArt/majorLazer.jpg', isLiked: false },
        { id: 13, title: 'DRUGS', artist: 'upsahl', audioSrc: '/tracks/upsahl.mp3', image: './coverArt/upsahl.jpg', isLiked: false },
        { id: 14, title: `Don't Worry Bout Me`, artist: 'Zara Larsson', audioSrc: '/tracks/zaraLarsson.mp3', image: './coverArt/zaraLarsson.jpg', isLiked: false },
        { id: 15, title: 'I Miss You', artist: 'Clean Bandit feat. Julia Michaels', audioSrc: '/tracks/cleanBandit.mp3', image: './coverArt/cleanBandit.jpg', isLiked: false },
        { id: 16, title: 'Rude', artist: 'magic!', audioSrc: '/tracks/magic!.mp3', image: './coverArt/magic!.jpg', isLiked: false },
        { id: 17, title: 'Low Blow', artist: 'CXLOE', audioSrc: '/tracks/cxloe.mp3', image: './coverArt/cxloe.jpg', isLiked: false },
        { id: 18, title: 'Cruel', artist: 'Snake Hips feat. Zayn', audioSrc: '/tracks/snakeHips.mp3', image: './coverArt/snakeHips.jpg', isLiked: false },
        { id: 19, title: 'God Is A Woman', artist: 'Ariana Grande', audioSrc: '/tracks/arianaGrande.mp3', image: './coverArt/arianaGrande.jpg', isLiked: false },
        // { id: 20, title: '', artist: '', audioSrc: '/tracks/.mp3', image: './coverArt/.jpg', isLiked: false },
        // { id: 21, title: '', artist: '', audioSrc: '/tracks/.mp3', image: './coverArt/.jpg', isLiked: false },
        // { id: 22, title: '', artist: '', audioSrc: '/tracks/.mp3', image: './coverArt/zeddKatyPerry.jpg', isLiked: false },
      ])
    })
}
