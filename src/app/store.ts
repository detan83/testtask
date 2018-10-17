// TODO: rename interface with more clear name
export interface IAppState {
  photos: object[];
}

function fetchGallery(state: IAppState, action: any): IAppState {

  return  Object.assign({}, state, { photos: state.photos.concat(action.photos) });
}

export function rootReducer(state: IAppState, action) {
  let newState: IAppState;

  switch (action.type) {
    case 'FETCH_GALLERY_SUCCESS': newState = fetchGallery(state, action);
  }
  return newState || state;
}
