import { ADD_FEATURE, REMOVE_ADDED_FEATURE } from '../actions/updatePurchaseActions'

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}

const additionalPriceCalc = features => Object.values(features).reduce((acc, val) => acc + val.price, 0)

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:

      return{
        ...state,
        additionalPrice: additionalPriceCalc({
          ...state.car.features, 
          [action.payload.id]: action.payload
        }),
        car:{
          ...state.car,
          features:{
            ...state.car.features, 
            [action.payload.id]: action.payload
          }
        }
      }

    case REMOVE_ADDED_FEATURE:
      const temp = {
        ...state,
        car: {
          ...state.car
        }
      }
      delete temp.car.features[action.payload.id]
      temp.additionalPrice = additionalPriceCalc(temp.car.features)
      return temp

    default:
      return state
  }
}

export default featuresReducer