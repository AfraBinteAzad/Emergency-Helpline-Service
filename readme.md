1. getElementById will get the element by its unique ID. getElementsByClassName will get all the elements by the class name. querySelector will get the first element that matches the selector. querySelectorAll will get all the elements that matches with the selector.
2. First we create an element using createElement(), then we can add text using innerText or add other elements using innerHTML. Finally we use appendChild() the new element.
3. Event Bubbling means when access an element it goes in an upward hiearchy meaning from child to parent to page.
4. Event Delegation means you add event listener to the parent element and access child elements through it. You dont need to add multiple event listener on the child elements.  It makes the coding process more efficient and less lengthy.
5. preventDefault() stops the browser's default action. For example you click a button and it automatically reloads the page but you dont want that. stopPropagation() stops event bubbling. 
