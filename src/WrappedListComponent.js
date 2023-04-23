import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types"; 

//single List Item
const WrappedSingleListItem = ({ 
  
  index, 
  isSelected, 
  onClickHandler, 
  text 
}) => (
  <li
    style={{ backgroundColor: isSelected ? "green" : "red" }}
    onClick={() => onClickHandler(index)}
  >
    {text}
  </li>
);


WrappedSingleListItem.propTypes = {

  index: PropTypes.number.isRequired,

  isSelected: PropTypes.bool.isRequired,

  onClickHandler: PropTypes.func.isRequired,

  text: PropTypes.string.isRequired,
};

const singleListItem = memo(WrappedSingleListItem);

//List Component

const WrappedListComponent = ({
   items 
  }) => {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {

    setSelectedIndex(-1);

  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items && items.map((item, index) => (
          <singleListItem
            key={index}
            onClickHandler={() => handleClick(index)}
            text={item.text}
            index={index}
            isSelected={selectedIndex === index}
          />

        ))}

    </ul>

  );

};

WrappedListComponent.propTypes = {

  items: PropTypes.arrayOf(
    
    PropTypes.shape({
      
      text: PropTypes.string.isRequired,

    })

  ).isRequired,

};

WrappedListComponent.defaultProps = { 
  items: [], 
};

const List = memo(WrappedListComponent);

export default List;
