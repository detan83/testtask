// TODO: rename interface with more clear name
export interface IAppState {
  photos: any[];
}

function addPropertyToObjects(photos: Object[], key: string, value: any) {
 return photos.map(photo => (photo[key] = value, photo));
}

function fetchGallery(state: IAppState, action: any): IAppState {
  const modifiedArray = addPropertyToObjects(action.photos.concat([]), 'selected', false);
  return  Object.assign({}, state, { photos: state.photos.concat(modifiedArray) });
}

function toggleProperty(state: IAppState, action: any) {
  const indexOnArray = state.photos.findIndex(photo => photo.id === action.photo.id);
  return Object.assign({}, state, {photos: Object.assign([...state.photos], {[indexOnArray]: Object.assign({}, state.photos[indexOnArray], {selected: !state.photos[indexOnArray].selected})} )});
}

export function rootReducer(state: IAppState, action) {
  let newState: IAppState;

  switch (action.type) {
    case 'FETCH_GALLERY_SUCCESS': newState = fetchGallery(state, action); break;
    case 'SELECT_PHOTO'         : newState = toggleProperty(state, action); break;
  }
  return newState || state;
}
