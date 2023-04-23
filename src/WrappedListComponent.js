import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

//single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => (
  <li
    style={{ backgroundColor: isSelected ? "green" : "red" }}
    onClick={() => onClickHandler(index)}
  >
    {text}
  </li>
);

WrappedSingleListItem.propTypes = {
  //Added isrequired here
  index: PropTypes.number.isRequired,
  //Added isrequired here
  isSelected: PropTypes.bool.isRequired,

  onClickHandler: PropTypes.func.isRequired,

  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

//List Component
const WrappedListComponent = ({ items }) => {
  //change selectedIndex, setSelectedIndex position 
  //give -1 value to useState
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    //give -1 value to setSelectedIndex
    setSelectedIndex(-1);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {/*added items && items.map */}
      {items && items.map((item, index) => (
          <SingleListItem
            // added key
            key={index}
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            //added equality operator
            isSelected={selectedIndex === index}
          />
        ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    //remove shapeOf to shape 
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
    //added isrequired to propTypes.arrayOf()
  ).isRequired,
};

WrappedListComponent.defaultProps = {
  //Assign value to items to a empty array
  items: [],
};

const List = memo(WrappedListComponent);

export default List;
