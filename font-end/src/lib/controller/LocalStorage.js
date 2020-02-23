import _ from 'lodash';
/**
 * @class
 */
class LocalStorage {
    constructor() {
        this.windowStorage = window.localStorage;
    }

    /**
     * Gets the item from local storage
     * @param {string} key
     * @returns {*} value from local storage
     */
    getItem(key) {
        const val = this.windowStorage.getItem(key);
        if (!_.isUndefined(val)) {
            return val;
        }
        return JSON.parse(val);
    }

    /**
     *
     * @param {string} key
     * @param {*} value
     * @return {string}
     * @memberof LocalStorage
     */
    setItem(key, value) {
        const valToStore = _.isString(value) ? value : JSON.stringify(value);
        if (!_.isEmpty(valToStore)) {
            return this.windowStorage.setItem(key, valToStore);
        } else {
            console.log('Cannot set item in LocalStorage with empty value');
        }
    }

    /**
     * Xóa phần tử khỏi localStorage
     * @param {string} key
     * @returns {string}
     */
    removeItem(key) {
        return this.windowStorage.removeItem(key);
    }

    clear() {
        return this.windowStorage.clear();
    }
}

export default new LocalStorage();
