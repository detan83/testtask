// TODO: rename interface with more clear name
export interface IAppState {
  photos: object[];
}

function addPropertyToObjects(photos: Object[], key: string, value: any) {
 return photos.map(photo => (photo[key] = value, photo));
}

function fetchGallery(state: IAppState, action: any): IAppState {
  const modifiedArray = addPropertyToObjects(action.photos.concat([]), 'selected', false);
  return  Object.assign({}, state, { photos: state.photos.concat(modifiedArray) });
}

export function rootReducer(state: IAppState, action) {
  let newState: IAppState;

  switch (action.type) {
    case 'FETCH_GALLERY_SUCCESS': newState = fetchGallery(state, action);
  }
  return newState || state;
}
