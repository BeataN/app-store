import { RETURNED_ALL_APPS, RETURNED_MY_APPS, ADD_APP_TO_USER, SELECT_APP_TO_ADD } from '../Actions'

const INIT_STATE = {
  appList: [],
  myappList: []
};

const appReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case RETURNED_ALL_APPS:
      return {
        ...state,
        appList: action.payload.map(app => {
          return {
            ...app,
            checked:false
          }
        })
      }

    case RETURNED_MY_APPS:
      return {
        ...state,
        myappList: action.payload.map(app => {
          return {
            ...app,
            checked:true
          }
        })
      }

    case SELECT_APP_TO_ADD:
      const appId = Number(action.paylaod)

      return {
        ...state,
        appList: state.appList.map(app => {
					if (app.id !== appId) return app;
					return {
						...app,
						checked: !app.checked,
					};
				}),
      }

    case ADD_APP_TO_USER:
      // console.log('action.paylaod', action.payload)
      // const appsId = action.payload;
      // const index = state.appList.findIndex(app => app.id === appsId)
      // const apps = state.appList[index]
      // console.log('action.paylaod apps', apps);
      return {
        ...state,
        myappList: state.myappList.concat(action.payload)
      }
  }
  return state;
};

export default appReducer;
