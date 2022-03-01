# demo-server
Simple backend server for demo purposes
  
## To run:
  #### node server.js
  
  

## To query:
  #### curl -d 'username='fakeuser1'' http://<area>localhost:3000/get-application-status
 
### View different results
  ##### Current applicants -> [fakeuser1, fakeuser2, fakeuser3]
  ##### Replace fakeuser1 with any current applicant



### FAQ
  #### What is JSON?
  ##### Javascript object notion. Often times we will want to create objects in javacsript, JSON is a format used to represent those objects. Objects are constructed using key value pairs. Noted as being 'self-described'
  
  #### What is Express?
  ##### Express is a lightweight application server framework. In short it can be used to create REST api and act as a 'web server' in order to handle incoming requests for the rest api routes.
      express.json() - Specifies that the application will only process requests where the content-type in the header is set to application/json.
                       This middlewear will create the .body object found on the request sent from the user. Important for handling post and put requests,
                       less so for when get requests are used where the server will dictate the format.
                       
      express.urlencoded() - Specifies that the application will process objects and array in a similar way to express.json()
      
      Middlewear - Utility functions that act on the req object before it is passed to a terminating function. There can be many peices of middlewear in between when
                   a request is recieved and when a request actually terminates. When building middlewear functions, using the next() function will allow the request to be 
                   sent to the next piece of middlewear.
                   
      app.get/post/delete/put - Specifies the type of http request associated with that functionality / route
                                app.get('/', callback) specifies what to do when the api gets a GET request, similarly
                                app.post('/', callback) can be used to specify what to do when the api gets a POST request
                                
      res (response) vs req (request) - The request is the object that is coming from the user, while the response is what will be used to return to the user. 
                                        res can be used to send back data or just a confirmation or error code. When you get a 404 error. Thats the server responding with an error
                                        code. While req will contain data that might be sent is a post request, or the type of information the user is looking for in a GET request.
                                        
      app.listen() - Creates an http server on a specifed port that will listen for the requests being sent to the api
