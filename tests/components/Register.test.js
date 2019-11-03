import React from 'react'
import Register from '../../client/components/Register'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'

test('Register renders correctly', () => {
  const mockStore = configureStore([thunk])({
    auth: [{ loggedIn: true, error: false, registered: true }]
  })

  const component = renderer.create(
    <Provider store={mockStore}>
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
