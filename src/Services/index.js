import axios from 'axios'
import { returnedAllApps } from '../Actions'

// export const myApps = () => {
//     axios
//       .get('http://localhost:3001/myApps?appId=1')
//       .then(res => res.data)
// };

export const addApp = (appId) => {
  console.log('appid!!!!', appId);
    axios.post('http://localhost:3001/addApp?appId=1', {appId})
      .then(res => console.log(res))
      .catch(err => console.log(err))
};
