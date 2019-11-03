import React from 'react'
import SubmissionConfirmation from '../../client/components/SubmissionComfirmation'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

test('SubmissionConfirmation renders correctly', () => {
  const mockStore = configureStore([thunk])({
    auth: [{ loggedIn: true, error: false }],
    submissions: [{ submissionError: false }]
  })

  const component = renderer.create(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SubmissionConfirmation />
      </MemoryRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
