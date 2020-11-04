// Action types:
export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_ADDED_FEATURE = 'REMOVE_ADDED_FEATURE'

// Action creator
export const addToPurchase = (feature) => {
  return({type:ADD_FEATURE, payload:feature})
}

export const removeFromPurchase = (feature) => {
  return({type:REMOVE_ADDED_FEATURE, payload:feature})
}