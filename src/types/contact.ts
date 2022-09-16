export interface Contact {
  id: number
  surname: string
  name: string
  userId: number
}

export interface ContactState {
  contacts: Contact[]
  filteredContacts: Contact[]
  contactsLoading: boolean
  contactsError: null | string
}

export enum ContactActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
  ADD_CONTACT = 'ADD_CONTACT',
  ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_ERROR = 'ADD_CONTACT_ERROR',
  EDIT_CONTACT = 'EDIT_CONTACT',
  EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS',
  EDIT_CONTACT_ERROR = 'EDIT_CONTACT_ERROR',
  DELETE_CONTACT = 'DELETE_CONTACT',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR',
  SEARCH_CONTACT = 'SEARCH_CONTACT',
  SEARCH_CONTACT_SUCCESS = 'SEARCH_CONTACT_SUCCESS',
  SEARCH_CONTACT_ERROR = 'SEARCH_CONTACT_ERROR',
  CLEAR_CONTACTS = 'CLEAR_CONTACTS',
}

interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS
}

interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS
  payload: Contact[]
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERROR
  payload: string
}

interface AddContactAction {
  type: ContactActionTypes.ADD_CONTACT
}

interface AddContactSuccessAction {
  type: ContactActionTypes.ADD_CONTACT_SUCCESS
  payload: Contact
}

interface AddContactErrorAction {
  type: ContactActionTypes.ADD_CONTACT_ERROR
  payload: string
}

interface EditContactAction {
  type: ContactActionTypes.EDIT_CONTACT
}

interface EditContactSuccessAction {
  type: ContactActionTypes.EDIT_CONTACT_SUCCESS
  payload: Contact
}

interface EditContactErrorAction {
  type: ContactActionTypes.EDIT_CONTACT_ERROR
  payload: string
}

interface DeleteContactAction {
  type: ContactActionTypes.DELETE_CONTACT
}

interface DeleteContactSuccessAction {
  type: ContactActionTypes.DELETE_CONTACT_SUCCESS
  payload: number
}

interface DeleteContactErrorAction {
  type: ContactActionTypes.DELETE_CONTACT_ERROR
  payload: string
}

interface SearchContactAction {
  type: ContactActionTypes.SEARCH_CONTACT
}

interface SearchContactSuccessAction {
  type: ContactActionTypes.SEARCH_CONTACT_SUCCESS
  payload: string
}

interface SearchContactErrorAction {
  type: ContactActionTypes.SEARCH_CONTACT_ERROR
  payload: string
}

interface ClearContactsAction {
  type: ContactActionTypes.CLEAR_CONTACTS
}

export type ContactAction =
  | FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction
  | AddContactAction
  | AddContactSuccessAction
  | AddContactErrorAction
  | EditContactAction
  | EditContactSuccessAction
  | EditContactErrorAction
  | DeleteContactAction
  | DeleteContactSuccessAction
  | DeleteContactErrorAction
  | SearchContactAction
  | SearchContactSuccessAction
  | SearchContactErrorAction
  | ClearContactsAction