import _ from 'lodash';
import moment from 'moment';

/**
 * @export
 * @param {*} value
 */
export function isEmpty(value) {
    return _.isEmpty(value) || _.isNull(value) || _.isUndefined(value);
}

/**
 *
 * @param number
 * @returns {boolean}
 */
export function isNumber(number) {
    try {
        let tmp = parseInt(number);
        return !Number.isNaN(tmp);
    } catch (e) {
        return false;
    }
}

/**
 *
 * @param list
 * @param chuckSize
 * @returns {*[]}
 */
export function chunkArray(list, chuckSize) {
    return Array(Math.ceil(list.length / chuckSize)).fill.map((_, i) => list.slice(i * chuckSize, i * chuckSize + chuckSize));
}

/**
 *
 * @param x
 * @param y
 * @returns {boolean}
 */
export function isArrayEqual(x, y) {
    return _.isEqual(x, y);
}

/**
 *
 * @param {array} x
 * @param {array} y
 */
export function changeArrayDiffernce(x, y) {
    return _.difference(x, y);
}

/**
 *
 * @param {array} x
 * @param {array} y
 */
export function findIndex(x, y) {
    return _.findIndex(x, y);
}

/**
 *
 * @param x
 * @returns {any}
 */
export function copyObject(x) {
    return JSON.parse(JSON.stringify(x));
}

/**
 *
 * @param start
 * @returns {string}
 */
export function momentDiff(start) {
    let startDate = moment(start);
    return startDate.fromNow();
}

export function formatMoment(date ,format) {
    return moment(date).format(format);
}