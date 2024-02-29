import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { bindActionCreators } from '@reduxjs/toolkit';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: index,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      selectCourse,
      unSelectCourse
    },
    dispatch
  );
};