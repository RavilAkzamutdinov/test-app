export interface User {
  email: null | string
  password: null | string
}

export interface AuthState {
  userId: number | null
  token: string | null
  authLoading: boolean
  authError: null | string
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT = 'LOGOUT',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR',
}

interface LoginAction {
  type: AuthActionTypes.LOGIN
}

interface LoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS
  payload: { userId: number; token: string }
}

interface LoginErrorAction {
  type: AuthActionTypes.LOGIN_ERROR
  payload: string
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

interface LogoutSuccessAction {
  type: AuthActionTypes.LOGOUT_SUCCESS
}

interface LogoutErrorAction {
  type: AuthActionTypes.LOGOUT_ERROR
  payload: string
}

export type AuthAction =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | LogoutSuccessAction
  | LogoutErrorAction

export interface AuthResponse {
  accessToken: string
  user: {
    id: number
    email: string
  }
}