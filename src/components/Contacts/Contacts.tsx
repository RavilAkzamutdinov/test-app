import React, { useState } from 'react'
import {
  StyledSpinnerContainer as SpinnerContainer,
  StyledSpinner as DarkSpinner,
  StyledContactsContainer as ContactsContainer,
  StyledContact as Contact,
  StyledContactText as ContactText,
  StyledContactButtonsContainer as ContactButtonsContainer,
  StyledContactEditButton as ContactEditButton,
  StyledContactDeleteButton as ContactDeleteButton,
} from './Contacts.style'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Contact as ContactType } from '../../types/contact'
import ContactModal from '../ContactsModal/ContactModal'
import Spinner from 'react-bootstrap/Spinner'

const Contacts = (props: {
  contacts: ContactType[]
  onEditContact: (id: number, surname: string, name: string) => void
  onDeleteContact: (id: number) => void
  loading: boolean
}) => {
  const [isVisible, setVisible] = useState(false)
  const [contactIdToDelete, setContactIdToDelete] = useState(-1)

  const initialCurrentContact = {
    id: -1,
    surname: '',
    name: '',
  }
  const [currentContact, setCurrentContact] = useState(initialCurrentContact)

  const onEditButtonClick = (id: number, surname: string, name: string) => {
    setCurrentContact({ id, surname, name })
    setVisible(true)
  }

  const handleEdit = (surname: string, name: string, id?: number) => {
    if (id) {
      props.onEditContact(id, surname, name)
    }
  }

  const handleDelete = (id: number) => {
    setContactIdToDelete(id)
    props.onDeleteContact(id)
  }

  if (props.loading && !props.contacts.length) {
    return (
      <SpinnerContainer>
        <DarkSpinner animation='border' />
      </SpinnerContainer>
    )
  }

  return (
    <ContactsContainer>
      {props.contacts.map((contact) => (
        <Contact key={contact.id}>
          <ContactText>
            {contact.surname} {contact.name}
          </ContactText>
          <ContactButtonsContainer>
            <ContactEditButton
              warning
              onClick={() => onEditButtonClick(contact.id, contact.surname, contact.name)}
            >
              <i className='bi bi-pencil'></i>
            </ContactEditButton>
            <ContactDeleteButton danger onClick={() => handleDelete(contact.id)}>
              {props.loading && contact.id === contactIdToDelete ? (
                <Spinner animation='border' variant='light' />
              ) : (
                <i className='bi bi-trash'></i>
              )}
            </ContactDeleteButton>
          </ContactButtonsContainer>
        </Contact>
      ))}
      <ContactModal
        isVisible={isVisible}
        setVisible={setVisible}
        title='Edit contact'
        submitButtonTitle='Save'
        onSubmit={handleEdit}
        id={currentContact.id}
        surnameValue={currentContact.surname}
        nameValue={currentContact.name}
        loading={props.loading}
      />
    </ContactsContainer>
  )
}

export default Contacts