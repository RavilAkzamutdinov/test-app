import { AuthAction, AuthActionTypes, AuthState } from '../../types/auth'

const initialState: AuthState = {
  userId: null,
  token: null,
  authLoading: false,
  authError: null,
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT: {
      return { ...state, authLoading: true, authError: null }
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        authLoading: false,
        userId: action.payload.userId,
        token: action.payload.token,
      }
    }
    case AuthActionTypes.LOGIN_ERROR: {
      return { ...state, authLoading: false, authError: action.payload }
    }
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return { ...state, authLoading: false, userId: null, token: null }
    }
    case AuthActionTypes.LOGOUT_ERROR: {
      return { ...state, authLoading: false, authError: action.payload }
    }
    default: {
      return state
    }
  }
}