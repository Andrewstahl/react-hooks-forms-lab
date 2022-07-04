import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onNewItemSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleNameChange(event) {
    setSelectedName(event.target.value)
  }

  function handleNewItemSubmit(newItem) {
  
    const newItemList = [{
      ...items,
      newItem
    }]

    onNewItemSubmit(newItemList)
  }

  const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      
      return item.category === selectedCategory;
    })
    .filter((item) => item.name.includes(selectedName))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItemSubmit}/>
      <Filter 
        search={selectedName}
        filter={selectedCategory}
        onSearchChange={handleNameChange} 
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
