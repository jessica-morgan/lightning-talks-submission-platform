import React from 'react'
import SubmissionRecord from '../../client/components/SubmissionRecord'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

test('SubmissionRecord renders correctly', () => {
  const mockStore = configureStore([thunk])({
    auth: [{ loggedIn: true, error: false }]
  })

  const component = renderer.create(
    <Provider store={mockStore}>
      <MemoryRouter>
        <SubmissionRecord />
      </MemoryRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
