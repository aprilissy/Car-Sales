import React from 'react';

const AdditionalFeature = props => {

  const addFeature = () => {
    props.addToPurchase({
      id:props.feature.id,
      name: props.feature.name,
      price: props.feature.price
    })
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature} >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
