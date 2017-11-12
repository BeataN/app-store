import axios from 'axios'
export const RETURNED_ALL_APPS = "RETURNED_ALL_APPS"
export const RETURNED_MY_APPS = "RETURNED_MY_APPS"
export const ADD_APP_TO_USER = "ADD_APP_TO_USER"
export const DELETE_APP_TO_USER = "DELETE_APP_TO_USER"
export const SELECT_APP_TO_ADD = "SELECT_APP_TO_ADD"

export const returnedAllApps = () => {
   return (dispatch) => {
    axios.get('http://localhost:3001/apps?appId=1')
    .then(res => {
      dispatch({type: RETURNED_ALL_APPS, payload: res.data})
    })
    .catch((err) => console.log(err))
    }
};

export const returnMyApps = () => {
   return (dispatch) => {
    axios.get('http://localhost:3001/myApps?appId=1')
    .then(res => {
      dispatch({type: RETURNED_MY_APPS, payload: res.data})
    })
    .catch((err) => console.log(err))
    }
};

export const addAppToUser = (appId) => {
   return (dispatch) => {
    axios.post('http://localhost:3001/addApp?appId=1', {appId})
    .then(res => {
      dispatch({type: ADD_APP_TO_USER, payload: res.data})
    })
    .catch((err) => console.log(err))
    }
};

export const deleteAppToUser = (appId) => {
   return (dispatch) => {
    axios.delete('http://localhost:3001//deleteApp?appId=1', {appId})
    .then(res => {
      dispatch({type: DELETE_APP_TO_USER, payload: res.data})
    })
    .catch((err) => console.log(err))
    }
};

export const selectAppAdd = (appId) => {
  return {
    type: SELECT_APP_TO_ADD,
    paylaod: appId
  };
};
