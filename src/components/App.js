import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

/**
 * App Hierarchy
 * 
 * App
 * ├─── Header
 * └─── Shopping List
 *      ├─── Filter
 *      ├─── ItemForm
 *      ├─── Item
 *      ├─── Item
 *      ├─── Item
 * 
 */

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleNewItemSubmit(newItemList) {
    setItems(newItemList)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onNewItemSubmit={handleNewItemSubmit} />
    </div>
  );
}

export default App;
