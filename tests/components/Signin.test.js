import React from 'react'
import Signin from '../../client/components/Signin'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

test('Signin renders correctly', () => {
  const mockStore = configureStore([thunk])({
    auth: [{ loggedIn: true, error: false }]
  })

  const component = renderer.create(
    <Provider store={mockStore}>
      <MemoryRouter>
        <Signin />
      </MemoryRouter>
    </Provider>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
