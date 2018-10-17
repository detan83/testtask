// TODO: rename interface with more clear name
export interface IAppState {
  photos: any[];
  selectedPhotoId: number;
}

function fetchGallery(state: IAppState, action: any): IAppState {
  return  Object.assign({}, state, { photos: state.photos.concat(action.photos) });
}


function selectPhoto(state: IAppState, action: any) {
  return Object.assign({}, state, {selectedPhotoId: action.photo.id});
}

function moveTo (state: IAppState, action: any) {
  let nextPhotoId: number;

  const getCurrentId = () => state.photos.findIndex(photo => photo.id === state.selectedPhotoId);

  function getNextId(): number {
    let resultElementId: number;
    const currentId: number = getCurrentId();

    resultElementId = state.photos[currentId === state.photos.length - 1 ? 0 : currentId + 1].id;
    return resultElementId;
  }

  function getPreviousId():number {
    let resultElementId: number;
    const currentId: number = getCurrentId();

    resultElementId = state.photos[currentId === 0 ? state.photos.length - 1 : currentId - 1].id;
    return resultElementId;
  }

  switch(action.type) {
    case 'SHOW_NEXT_PHOTO': nextPhotoId = getNextId(); break;
    case 'SHOW_PREVIOUS_PHOTO': nextPhotoId = getPreviousId(); break;
    default: nextPhotoId = state.selectedPhotoId; break;
  }
  return Object.assign({}, state, {selectedPhotoId: nextPhotoId});
}

function closePhoto(state: IAppState, action: any) {
  return Object.assign({}, state, {selectedPhotoId: 0});
}

export function rootReducer(state: IAppState, action) {
  let newState: IAppState;

  switch (action.type) {
    case 'FETCH_GALLERY_SUCCESS': newState = fetchGallery(state, action); break;
    case 'SELECT_PHOTO'         : newState = selectPhoto(state, action); break;
    case 'SHOW_NEXT_PHOTO'      :
    case 'SHOW_PREVIOUS_PHOTO'  : newState = moveTo(state, action); break;
    case 'CLOSE_PHOTO'          : newState = closePhoto(state, action); break;
  }
  return newState || state;
}
