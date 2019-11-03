const initialState = {
  error: false
}

export default function submissionsReducer (state = initialState, action) {
  switch (action.type) {
    case 'SUBMISSION_ERROR':
      return {
        ...state,
        error: true
      }
    case 'SUBMISSION_VERIFIED':
      return {
        ...state,
        error: false
      }
    default:
      return state
  }
}
