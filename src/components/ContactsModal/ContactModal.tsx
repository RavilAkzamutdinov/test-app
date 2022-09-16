import React, { useEffect, useState } from 'react'
import {
  StyledModal as Modal,
  StyledModalHeader as ModalHeader,
  StyledModalTitle as ModalTitle,
  StyledModalBody as ModalBody,
  StyledModalFooter as ModalFooter,
  StyledForm as Form,
  StyledFormControl as FormControl,
  StyledButton as Button,
} from './ContactModal.style'
import Spinner from 'react-bootstrap/Spinner'

const initialState = {
  surname: '',
  name: '',
}

interface ContactModalProps {
  isVisible: boolean
  setVisible: (isVisible: boolean) => void
  title: string
  submitButtonTitle: string
  onSubmit: (surname: string, name: string, id?: number) => void
  id?: number
  surnameValue?: string
  nameValue?: string
  loading: boolean
}

const ContactModal: React.FC<ContactModalProps> = ({
  isVisible,
  setVisible,
  title,
  submitButtonTitle,
  onSubmit,
  id,
  surnameValue = '',
  nameValue = '',
  loading,
}) => {
  const [formValues, setFormValues] = useState(initialState)

  useEffect(() => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        surname: surnameValue,
      }
    })
  }, [surnameValue])

  useEffect(() => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        name: nameValue,
      }
    })
  }, [nameValue])

  useEffect(() => {
    if (!loading) {
      setVisible(false)
    }
  }, [loading])

  const handleClose = () => {
    setVisible(false)
    setFormValues(initialState)
  }

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault()
    onSubmit(formValues.surname, formValues.name, id)
    setFormValues(initialState)
  }

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target
    setFormValues({
      ...formValues,
      [id]: value,
    })
  }

  return (
    <Modal show={isVisible} onHide={handleClose}>
      <ModalHeader closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormControl
            type='text'
            id='surname'
            placeholder='Surname'
            defaultValue={surnameValue}
            onChange={handleTextFieldChange}
          />
          <FormControl
            type='text'
            id='name'
            placeholder='Name'
            defaultValue={nameValue}
            onChange={handleTextFieldChange}
          />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type='button' danger onClick={handleClose}>
          Cancel
        </Button>
        <Button type='submit' onClick={handleSubmit}>
          {loading ? <Spinner animation='border' variant='light' /> : submitButtonTitle}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ContactModal