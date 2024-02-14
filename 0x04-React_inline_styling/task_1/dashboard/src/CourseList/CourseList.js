import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

const styles = StyleSheet.create({
  root: {
    '--border-color': 'grey',
  },
  courseList: {
    width: '100%',
    border: '0.1rem solid var(--border-color)',
  },
});

const CourseList = ({ listCourses = [] }) => {
  return (
    <table id='CourseList' className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses"/>
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"/>
      </thead>
      <tbody>
        {listCourses.length === 0
          ? (
            <CourseListRow isHeader={false} textFirstCell="No course available yet" />
          )
          : (
            listCourses.map((course) => (
              <CourseListRow key={course.id} isHeader={false}
                textFirstCell={course.name} textSecondCell={String(course.credit)} />
            ))
          )
        }
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;
