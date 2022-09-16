import * as AuthActionCreators from './auth'
import * as ContactActionCreators from './contact'

export default {
  ...AuthActionCreators,
  ...ContactActionCreators,
}