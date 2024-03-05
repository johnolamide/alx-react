import { Map, List } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import courseReducer from './courseReducer';

describe('courseReducer', () => {
  const initialState = Map({
    courses: List([
      Map({ id: 1, name: 'ES6', isSelected: false, credit: 60 }),
      Map({ id: 2, name: 'Webpack', isSelected: false, credit: 20 }),
      Map({ id: 3, name: 'React', isSelected: false, credit: 40 }),
    ]),
  });
  it('should return the initial state when no action is passed', () => {
    expect(courseReducer(initialState, {})).toEqual(initialState);
  });
  it('should correctly update courses when FETCH_COURSE_SUCCESS action is passed', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const fetchAction = { type: FETCH_COURSE_SUCCESS, data };
    const expectedState = initialState.set('courses', List(data).map(course => Map({ ...course, isSelected: false })));
    expect(courseReducer(initialState, fetchAction)).toEqual(expectedState);
  });
  it('should correctly update isSelected when SELECT_COURSE action is passed', () => {
    const selectAction = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialState.updateIn(['courses', 1, isSelected], () => true);
    expect(courseReducer(initialState, selectAction)).toEqual(expectedState);
  });
  it('should correctly update isSelected when UNSELECT_COURSE action is passed', () => {
    const unselectAction = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialState.updateIn(['courses', 1, 'isSelected'], () => false);
    expect(courseReducer(initialState, unselectAction)).toEqual(expectedState);
  });
});