const constants = [
  'LOGIN_USER_REQUEST',
  'LOGIN_USER_FAILURE',
  'LOGIN_USER_SUCCESS',
  'LOGOUT_USER'
]

export default constants.reduce((acc, constant) => {
  return {
    ...acc,
    [constant]: constant
  }
}, {})
