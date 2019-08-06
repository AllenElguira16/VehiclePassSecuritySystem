const initialState: any = {
  messages: []
}

export function chatReducer(
  state = initialState,
  action: any
): any {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        messages: [...state.messages, action.payload]
      }
    case 'DELETE_MESSAGE':
      return {
        messages: state.messages.filter((message: any) => message.timestamp !== action.meta.timestamp)
      }
    default:
      return state
  }
}