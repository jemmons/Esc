
exports.stringFromQueryIncludingPlus = (string) => {
  let decode = decodeURIComponent(string);
  return decode.replace('+', ' ');
};