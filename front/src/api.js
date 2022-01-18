import axios from 'axios';
import config from './config';

export default class Api {
    async _get (endpoint) {
        const url = config.apiUrl + endpoint;
        return await axios.get(url).then(resp => resp).catch(err => {
            console.log(err);
            return err;
        });
    }
    async time() {
        return await this._get('time');
    }
    async checkClaim() {
        return await this._get('canClaim');
    }
}
