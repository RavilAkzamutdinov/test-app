import { Contact, ContactAction, ContactActionTypes } from '../../types/contact'
import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
const url = process.env.REACT_APP_API_UPL

export const fetchContacts = (userId: number | null, token: string | null) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.FETCH_CONTACTS })
      const response = await axios.get(`${url}/600/users/${userId}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
          payload: response.data as Contact[],
        })
      }, 1000)
    } catch (e) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const addContact = (surname: string, name: string, userId: number, token: string | null) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.ADD_CONTACT })
      const response = await axios.post(
        `${url}/600/users/${userId}/contacts`,
        JSON.stringify({ surname, name, userId }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.ADD_CONTACT_SUCCESS,
          payload: response.data as Contact,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: ContactActionTypes.ADD_CONTACT_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const editContact = (
  id: number,
  surname: string,
  name: string,
  userId: number,
  token: string | null,
) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.EDIT_CONTACT })
      const response = await axios.put(
        `${url}/600/contacts/${id}`,
        JSON.stringify({ surname, name, userId }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.EDIT_CONTACT_SUCCESS,
          payload: response.data,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: ContactActionTypes.EDIT_CONTACT_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const deleteContact = (id: number, token: string | null) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.DELETE_CONTACT })
      await axios.delete(`${url}/600/contacts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setTimeout(() => {
        dispatch({
          type: ContactActionTypes.DELETE_CONTACT_SUCCESS,
          payload: id,
        })
      }, 500)
    } catch (e) {
      dispatch({
        type: ContactActionTypes.DELETE_CONTACT_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const searchContact = (searchValue: string) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({ type: ContactActionTypes.SEARCH_CONTACT })
      dispatch({
        type: ContactActionTypes.SEARCH_CONTACT_SUCCESS,
        payload: searchValue,
      })
    } catch (e) {
      dispatch({
        type: ContactActionTypes.SEARCH_CONTACT_ERROR,
        payload: (e as AxiosError).response?.data as string,
      })
    }
  }
}

export const clearContacts = () => {
  return async (dispatch: Dispatch<ContactAction>) => {
    dispatch({ type: ContactActionTypes.CLEAR_CONTACTS })
  }
}