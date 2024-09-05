// let row=document.getElementsByTagName("p");
// //   row[0].innerText="Hello";
// function addrow()
// {
//   alert("hello");
//   let row=document.getElementsByTagName("p");
//   row[0].innerHTML="Hello";
// }
// Step 1: Create a new paragraph element
let paragraph = document.createElement("p");

// Step 2: Set the text content of the paragraph
paragraph.textContent = "This is a dynamically added paragraph.";

// Step 3: Select the target <div> element
let div = document.getElementById("mydiv");

// Step 4: Append the paragraph to the <div>
div.append(paragraph);.
fv