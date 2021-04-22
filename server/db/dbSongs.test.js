const knex = require('knex')
const config = require('../../knexfile').test
const testDb = knex(config)

const db = require('./dbSongs')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getSongs()', () => {
  it('returns all songs', () => {
    return db.getSongs(testDb)
      .then(result => {
        expect(result).toHaveLength(9)
        return null
      })
  })
})

describe('GetIndSong()', () => {
  it('returns individual song by id', () => {
    return db.getIndSong(1, testDb)
      .then(result => {
        expect(result.id).toBe(1)
        expect(result.title).toBe('We Are The People')
        expect(result.artist).toBe('Empire Of The Sun')
        return null
      })
  })
})

// TEST DOESNT WORK YET
// describe('deleteSong()', () => {
//   it('deletes song by id', () => {
//     return db.deleteSong(2, testDb)
//       .then(db.getSongs())
//       .then(result => {
//         console.log('rr', result)
//         expect(result).toHaveLength(8)
//         return null
//       })
//   })
// })

// describe('addSong()', () => {
//   it('correctly inserts new song to database', () => {
//     const song = {
//       title: 'testSong',
//       artist: 'testArtist',
//       audioSrc: 'testAudioSrc',
//       image: 'testImageSrc',
//       isLiked: 1

//     }
//     return db.addSong(song, testDb)
//       .then(result => {
//         console.log(result)
//         expect(result.title).toBe('testSong')
//         return null
//       })
//   })
// })
