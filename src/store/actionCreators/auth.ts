import { AuthAction, AuthActionTypes, AuthResponse, User } from '../../types/auth'
import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
const url = process.env.REACT_APP_API_UPL

export const login = (formValues: User) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGIN })
      const res = (
        await axios.post(`${url}/login`, JSON.stringify(formValues), {
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).data as AuthResponse
      setTimeout(() => {
        dispatch({
          type: AuthActionTypes.LOGIN_SUCCESS,
          payload: {
            userId: res.user.id,
            token: res.accessToken,
          },
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGIN_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionTypes.LOGOUT })
      setTimeout(() => {
        dispatch({
          type: AuthActionTypes.LOGOUT_SUCCESS,
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: AuthActionTypes.LOGOUT_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}