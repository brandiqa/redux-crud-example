import React from 'react';

export default function ContactList({contacts}){

  const list = () => {
    return contacts.map(contact => {
      return (
        <li key={contact._id}>{contact.name.first} {contact.name.last}</li>
      )
    })
  }

  return (
    <div>
      <ul>
        { list() }
      </ul>
    </div>
  )
}
