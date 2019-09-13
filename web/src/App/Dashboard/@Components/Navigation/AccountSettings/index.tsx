import React, { FC, useContext, FormEvent } from 'react'
// import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { observer } from 'mobx-react-lite'
import { AppStore } from 'Store'
import { FormModal, Input } from '@Components'

const AccountSettings: FC = observer(() => {
  let { AccountSettingsState } = useContext(AppStore)
  const toggler = () => {
    AccountSettingsState.isOpen = false
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const onChange = (key: 'username' | 'password', value: string) => {
    console.log(value)
    AccountSettingsState.admin = {
      ...AccountSettingsState.admin,
      [key]: value,
    }
  }

  return (
    <FormModal toggler={toggler} toggle={AccountSettingsState.isOpen} title="Change Account" onSubmit={submit}>
      <Input
        type="text"
        icon={{ position: 'append', iconName: 'person' }}
        placeholder="Username"
        onChange={({ currentTarget }) => onChange('username', currentTarget.value)}
        value={AccountSettingsState.admin.username}
      />
      <Input
        type="password"
        icon={{ position: 'append', iconName: 'vpn_key' }}
        onChange={({ currentTarget }) => onChange('password', currentTarget.value)}
        placeholder="Password"
        value={AccountSettingsState.admin.password}
      />
    </FormModal>
  )
})

export default AccountSettings
