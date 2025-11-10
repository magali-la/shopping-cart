let shoppingList = [];

// function to add item into the array
function addItem(item) {
    if (!shoppingList.includes(item)){
        shoppingList.push(item);
    }
};

// function to remove item from the array
function removeItem() {
    shoppingList.pop();
}

// function to show all the items in the shopping array in console
function displayList() {
    console.log(shoppingList);
}

// function to create new filtered array from a term parameter
function filterItems(searchTerm) {
    let filteredShoppingList = shoppingList.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));

    return filteredShoppingList;
}

shoppingList = ['vaSE', 'RUG', 'rugS']
let search = 'rug';
console.log(filterItems(search));