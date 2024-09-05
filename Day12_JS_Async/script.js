// console.log("start");

// function temp()
// {
// console.log("temp");
// }

// temp();

// function handleClick()
// {
//   for(let i=0;i<100;i++)
//   {
//     for (let j=0;j<100;j++)
//       console.log("...");
//   }
//   document.getElementById("display").innerText="Done";
// }



// console.log("end");


// arr = [12,2,2,2,2,2];

// arr.forEach((element,index) => {
//   console.log(element);
  
// });


// const url="https://api.github.com/users/abhishekkes";
// const options= {};
// const pr=fetch(url);
// pr.then(successCB).catch(errorCB);

// function successCB(res)
// {
//   console.log("Success");
// }

// function errorCB(res)
// {
//   console.log("Error");
// }


// HTML structure to display images
const userContainer = document.getElementById('user-container');
const uname=""
async function fetchdata() {
 const params=document.getElementById('txt').value; 
  const pr=await fetch('https://api.github.com/users?per_page='+params);
  const users=await pr.json();  
   users.forEach(user =>{
    console.log(user);
    const img = document.createElement('img');
   
    img.src = user.avatar_url;
    img.alt = user.login;
      
    userContainer.appendChild(img);
    
});

} 




        


// fetch('https://api.github.com/users?per_page=30')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();  // Convert response to JSON
//   })
//   .then(users => {
//     users.forEach(user => {
//       // Create an image element
//       const img = document.createElement('img');
//       img.src = user.avatar_url;  // Set the src attribute to the user's avatar URL
//       img.alt = user.login;  // Set the alt attribute to the user's login

//       // Append image to the container
//       userContainer.appendChild(img);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching GitHub users:', error);  // Handle any errors
//   });
