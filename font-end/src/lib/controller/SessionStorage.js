import _ from 'lodash';
/**
 * @class
 */
class SessionStorage {
    constructor() {
        this.windowStorage = window.sessionStorage;
    }

    /**
     * Gets the item from local storage
     * @param {*} key
     * @returns {*} value from local storage
     * @memberof SessionStorage
     */

    getItem(key) {
        const val = this.windowStorage.getItem(key);
        if (!_.isUndefined(val)) {
            return val;
        }
        return JSON.parse(val);
    }

    /**
     * Sets the item in sessionstorage
     * @param {string} key
     * @param {*} value
     * @returns {*}
     * @memberof SessionStorage
     */
    setItem(key, value) {
        const valToStore = _.isString(value) ? value : JSON.stringify(value);
        if (!_.isEmpty(valToStore)) {
            return this.windowStorage.setItem(key, valToStore);
        } else {
            console.log('Cannot set item in SessionStorage with empty value');
        }
    }

    removeItem(key) {
        return this.windowStorage.removeItem(key);
    }

    clear() {
        return this.windowStorage.clear();
    }
}

export default new SessionStorage();
