# RoomMe
![AppView](/public/readmeimages/app.png)
# Technologies:
### MERN stack, Mongoose, Websocket, Bootstrap, Konva, Axios, useImage, ANTD

## Websocket
Websocket was used to create an open connection between clients and the server.
RoomMes sends 3 'types' of data through the Websocket: 'message', 'trackingXy', 'canvasImageAdded'. The message type transmits messages in the chat component. The canvasImageAdded and trackingXy send json data that tracks the images added to the canvas and their current x,y coordinates.
## React-Konva
 Konva has easy to read documentation with codesandbox examples. Using Konva in react is as simple as Importing the `<Stage/>` and `<Layer/>` components, and an `<Image/>` componenet (with the help of the useImage npm package) for each image you want to use. Making the content draggable is as simple as adding the Konva 'draggable' attribute.
# Approach
Going into my capstone project, I knew I wanted to utilize React, websockets and a canvas to create a fullstack application with a lot of front end functionality. The idea for RoomMe was inspired by mother, who always love collaborating with her friends when updating a space in her home. 

That's why I started with building a 'room editor', a canvas that could populate with draggable images for determining the best design and layout of a space. 
I then began integragting the chat fucntion so decsions on the collaboratively built layout could be discussed between users. There are lots of resources available for building simple chat funcitons, so this was a great way to teach myself how websockets work through a 'learning-by-doing' mind set.

Taking what I learned from building in the chat functionality, I then got to work connecting the canvas to the websocket. IN short, I had to send JSON obects to the server, which emitted the data to every client connected to the websocket. The clients would then push these objects into React state to be renedered as components.

# React npm packages Installation
    npm install axios konva react-konva use-image websocket antd
# Express npm packages Installation
    npm install websocket

# User Stories and Flow
Users of RoomMe want to collaborate with their friends in real time when deciding how to layout a space, being able to modify the same canvas with furniture images and communicate with a live chat.

![UserStory](/public/readmeimages/userstories.png)
![UserFlow](/public/readmeimages/UserFlow.png)
# Wireframes
## Page Views
![Views](/public/readmeimages/views.png)
## Profile View
![Profile](/public/readmeimages/profile.png)
## Editor Flow
![Editor](/public/readmeimages/editordetail.png)
## Furniture Selector
![Selector](/public/readmeimages/furnitureselector.png)
## Database Schema
![ERD](/public/readmeimages/erd.png)


# Brainstorming and Pitching
Take a look at my brainstorming and pitch slides [here](https://docs.google.com/presentation/d/18c8FIw38Wia53BE8cwfThGHKApDHzKcIP_3rHmVCYTI/edit?usp=sharing)!

# More to Come
I'm very close to hammering down my primary Editor functionality. The last missing piece is modifying the state of canvasImages as the updated x,y coordinates come in from the websocket. I have this code written out and can see the websocket data come in to the console in real time, I just need to get it working.

Once the basic functionality is complete, I hope to create a Room Number functionality so that many users can edit it together in their own private rooms once the app is deployed. 

I also hope to add a friends functionality so users can easily invite their friends to join their editing sessions . Finally, I want all of these collaborators to be able to save these rooms and view their completed work later in their profile.