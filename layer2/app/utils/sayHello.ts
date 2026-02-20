export default (who?: Test) => {
  return `Hello ${who?.foo ?? "world"}`;
};
