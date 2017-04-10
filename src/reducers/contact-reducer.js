const defaultState = {
  contacts: [],
  contact: {name:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        contacts: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_CONTACTS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_CONTACT': {
      return {
        ...state,
        contact: {name:{}}
      }
    }

    case 'SAVE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_CONTACT_FULFILLED': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_CONTACT_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, name: { first,last }, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_CONTACT_PENDING': {
      return {
        ...state,
        loading: true,
        contact: {name:{}}
      }
    }

    case 'FETCH_CONTACT_FULFILLED': {
      return {
        ...state,
        contact: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CONTACT_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_CONTACT_FULFILLED': {
      const contact = action.payload.data;
      return {
        ...state,
        contacts: state.contacts.map(item => item._id === contact._id ? contact : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_CONTACT_REJECTED': {
      const data = action.payload.response.data;
      const { "name.first":first, "name.last":last, phone, email } = data.errors;
      const errors = { global: data.message, name: { first,last }, phone, email };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_CONTACT_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        contacts: state.contacts.filter(item => item._id !== _id)
      }
    }

    default:
      return state;
  }
}
