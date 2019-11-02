const testConfig = require('./test-environment')
const submissions = require('../server/db/submissions')
const members = require('../server/db/members')

let testDb = null

beforeEach(() => {
  testDb = testConfig.getTestDb()
  return testConfig.initialise(testDb)
})

afterEach(() => testConfig.cleanup(testDb))

describe('Db members tests', () => {
  it('getMember gets a member by email', () => {
   const member = {
    id: 1,
    email: "testuser@test.com",
    password: "test"
  }
   const expected = "testuser@test.com"

    return members.getMember(member, testDb)
      .then(member => {
        const actual = member.email
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })
})


describe('Db submissions tests', () => {
  it('newSubmission increases length of submissions by one', () => {
    const submission = {
      email: "newmember@test.com",
      topic: "test topic",
      synopsis: "test synopsis",
      submission_time: "1572683895",
      lightning_talk_date: "2019-12-03T10:00:00.000Z"
    }
    const expected = 2

    return submissions.newSubmission(submission, testDb)
      .then(allsubmissions => {
        const actual = allsubmissions.length + 1
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })
  it('getSubmissions gets all submissions', () => {
    const expected = 1
    return submissions.getSubmissions(testDb)
      .then(allsubmissions => {
        const actual = allsubmissions.length
        expect(actual).toBe(expected)
      })
      .catch(err => expect(err).toBeNull())
  })
})
