const initialState = {additionalPrice: 0}


export const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_TOTOAL:
      return {
        ...state,
        additionalPrice: [...state.additionalPrice,
        // car price + additional price
        ]
      }
      default:
        return state
  }
}