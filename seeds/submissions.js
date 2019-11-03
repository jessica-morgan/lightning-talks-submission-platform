exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('submissions').del()
    .then(function () {
      // Inserts seed entries
      return knex('submissions').insert([
        { id: 1, user_id: 1, user_email: 'testuser@test.com', topic: 'Developer’s Toolbox for Testing in Production', synopsis: 'In the software development lifycle, test pyramid helps to build confidence for launching the feature. While single code change is easy to manage, testing a whole feature in the system are facing the increasing challenges in the microservice world. While maintaining multiple environments would help sort out the promotion path, but it is involved with tremendous efforts cross the teams and very costly for the business as well, that is how “Testing in Production (TIP)” becomes popular. In this session, I want to talk about some of the TIP practices that we do for delivering features. Especially think about the feature delivery from developer experience perspective.', submission_time: 'Sun Nov 03 2019 14:44:42 GMT+1300 (New Zealand Daylight Time)', lightning_talk_date: 'Tues Dec 03 2019 14:00:00 GMT+1300 (New Zealand Daylight Time)' }
      ])
    })
}
