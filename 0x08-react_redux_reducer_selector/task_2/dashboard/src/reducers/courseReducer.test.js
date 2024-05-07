import {
	FETCH_COURSE_SUCCESS,
	SELECT_COURSE,
	UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import courseReducer from "./courseReducer";

describe("courseReducer", () => {
	it("returns the default state when no action is passed", () => {
		expect(courseReducer(undefined, {})).toEqual([]);
	});

	it("returns the data passed when FETCH_COURSE_SUCCESS is passed", () => {
		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: [
				{ id: 1, name: "ES6", credit: 60 },
				{ id: 2, name: "Webpack", credit: 20 },
				{ id: 3, name: "React", credit: 40 },
			],
		};
		const expectedState = [
			{ id: 1, name: "ES6", isSelected: false, credit: 60 },
			{ id: 2, name: "Webpack", isSelected: false, credit: 20 },
			{ id: 3, name: "React", isSelected: false, credit: 40 },
		];
		expect(courseReducer(undefined, action)).toEqual(expectedState);
	});

	it("returns the data with the right item updated when SELECT_COURSE is passed", () => {
		const initialState = [
			{ id: 1, name: "ES6", isSelected: false, credit: 60 },
			{ id: 2, name: "Webpack", isSelected: false, credit: 20 },
			{ id: 3, name: "React", isSelected: false, credit: 40 },
		];
		const action = { type: SELECT_COURSE, index: 2 };
		const expectedState = [
			{ id: 1, name: "ES6", isSelected: false, credit: 60 },
			{ id: 2, name: "Webpack", isSelected: true, credit: 20 },
			{ id: 3, name: "React", isSelected: false, credit: 40 },
		];
		expect(courseReducer(initialState, action)).toEqual(expectedState);
	});

	it("returns the data with the right item updated when UNSELECT_COURSE is passed", () => {
		const initialState = [
			{ id: 1, name: "ES6", isSelected: false, credit: 60 },
			{ id: 2, name: "Webpack", isSelected: true, credit: 20 },
			{ id: 3, name: "React", isSelected: false, credit: 40 },
		];
		const action = { type: UNSELECT_COURSE, index: 2 };
		const expectedState = [
			{ id: 1, name: "ES6", isSelected: false, credit: 60 },
			{ id: 2, name: "Webpack", isSelected: false, credit: 20 },
			{ id: 3, name: "React", isSelected: false, credit: 40 },
		];
		expect(courseReducer(initialState, action)).toEqual(expectedState);
	});
});
