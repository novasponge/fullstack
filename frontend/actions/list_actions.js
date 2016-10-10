export const FETCH_ALL_LISTS = "FETCH_ALL_LISTS";
export const FETCH_ONE_LIST = "FETCH_ONE_LIST";
export const RECEIVE_ALL_LISTS = "RECEIVE_ALL_LISTS";
export const RECEIVE_ONE_LIST = "RECEIVE_ONE_LIST";
export const UPDATE_LIST = 'UPDATE_LIST';
export const CREATE_LIST = 'CREATE_LIST';
export const DESTROY_LIST = 'DESTROY_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_DETAIL = 'RECEIVE_LIST_DETAIL';

export const fetchAllLists = () => ({
  type: FETCH_ALL_LISTS,
});

export const receiveAllLists = (lists) => ({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const receiveOneList = (list) => ({
  type: RECEIVE_ONE_LIST,
  list
});

export const updateList = (id, list) => ({
  type: UPDATE_LIST,
  id,
  list
});

export const createList = (list) => ({
  type: CREATE_LIST,
  list
});

export const destroyList = (id) => ({
  type: DESTROY_LIST,
  id
});

export const removeList = (id) => ({
  type: REMOVE_LIST,
  id
});

export const receiveListDetail = (list) => ({
  type: RECEIVE_LIST_DETAIL,
  list
});
