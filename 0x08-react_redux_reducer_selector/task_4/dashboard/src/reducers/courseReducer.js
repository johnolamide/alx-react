import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: []
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.mergeDeep(coursesNormalizer(action.data).entities.courses);
    case SELECT_COURSE:
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index.toString(), 'isSelected'], action.type === SELECT_COURSE);
    default:
      return state;
  };
};

export default courseReducer;