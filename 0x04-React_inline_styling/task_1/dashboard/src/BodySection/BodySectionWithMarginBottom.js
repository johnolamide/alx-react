import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";

const styles = StyleSheet.create({
  bodySectionMargin: {
    marginBottom: '40px',
  }
});

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionMargin)}>
        <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;