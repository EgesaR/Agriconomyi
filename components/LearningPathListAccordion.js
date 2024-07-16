import React, { useState } from "react";
import { List, Icon } from "react-native-paper";
import { PropTypes } from "prop-types";

const LearningPathListAccordion = ({ title, id, icon, listItem }) => {
  return (
    <List.Accordion
      title={title}
      id={id}
      left={(props) => <Icon source={icon} size={35.5} color={"#387ef3"} />}
    >
      {listItem.map((item, key) => (
        <List.Item
          title={item.title}
          left={(props) => <List.Icon {...props} icon="file" />}
        />
      ))}
    </List.Accordion>
  );
};

LearningPathListAccordion.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.element,
  listItem: PropTypes.element,
};
export default LearningPathListAccordion;
