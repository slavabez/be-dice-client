# BE-Dice

## Links
Current site: [https://be-dice.com](https://be-dice.com)
Backend part: [https://github.com/slavabez/be-dice-server](https://github.com/slavabez/be-dice-server)
Docker build: [https://cloud.docker.com/repository/docker/slavalab/be-dice-client/builds](https://cloud.docker.com/repository/docker/slavalab/be-dice-client/builds)


## About
This project is what the end user sees, the React app (bootstrapped using Create React App) part of [BE-Dice](https://be-dice.com), a platform for rolling dice with your friends without registration, accounts and all that jazz.

Initially the project was made in 48 hours for the Node Knockout 2018 hackathon, which was great fun.

This purpose of this project was to create an app from ground up to practice good development practices, continious deployment, testing, docker and other workflows.


## Stack
This is the front end part, the part the end user sees. It was bootstrapped using Facebook's Create React App and uses Socket.io to communicate to the back-end.

List of technologies/libraries used:

* React@16.6.3 as of writing this
* socket.io-client@2.2.0
* Styled components@4.1.3
* React easy state@6.0.6


## Git Branches
* master - the main development branch. Considered unstable
* production - the main release branch. Considered stable and ready for use. Has to have CI tests pass.


## Docker images
Docker Hub automatically creates images from this repository. Pushes to the master branch create a new docker image tagged 'dev', and pushes to the production branch create an image tagged 'latest'

