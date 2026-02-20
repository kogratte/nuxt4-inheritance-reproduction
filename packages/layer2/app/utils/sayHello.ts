import type { Test } from "layer1/shared/types";

export default (who?: Test) => {
  return `Hello ${who?.foo ?? "world"}`;
};
