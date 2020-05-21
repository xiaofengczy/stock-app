import qs from 'qs';
/**
 * 是否为数组且数组长度>0
 * @param {*} arr
 */
const isArray = arr => {
  const s = arr && arr instanceof Array && arr['length'];
  console.log(s);
  return arr && arr instanceof Array && arr['length'];
};

const qsString = params => {
  if (!isObject(params)) return '';

  return qs.stringify(params);
};

/**
 * qsParse
 * @param {*} params
 */
const qsParse = params => {
  let search = '';
  if (isString(params)) {
    search = params;
  } else if (isObject(params) && params['search']) {
    search = params['search'];
  } else if (isObject(params) && isObject(params['location'])) {
    search = params['location']['search'] || '';
  } else {
    search = '';
  }

  return qs.parse(search, { ignoreQueryPrefix: true });
};

/**
 * 是否为字符串 且不为空
 * @param {*} obj
 */
const isString = str => {
  return str && typeof str === 'string';
};


/**
 * 是否为对象 且不为空
 * @param {*} obj
 */
const isObject = obj => {
  return obj && obj instanceof Object && !(obj instanceof Array) && Object.keys(obj).length;
};

export {isArray,qsString}
