export const addressShortner = (address, shorter) => {
  if (shorter)
    return `${address.slice(0, 9)}***${address.slice(
      address.length - 7,
      address.length
    )}`;
  return `${address.slice(0, 12)}.....${address.slice(
    address.length - 10,
    address.length
  )}`;
};
