module.exports = function check(str, bracketsConfig) {
  let tempStr='';
  while (tempStr!=str) {
    tempStr=str;
    bracketsConfig.forEach(item=>str=str.split(item.join('')).join(''));
  }
  return str=='';
}

