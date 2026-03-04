I started by setting up a basic Node.js project as instructed with the commands: 

git init 

npm init -y

Then I installed Winston with the command:
npm install --save winston@3.11.0

Then I created the src directory, where I created two files: main.js and logger.js.
I copied the logger configuration from the instructions and placed it into the logger.js file.
Then I copied the instructed codes for main.js into my main.js file.

To test everything, I ran the command:
node src/main.js

After running the program, I checked the console, and saw the info, warn and error messages printed with timestamps.

Then I checked the program-created logs directory. Two files had been added: combined.log and error.log.
Combined.log contained all the messages, while error.log contained only the error-messages.
This meant that everything worked as intended.

I also accidentally added the logs directory to the repository and for some reason I can't delete it so sorry about that.
