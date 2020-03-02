Where to begin (for test environment):
1) Install node js (https://nodejs.org/en/)
2) Move over front and backend folders to local machine
3) Navigate to backend using commpand prompt. You should see "package.json" and in that directory type a new command 
"npm install" and hit enter. This will create "node_modules" directory containing all required dependencies.
4) When that is finished... type new command "node app.js" to launch backend at localhost:4000.
5) In a separate command prompt session, navigate to front end directory. You should see "package.json" and in that 
directory type a new command "npm install" and hit enter. This will create "node_modules" directory containing all 
required dependencies.
6) In same front end directory... type new command "npm start" which will launch front end at localhost:3000.
7) All finished


What this application does and thought process:
Executes a powershell script at an end point (can add more powershell script) which returns a json data structure.
This structure is fetched by the front end which allows us to visualize that data dynamically and export that data using
the table at the bottom of the web page. I though this may be easier than using a script to generate an html file since it
won't be nearly as easy to work with and the parent web page would just be a button. However, I've tested for it and can make
something simple as that.


How this application will work:
Will have a front end written with the react framework that will call a rest API in a node js backend. This application can
live in a windows VM with the IIS web sever. I can help set that up for you.


For production:
Front end will need to be compiled to reduce bloat down to about 1 mb. And a reverse proxy will need to be set up in
windows IIS for node js backend to work. I can help set this up for you and create config files for the front end so
you can change things in your front end without needing to recompile the front end everytime you need a change.


Creating a custom icon for web page:
You can replace the icon in the "public" directory in the front end if you would like a unique icon for your web page.


frontend packages:
    1) react material ui (https://material-ui.com/) for ui
    2) react-spinners (https://www.react-spinners.com/) for loading animation
    3) react-vis (http://uber.github.io/react-vis/) for pie and bar graphs
    4) material-table (https://material-table.com/#/) for interactive table

backend packages:
    1) express (https://expressjs.com/) for node js rest API implementation
    2) node-powershell (https://rannn505.github.io/node-powershell/) for executing powershell scripts