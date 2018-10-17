// TODO: rename interface with more clear name
export interface IAppState {
  photos: any[];
  selectedPhotoId: number;
}

function fetchGallery(state: IAppState, action: any): IAppState {
  return  Object.assign({}, state, { photos: state.photos.concat(action.photos) });
}


function selectPhoto(state: IAppState, action: any) {
  debugger;
  return Object.assign({}, state, {selectedPhotoId: action.photo.id});
}

export function rootReducer(state: IAppState, action) {
  let newState: IAppState;

  switch (action.type) {
    case 'FETCH_GALLERY_SUCCESS': newState = fetchGallery(state, action); break;
    case 'SELECT_PHOTO'         : newState = selectPhoto(state, action); break;
  }
  return newState || state;
}
