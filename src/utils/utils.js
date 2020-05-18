/**
 * 是否为数组且数组长度>0
 * @param {*} arr
 */
const isArray = arr => {
  const s = arr && arr instanceof Array && arr['length'];
  console.log(s);
  return arr && arr instanceof Array && arr['length'];
};

export {isArray}
