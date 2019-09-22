import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import SHOP_DATA from './shop.data.js';
// import { selectCollections } from '../../redux/shop/shop.selectors';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
// changed from class to functional component since getting data stored from somewhere else. 
const ShopPage = ({match}) => (
    <div>
        <Route exact path={`${match.path}`}component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

    </div>

)

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });

export default ShopPage; 