import React from 'react';
import { connect } from 'react-redux'
import {removeFromPurchase} from '../actions/updatePurchaseActions'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const featuresList = Object.values(props.car.features)
  console.log("ADDED FEATURES: ", props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {featuresList.length ? (
        <ol type="1">
          {featuresList.map(item => (
            <AddedFeature key={item.id} feature={item} removeFromPurchase={props.removeFromPurchase} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.featuresReducer.car
  }
}

export default connect(mapStateToProps, {removeFromPurchase})(AddedFeatures);
