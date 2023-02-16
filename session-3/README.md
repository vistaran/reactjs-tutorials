# Session 3 - Rendering in Reactjs 

## Conditional rendering

Conditional rendering is a technique that allows you to show or hide elements in the UI based on a condition. You can use conditional rendering to display different content to users based on their actions or the state of your application. There are several ways to do conditional rendering in React, but the most common approach is to use the ternary operator or the logical AND operator.

## List rendering

List rendering is a technique that allows you to render a list of items based on an array of data. You can use list rendering to display a dynamic list of elements, such as a list of blog posts, a collection of products, or a list of messages.

To render a list in React, you can use the `map()` method to loop through the array of data and generate a new array of elements to render.

## Lists and keys 

When rendering a list of items using the `map()` method, it's important to provide a unique identifier for each item. This unique identifier is called a `key`.
The key is used by React to keep track of which items have changed, been added or been removed from the list. When a new item is added or an item is removed, React will use the key to efficiently update the DOM by only adding or removing the changed elements.

## Index as key anti-patterns

Using the index as a key for list items in React is considered an anti-pattern because it can lead to performance issues and can cause unexpected behavior when the order of the list items changes.

To avoid these issues, it's best to use a unique identifier as the `key` for each list item, such as an ID or a name. This way, React can accurately track changes in the list and only re-render the elements that have actually changed. If the data source doesn't have a unique identifier, it is recommended to add one or generate one on the client-side.



