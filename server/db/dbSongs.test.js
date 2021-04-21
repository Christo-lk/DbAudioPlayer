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

describe('getSongs', () => {
  it('returns all songs', () => {
    return db.getSongs(testDb)
      .then(result => {
        expect(result).toHaveLength(8)
        return null
      })
  })
})
