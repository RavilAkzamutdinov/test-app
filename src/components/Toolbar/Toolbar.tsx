import React, { useState } from 'react'
import {
  StyledToolbarContainer as ToolbarContainer,
  StyledSearchForm as SearchForm,
  StyledSearchFormControl as SearchFormControl,
  StyledButton as Button,
} from './Toolbar.style'
import ContactModal from '../ContactsModal/ContactModal'

const Toolbar = (props: {
  onAddContact: (surname: string, name: string) => void
  onSearch: (searchValue: string) => void
  loading: boolean
}) => {
  const [isVisible, setVisible] = useState(false)

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target
    props.onSearch(value)
  }

  return (
    <>
      <ToolbarContainer>
        <Button onClick={() => setVisible(true)}>Add contact</Button>
        <SearchForm>
          <SearchFormControl type='search' placeholder='Search' onChange={handleTextFieldChange} />
        </SearchForm>
      </ToolbarContainer>
      <ContactModal
        isVisible={isVisible}
        setVisible={setVisible}
        title='Add contact'
        submitButtonTitle='Add'
        onSubmit={props.onAddContact}
        loading={props.loading}
      />
    </>
  )
}

export default Toolbar