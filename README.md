# Redux Counter Example

Building a simple counter example to illustrate how Redux works.

![Redux Flow](http://i.imgur.com/Hi4RwU8.png)

## Prerequisites

* Node.js (http://nodejs.org/)
* Webpack and webpack-dev-server (https://webpack.github.io/)

Run `npm install` the first time you download the app in order to build the binaries for any node modules.

Webpack can be installed globally for convenience with `npm install -g webpack webpack-dev-server`.

## Development Tasks

| Command         | Description              |
|-----------------|--------------------------|
| `npm install`   | Fetch dependencies       |
| `npm start`     | Start development server |
| `npm run build` | Build all the things!    |

## Release Versions

Follow these steps to have your feature branch merged:

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata [are available](https://docs.npmjs.com/cli/version) as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
