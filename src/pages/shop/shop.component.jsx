import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'; 
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
// now in reducer cause of thunk import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // moved below state into reducer
  // state = {
  //   loading: true
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
// moving to thunk now to do this async stuff there into actions
    // const collectionRef = firestore.collection('collections');
    // // could you se fetch to api but super nested
    // // here using promise
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }
  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    // moved with thunk const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props => (
            <CollectionsPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>  dispatch(fetchCollectionsStartAsync())
  // cause moved this to thunkupdateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
