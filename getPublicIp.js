import { failure, success } from './libs/response-lib';
import axios from 'axios';

// asynchronous call to aquire user's location via public ip
// https://www.npmjs.com/package/axios
export async function main(event, context) {
    

    try {
       const userLocation = await axios.get('http://ip-api.com/json');
       console.log('ipResponse:::', userLocation);

       return success({status: true, data: userLocation});
          
    } catch(e) {
        console.log('try/catch async Error', e);
    }
}