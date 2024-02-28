import { unSelectCourse } from "./courseActionCreators";
import { UNSELECT_COURSE } from "./courseActionTypes";

describe('unSelectCourse action creator', () => {
  it('should create an action with type UNSELECT_COURSE and index 1', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      payload: index,
    };
    const action = unSelectCourse(index);
    expectedAction(action).toEqual(expectedAction);
  });
});