#  STEELEYE LIMITED FRONTEND ENGINEER ASSIGNMENT

Dear Sir /Mam here below is the complete solutions of the frontend assignment:

# Q1. Explain what the simple List component does?

The List component does the following :- 
- It receives an array of objects named 'items' as props 
  and each object in the item array is required to have a 
  parameter name “text” of type string .

- It iterates through the 'items' array of objects using 
  map and renders a new component named 'SingleListItem' 
  for each object in the array and passes  the value of 
  onClickHandler, text, index, isSelected as props.

- Value of the index is unique for each SingleListItem 
  component so that it can be identified when clicked by 
  the user, the value of selectedIndex is set to null in 
  the beginning and changes to the respective index value 
  of list item on clicking with the help of 
  onClickHandler.

- The isSelected props is responsible for changing the 
  background color of the list items, to highlight the 
  selected list item by the user, isSelected true means 
  green otherwise red, it means all the list item will 
  have default red background before user interaction.

- The 'WrappedSingleListItem' is a memoized functional 
  component that is meant to render only when the value of 
  the isSelected props changes, this means that if the 
  user double clicks the list item the component will not 
  re-render.

- The 'WrappedListComponent' generates a list of items by 
  using the 'WrappedSingleListItem'
  Component which is also a memoized functional component.

## Q2. What problems/warnings are there with code? ##

*In WrappedSingleList Item, the onClickHandler props is called wrongly, it should be called as a callback to be called when the list item is clicked.

* In WrappedSingleListItem proptypes index and isSelected is not assigned as required, all though it's not a problem but as these two parameter are crucial for proper functioning of code so it's good if we add a required flag on them so that programmer don’t miss to pass them.

* The value of selectedIndex is assigned to “null” which is not correct as it's an integer and should be assigned with a numeric value like -1 in the beginning, which will reflect that nothing is selected.

* In WrappedListComponent useState is not used correctly, variable name comes first then function name.

* In WrappedListComponent useState hook is not used up to the potential, it should be used to initialize the value of selectedIndex with -1, so that no list item appears selected in the beginning .

*  There is also a logical error, as we are passing the value of isSelected as selectedIndex, which is always going to be true whenever selectedIndex is not equal to zero.

* There is a syntax error in defining WrappedListComponent proptypes.

* Value of the unique key is not defined as prop for each child value in the map function.


## Q3. Please fix, optimize, and/or modify the component as much as you think is necessary ? ##


### CODE ###

```
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



```

**Name** : Eshika Rawat <br/>
**Reg No**. : 12010469 <br/>
**Course** : Btech (CSE) <br/>
**Email id** : eshikarawat02@gmail.com <br/>
**Mobile No.** : 9151420781 <br/>