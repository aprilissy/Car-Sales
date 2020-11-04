import React, { useReducer } from 'react';
import { removeFromPurchase } from '../actions/updatePurchaseActions'


const AddedFeature = props => {
 
  // const removeAddedFeature = () => {
  //   (removeFromPurchase())
  // }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature 
      onClick={removeFromPurchase}
      */}
      <button className="button" >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
