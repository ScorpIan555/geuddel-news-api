import { failure, success } from './libs/response-lib';
import axios from 'axios';

// asynchronous call to aquire user's location via public ip
// https://www.npmjs.com/package/axios
export async function main(event, context) {

    try {
        const response = await axios.get('http://ip-api.com/json');
        // console.log('ipResponse:::', response);
        // console.log('ipResponse.data:::', response.data);
        // console.log('ipResponse.data:::', typeof(response.data));
        //    return success({ status: true, data: userLocation });
        const userLocation = response.data;   
        // console.log('success({ status: true, data: userLocation }):::', success({ status: true, data: userLocation }));
        return success({ status: true, data: userLocation });

    } catch(e) {
        console.log('try/catch async Error', e);
        return failure({ message: e.message });
    }
}