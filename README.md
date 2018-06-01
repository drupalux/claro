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

## Linting js and css
For linting css use
```
yarn run lint:css
```

For js there are two seperate configs you can use
```
yarn run lint:js

yarn run lint:js-passing
```
