import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';
import {addToPurchase} from '../actions/updatePurchaseActions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addToPurchase={props.addToPurchase}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures:state.featuresReducer.additionalFeatures
  }
}

export default connect(mapStateToProps, {addToPurchase})(AdditionalFeatures);
