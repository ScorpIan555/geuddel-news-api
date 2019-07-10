import { failure, success } from './libs/response-lib';
import axios from 'axios';

// asynchronous call to aquire user's location via public ip
// https://www.npmjs.com/package/axios
export async function main(event, context) {
    console.log('event::::', event);
    console.log('context::::', context);

    try {
       const ipResponse = await axios.get('http://ip-api.com/json');
       console.log('ipResponse:::', ipResponse);
          
    } catch(e) {
        console.log('try/catch async Error', e);
    }
}