import { Map } from "immutable";

function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
