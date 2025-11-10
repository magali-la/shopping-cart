window.addEventListener("load", () => {
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

    // shoppingList = ['vaSE', 'RUG', 'rugS']
    // let search = 'rug';
    // console.log(filterItems(search));

    // event listeners to add to the button and list
    let inputEl = document.querySelector('#inputField');
    let addItemButton = document.querySelector('#addItemButton');
    let listEl = document.querySelector('#cart')
    let removeItemButton = document.querySelector('#removeItemButton');
    
    // add event listener to the addItem button, check if the input value is not an empty string, then use addItem function
    addItemButton.addEventListener("click", function(){
        let userInput = inputEl.value;
        console.log(userInput);

        if (userInput !== ''){
            addItem(userInput);
            displayList(shoppingList);
            // create an li with the userInput
            let listItemEl = document.createElement("li");
            // add bootstrap list item class to the li so it displays as a tabled list
            listItemEl.classList.add('list-group-item')
            // add the term as innertext of the listItemEl
            listItemEl.innerText = userInput;
            // update child of ul to include the current shopping list state
            listEl.appendChild(listItemEl);
            // clear the input for the next search
            inputEl.value = '';
        } else {
            alert("Input required to add to cart!")
            return console.log('No input!')
        }
    });

    // add event listener to remove the last element in the array 
    removeItemButton.addEventListener("click", function(){
        // alert if the shopping list is empty
        if (shoppingList.length == 0){
            alert("Cart Empty. Nothing to remove!");
            return console.log("Empty cart!")
        }
        
        // get rid of the last element
        shoppingList.pop();
        displayList(shoppingList);
        // define the last element
        let lastElement = listEl.lastElementChild
        // remove the last li added
        listEl.removeChild(lastElement);
        
    });
});