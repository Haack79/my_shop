import ShopActionTypes from './shop.types.js';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';
// action without thunk
// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// });

// now with thunk
export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTICONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        // create a collection ref
        const collectionRef = firestore.collection('collections');
        // now with thunk can do dispatch here -this switches fetcher state to true
        dispatch(fetchCollectionsStart());
        // could you se fetch to api but super nested
        // here using promise, start async here 
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}