export function sendMessage(newMessage: any) {
  return {
    type: 'SEND_MESSAGE',
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number) {
  return {
    type: 'DELETE_MESSAGE',
    meta: {
      timestamp
    }
  }
}