# BE-Dice Client

[![CircleCI](https://circleci.com/gh/slavabez/be-dice-client.svg?style=svg)](https://circleci.com/gh/slavabez/be-dice-client) [![codecov](https://codecov.io/gh/slavabez/be-dice-client/branch/master/graph/badge.svg)](https://codecov.io/gh/slavabez/be-dice-client) ![Docker Pulls](https://img.shields.io/docker/pulls/slavalab/be-dice-client.svg) ![Uptime Robot ratio (7 days)](https://img.shields.io/uptimerobot/ratio/7/m782314556-912064c9f6e97db092d5080b.svg)

## Links

Production site (branch production): [https://be-dice.com](https://be-dice.com)

Dev site (branch master): [https://test.be-dice.com](https://test.be-dice.com)

Back-end repo: [https://github.com/slavabez/be-dice-server](https://github.com/slavabez/be-dice-server)

Docker builds: [https://cloud.docker.com/repository/docker/slavalab/be-dice-client/builds](https://cloud.docker.com/repository/docker/slavalab/be-dice-client/builds)

## About

This project is what the end user sees, the React app (bootstrapped using Create React App) part of [BE-Dice](https://be-dice.com), a platform for rolling dice with your friends without registration, accounts and all that jazz. The back-end is intentionally separate from the client to allow for various client platforms (I'm planning a Flutter android app as well)

Initially the project was made in 48 hours for the Node Knockout 2018 hackathon, which was great fun.

This purpose of this project was to create an app from ground up to practice good development practices, continuous deployment, testing, docker and other workflows. Since React Hooks came out it's a good way for me to practice Hooks, as well as managing global state with useReducer and useContext.

Project is under MIT Licence, so do whatever you want with the code.

## Stack

This is the front end part, the part the end user sees. It was bootstrapped using Facebook's Create React App and uses Socket.io to communicate to the back-end.

List of technologies/libraries used:

- React@16.8
  - Hoooooooks!!!
  - useContext and useReducer hooks for global state management
  - useState and useEffect for component state and component lifecycle
- socket.io-client
- Styled components

## Git Branches

- master - the main development branch. Considered unstable
- production - the main release branch. Considered stable and ready for use. Has to have CI tests pass before merging

## Docker images

Docker Hub automatically creates images from this repository. Pushes to the master branch create a new docker image tagged 'dev', and pushes to the production branch create an image tagged 'latest'
