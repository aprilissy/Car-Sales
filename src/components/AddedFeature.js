import React from 'react'

const AddedFeature = props => {
 
  const removeAddedFeature = () => {
    props.removeFromPurchase({
      id: props.feature.id
    })
  }
  
  return (
    <li>
      <button className="button" onClick={removeAddedFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
