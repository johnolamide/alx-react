import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: index,
  };
};

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: index,
  };
};

export { selectCourse, unSelectCourse };