# Assignment2
## Documentation
## Git Organization
`For my Git Repository I made 11 of commits. Each commit is realted to a file or folder that was either added or changed.`

## Data Structures
* The users are stored in an object on the Mongo Client and then called when the user logs in. That is the only functionality that the mongodb has.



## Angular Architecture
`Communication`
* On the front-end side the REST API is used to POST the url's when a user is logged in.
* On the back-end however the rest api is used to call the api-login route which allows users to login.

`Components`
* In the chat component, angular is used to store the logged in users messages, as well as display the chat messages between users. 

* In the login component, angular is used to grab the users log in username and password, run them against information in the database and if the input data is equal to a match it allows the user to be redirected to the chat page.

* In the profile component, angular is used to grab the users stored username, email and role, the page then allows the user to update there role and email.

* In the app component, angular is used for redirecting the users and for loging out which deletes the users stored messages and information.

## Interaction Details
`The server interacts with the client through the server.js. If the server.js and mongodb services aren't running then the user authentication would fail and the application wouldn't work without making major changes.`

`The only gobal variables that get "changed" is the PORT number on the server side, since we launch the app in 4200 where as the server itself get ran in port 3000. The reason for this is so that there aren't any issues running the server and client.`
