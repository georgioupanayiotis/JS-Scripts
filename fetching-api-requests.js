//One addition of ES6 that goes like bread and butter with Promises is Fetch API. 
//fetch() takes path as its first argument and it returns a Promise that resolves the response.
//simple GET request on Random User API and we will get 10 users.
  
fetch('https://randomuser.me/api/?results=10') // Call the fetch function passing the url of the API as a parameter
  .then(res => res.json()) // Transform the data into json
  .then((data) =>{
      let authors = data.results;
      return authors.map((author) =>{
        console.log('author', author)
    })
  })
.catch((error) => {
  console.log(JSON.stringify(error));
});  
