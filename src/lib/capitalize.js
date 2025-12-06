export const capitalize = (str) => {
  const trimmedStr = str.trim();
  const strArray = trimmedStr.split(" ");
  if (strArray.length > 1) {
    strArray.forEach((word, index) => {
      strArray[index] = `${word.charAt(0).toUpperCase()}${word
        .slice(1)
        .toLowerCase()}`;
    });
    return strArray.join(" ");
  }
  return `${trimmedStr.charAt(0).toUpperCase()}${trimmedStr
    .slice(1)
    .toLowerCase()}`;
};
