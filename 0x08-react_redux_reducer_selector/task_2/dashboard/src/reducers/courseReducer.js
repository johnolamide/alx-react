import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map, List } from 'immutable';

const initialState = Map({
  courses: List([
    Map({ id: 1, name: 'ES6', isSelected:false, credit: 60 }),
    Map({ id: 2, name: 'Webpack', isSelected:false, credit: 20 }),
    Map({ id: 3, name: 'React', isSelected:false, credit: 40 }),
  ]),
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const updatedCourses = List(action.data).map((course) => Map({
        ...course,
        isSelected: false,
      }));
      return state.set('courses', updatedCourses);
    case SELECT_COURSE:
      return state.updateIn(['courses', action.index - 1, 'isSelected'], () => true);
    case UNSELECT_COURSE:
      return state.updateIn(['courses', action.index - 1, 'isSelected'], () => false);
    default:
      return state;
  }
};

export default courseReducer;