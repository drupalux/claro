# Clone of the 'seven' theme

## Pre-requisites
Before starting, ensure that you are using at least the latest LTS release of Node.js, once Node.js has been installed, we recommend to install yarn
```
npm i -g yarn
```

To install the required packages use
```
yarn install
```

## Working on Javascript
When developing JavaScript locally you can use the watcher to make changes and have them compiled as you save as well as generate source maps.

```
yarn run watch:js
```

To build source maps you need to use

```
yarn run watch:js-dev
```

For building a single file use
```
yarn run build:js -- --file misc/drupal.es6.js
```

## Working on CSS
The project uses [PostCSS](https://postcss.org/) for managing variables and
provide the needed browser support. CSS scaffolding tasks are following the
logic of the js tasks:

  * `yarn build:css`
    Process sources without writing source maps.
  * `yarn build:css-dev`
    Process sources with (external) source maps.
  * `yarn watch:css`
    Watches source assets and applies distributive task if any of them changes.
  * `yarn watch:css-dev`
    Watches source assets and applies development task if any of them changes.

## Linting js and css
For linting compiled CSS use
```
yarn run lint:css
```

For js there are two separate configs you can use
```
yarn run lint:js

yarn run lint:js-passing
```
