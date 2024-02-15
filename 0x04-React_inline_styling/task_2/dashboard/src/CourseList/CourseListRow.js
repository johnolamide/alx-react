import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
	headerRowStyle: {
		backgroundColor: "#deb5b545",
  },
  headerColSpan2: {
    borderBottom: "0.1rem solid grey",
  },
	headerColSpanNot2: {
		textAlign: "left",
		borderBottom: "0.1rem solid grey",
	},
	rowStyle: {
		backgroundColor: "#f5f5f5ab",
	},
});

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
  const style = isHeader ? styles.headerRowStyle : styles.rowStyle;

  if (isHeader) {
    if (textSecondCell === null) {
      return (
			<tr className={css(style)}>
				<th className={css(styles.headerColSpan2)} colSpan="2">
					{textFirstCell}
				</th>
			</tr>
		);
    } else {
      return (
			<tr className={css(style)}>
				<th className={css(styles.headerColSpanNot2)}>{textFirstCell}</th>
				<th className={css(styles.headerColSpanNot2)}>{textSecondCell}</th>
			</tr>
		);
    }
  } else {
    return (
      <tr style={style}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CourseListRow;