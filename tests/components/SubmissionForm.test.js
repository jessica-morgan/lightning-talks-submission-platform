import React from 'react'
import SubmissionForm from '../../client/components/SubmissionForm'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'
import thunk from 'redux-thunk'

test('SubmissionForm renders correctly', () => {
  const mockStore = configureStore([thunk])({
    auth: [{ loggedIn: true, error: false, userId: 1 }]
  })

  const component = renderer.create(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SubmissionForm />
      </MemoryRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
