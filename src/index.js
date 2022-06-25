module.exports = function check(str, bracketsConfig) {
  tempStr='';
  while (tempStr!=str) {
    tempStr=str;
    bracketsConfig.forEach(item=>str=str.replaceAll(item.join(''),''));
  }
  return str=='';
}

