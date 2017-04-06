import { contacts } from '../contacts-data';

export function fetchContacts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    })
  }
}
