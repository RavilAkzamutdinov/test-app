import { ContactAction, ContactActionTypes, ContactState } from '../../types/contact'

const initialState: ContactState = {
  contacts: [],
  filteredContacts: [],
  contactsLoading: false,
  contactsError: null,
}

export const contactReducer = (state = initialState, action: ContactAction): ContactState => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS: {
      return { ...state, contactsLoading: true, contactsError: null }
    }
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS: {
      return {
        ...state,
        contactsLoading: false,
        contacts: action.payload,
        filteredContacts: action.payload,
      }
    }
    case ContactActionTypes.FETCH_CONTACTS_ERROR: {
      return { ...state, contactsLoading: false, contactsError: action.payload }
    }
    case ContactActionTypes.ADD_CONTACT: {
      return { ...state, contactsLoading: true, contactsError: null }
    }
    case ContactActionTypes.ADD_CONTACT_SUCCESS: {
      return { ...state, contactsLoading: false, contacts: [...state.contacts, action.payload] }
    }
    case ContactActionTypes.ADD_CONTACT_ERROR: {
      return { ...state, contactsLoading: false, contactsError: action.payload }
    }
    case ContactActionTypes.EDIT_CONTACT: {
      return { ...state, contactsLoading: true, contactsError: null }
    }
    case ContactActionTypes.EDIT_CONTACT_SUCCESS: {
      return {
        ...state,
        contactsLoading: false,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      }
    }
    case ContactActionTypes.EDIT_CONTACT_ERROR: {
      return { ...state, contactsLoading: false, contactsError: action.payload }
    }
    case ContactActionTypes.DELETE_CONTACT: {
      return { ...state, contactsLoading: true, contactsError: null }
    }
    case ContactActionTypes.DELETE_CONTACT_SUCCESS: {
      return {
        ...state,
        contactsLoading: false,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      }
    }
    case ContactActionTypes.DELETE_CONTACT_ERROR: {
      return { ...state, contactsLoading: false, contactsError: action.payload }
    }
    case ContactActionTypes.SEARCH_CONTACT: {
      return { ...state, contactsLoading: true, contactsError: null }
    }
    case ContactActionTypes.SEARCH_CONTACT_SUCCESS: {
      if (action.payload === '') {
        return { ...state, contactsLoading: false, filteredContacts: state.contacts }
      }
      return {
        ...state,
        contactsLoading: false,
        filteredContacts: state.contacts.filter(
          (contact) =>
            contact.surname.toLowerCase().includes(action.payload.trim().toLowerCase()) ||
            contact.name.toLowerCase().includes(action.payload.trim().toLowerCase()) ||
            `${contact.surname.toLowerCase()} ${contact.name.toLowerCase()}`.includes(
              action.payload.trim().toLowerCase(),
            ) ||
            `${contact.name.toLowerCase()} ${contact.surname.toLowerCase()}`.includes(
              action.payload.trim().toLowerCase(),
            ),
        ),
      }
    }
    case ContactActionTypes.SEARCH_CONTACT_ERROR: {
      return { ...state, contactsLoading: false, contactsError: action.payload }
    }
    case ContactActionTypes.CLEAR_CONTACTS: {
      return initialState
    }
    default: {
      return state
    }
  }
}