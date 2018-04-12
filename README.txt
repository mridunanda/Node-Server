The solution assumes user has mongodb installed.
1. If you used the default mongodb installation settings, run "mongod" at system prompt
	- More on this at: https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/

2. Install the express, and mongoose modules by running the following command:
	- "npm install express --save"
	- "npm install mongoose --save"

3. Start node.js server by running "node app.js"

4. Run "bash simulate.sh"
	- This will simulate the Raspberry Pi
	- The simulation runs once betweeen every 1-10 second intervals
	- The simulation randomly generates a unit_id number, and temperature each time it runs
	- The simulation also sends the timestamp of when it was run (accurate to milliseconds)

5. In order to view data stored in database, run "./bin/mongo" in the monogodb installation directory
	- type "use tagup" to use the correct database
	- Run command "db.datainputs.find()" to view stored data entries
	- Run command "db.datainputs.remove({})" to remove all data entries