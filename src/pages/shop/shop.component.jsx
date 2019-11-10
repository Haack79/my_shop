import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'; 
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
// not needed with container import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
// now in reducer cause of thunk import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// not needed with container const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
// using hooks here change class to functional component and pass in data 
const ShopPage = ({ fetchCollectionsStart, match, isCollectionsLoaded }) => {
  useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart]);
  // moved below state into reducer
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;
// component did mount handled by useEffect HOOKS 
//   componentDidMount() {
//     const { fetchCollectionsStart } = this.props;
//     fetchCollectionsStart();
//     // const { updateCollections } = this.props;
// // moving to thunk now to do this async stuff there into actions
//     // const collectionRef = firestore.collection('collections');
//     // // could you se fetch to api but super nested
//     // // here using promise
//     // collectionRef.get().then(snapshot => {
//     //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     //   updateCollections(collectionsMap);
//     //   this.setState({ loading: false });
//     // });
//   }

    // const { match, isCollectionsLoaded } = this.props;
    // moved with thunk const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props => (
            <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () =>  dispatch(fetchCollectionsStart())
  // cause moved this to thunkupdateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
