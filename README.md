My thoughts coming into this project were to first build the layout of the webpage and focus on the game engine.
My main reason for doing so was because my knowledge implementing the backend was slim to none.
After building most of the layout I thought of going with a click event and build functions and if statements around the click event.
I tied the click event to each square on the gameboard and used the dataid's to insert those values into an empty array

adding more details to the process later, forgot to document my thought process during the building and I'm trying to remember it all...

The main problems I ran into while building the game engine was the syntax. I was able to figure out most of the logic for the game(I did look at some examples online to fill the gaps), but knowing how to properly write the code for the game engine was the most challenging part. I think the problem stems from my weak understanding of scope, functions and lack of experience. A LOT of the code was written with if statements which could've easily been shortened with functions, callbacks and array iterations, but again my knowledge on these are really weak.

Some other minor issues were events not working as expected, but I'm pretty sure a lot of those problems could've been solved with using functions instead of typing out each line.

In terms of solving these issues, it was mostly done by just playing around with atom. Some parts I understood why and most of it I didn't; I was just glad it even worked at all.

When working on the game api, I realized I made a huge mistake. I didn't organize my code as well as I should have(mostly due to my lack of understanding the different funcationalities of each code) and hit a wall when trying to implement the game api. The other mistake I made was overlapping the game api and game engine funcationalities. I mininterpreted the requirements of the project and used conditionals instead of Ajax to create, and update the boardgame. I tried to look into manipulating the game engine and api, but struggled to do so because there were some lines of code which I didn't understand.  
