import ShopActionTypes from './shop.types.js';
// import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});