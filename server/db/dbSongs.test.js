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
  it('returns individual songby id', () => {
    return db.getIndSong(1, testDb)
      .then(result => {
        expect(result.id).toBe(1)
        expect(result.title).toBe('We Are The People')
        expect(result.artist).toBe('Empire Of The Sun')
        return null
      })
  })
})
