
exports.decodeQueryIncludingPlus = (string) => {
  let decode = decodeURIComponent(string);
  return decode.replace('+', ' ');
};