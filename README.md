# Front-end challenge
Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation.

## Functional requirements
- User can list expenses
- User can add a comment on an expense
- User can filter on expenses (client side filters)
- User can add a receipt image on an expense

## General requirements
A single page application using a modern JS library/framework including:
- A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- CSS can be written using PostCSS, SASS, LESS or similar higher-level language
- The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?

## Nice to have
Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).
- Responsive design
- Implement with a state management library (Redux, Mobx, VueX, ...)
- Implement solution in TypeScript
- Localization: support for multiple languages (English, French, ...)

## What we're looking for
- Using high-quality existing libraries or small amounts of custom code. 
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

## A few last things 👇
 - Please note that while you are free to use libraries of your choosing, we encourage you to write at least some your own code. This is your chance to really impress us with your skills.
- You are welcome to make changes to the API code if you think it will improve your solution

### Post-Mortem

This has been a fun challenge, and I must now put it to an end. <br/>

#### How to start the project

 - run `npm install` from `./client-pleo-expenses`
 - run `npm start` from `./client-pleo-expenses`
 
 <b>Note : </b> It is suggested to start the API beforehand in another window using those commands, but from the `./api` folder.

#### Implemented features
 - user can list some expenses, limited to 25 for now. <br/> 
   (I believe there are some libraries out there that handle progressive loading better than I do.)
   
 - user can filter the expenses through client-side filters (very proud of this one!)
 
 - user can add a comment to an expense (the API is kept posted about that, too!)
 
 - user can add a (random) picture to an expense (the API is kind of in-the-dark with this one)
 
 - user can visualize an added picture (bigger size) in a modal window by clicking on the picture

#### Notes
 - I have learned a lot about Javascript, Typescript, React and more during this challenge, <br/>
and I am truly impressed by the power and versatility of that ecosystem.<br />

 - Considering the time (~25h) and effort put into this challenge, I believe that this is a very good start <br/>
   and I would love to see actual, production-grade code using these tools.
  
 - I am proud of what I accomplished, but I am also very aware that it is not the most efficient, <br/>
   TS-savvy frontend code written in history.
   
 - My lack of generic knowledge about JS & TS frameworks definitely hindered my productivity.
 
 - My google operational research skills definitely favored my performance, though! <br/>
   (Look for comments scattered across the code, saying `strongly inspired from X` and the like.)
 
 

