# Note APP Using Node.js (Console App)

This is a note application with CRUD operation build using [Node.js](https://nodejs.org/). [Yargs](https://www.npmjs.com/package/yargs) have been used to build interactive command line tools. And [Chalk](https://www.npmjs.com/package/chalk) have been used to give beautiful terminal experience.

## Getting Started
This insturctions will get the project up and running on your local machine for developing and testing purposes.

#### Prerequisites
Make sure that you have node installed before attempting to run this application.

```
node --version
```

#### Installing the dependencies
Download Yargs, Chalk and its sub dependencies. The packages that are used in this projects are specified in `package.json`. Now go to the project folder and install the dependencies by running:

```
npm install
```

OR

```
yarn
```

#### Run the application in local machine.
Now, the application is ready to run.
You can get help on how to use the application by using `node app.js --help` command.

<hr />


###For examples:
* To add note:
```
node app.js add --title="Bucket List" --body="CSM, CSPO certification"
```

* To list notes:
```
node app.js list
```

* To read single note:
```
node app.js read --title="Bucket List"
```

* To remove note:
```
node app.js remove --title="Bucket List"
```