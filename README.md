# Redux Counter Example

Building a simple counter example to illustrate how Redux works.

![Redux Flow](http://i.imgur.com/ep8N1Ft.png)

We know that React is just for views (often referred to as the `V` in `MVC`). The obvious question then is, where do I put all my state and logic?

You may already be aware of [Flux](https://facebook.github.io/flux/), which is a style / pattern / architecture for designing web applications, most commonly ones that use React for rendering. There are several frameworks out there that implement the ideas of Flux, one of them being [Redux](http://redux.js.org/).

Here's a very brief description of how Redux works:

1. **Components** are given callback functions as props, which they call when a **UI event** happens.
2. Those callbacks **create and dispatch actions** based on the event.
3. **Reducers** process the actions, computing the new state.
4. The new **state** of the whole application goes into a single **store**.
5. **Components** receive the new state as props and **re-render themselves where needed**.

Most of the above concepts are not unique to Redux, but Redux implements them in a very clean and simple way, with a [tiny API](http://redux.js.org/docs/api/index.html).

![Redux Flow](http://i.imgur.com/QIfunUw.png)

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
