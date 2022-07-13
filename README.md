# LRP

My personal collection of shortcuts for most common actions during Liferay product development. I do this for fun and for messing around with [`Commander`](https://www.npmjs.com/package/commander), but it also allows me have to remember less stuff.

## Commands

### Build

`lrp build` executes the `ant all` command needed for building all modules of the portal. Used almost every day.

### Clean

`lrp clean` removes all files created in the local repository. Used when unexpected behaviours occur, rarely.

### Deploy

`lrp deploy` builds the module where executed. Used intensively 😅

- Use `-a` option to use a fast deploy without installing dependencies.
- Use `-w` option for watching for changes.

### Format

`lrp format` performs a formatter to the source code of the module where executed. Used often.

### Morning

`lrp morning` is a convenience group of commands executed almost daily. It stops the portal, if running, updates the code, restores the SQL database and run the portal again. Used daily.

### PR

`lrp pr` is an abstraction above [Github CLI](https://cli.github.com/) pull request command. It allows to get or send pull request from and to any fork of the Liferay Portal.

- `lrp pr get liferay-tango 2222` where _liferay-tango_ is the name of the repo where the pr is, and _2222_ is the id of the pr.
- `lrp pr post liferay-tango` will place a new pr in the mentioned repo

### Restore SQL

`lrp restore-sql` deletes and creates a new sql database for the portal with the default configs. Used daily.

### Start

`lrp start` runs the tomcat server and starts the Liferay Portal. Used intensively 😅

### Stop

`lrp stop` stops the tomcat server and kills the process. Used intensively 😅

### Update repo

`lrp update-repo` checkouts to master branch, fetches from upstream/master and pushes to origin/master. Used daily.

## Configuration

Do you want to use this commands in you local environment?

- Clone this repo
- Install dependencies: `yarn` or `npm i`
- Under `./config.js`
  - add your path to the Liferay Portal main folder in `portalPath` var
  - modify the Tomcat version, if needed, in `tomcatVersion` var
- Reload the terminal session and run `lrp -V` or `lrp -h` to verify everything is OK.
