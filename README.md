[![GitHub release](https://img.shields.io/github/release/ErikFontanel/sketch-toggle-constrain-proportions.svg)](https://github.com/ErikFontanel/sketch-toggle-constrain-proportions) [![GitHub release](https://img.shields.io/badge/Works%20with-Sketch%20Runner-blue.svg?colorB=308ADF)](http://bit.ly/SketchRunnerWebsite)

A simple plugin that adds a menu item so you can configure a keyboard shortcut for the 'Toggle Constrain Proportions' command. This plugin is similar to others but this one is made to be compatible with the new plugin methods introduced in Sketch ~~39~~45. And this plugin is not bundled with any other plugins which you'll probably never use…

## Install with Sketch Runner

With Sketch Runner, just go to the `install` tab and search for `Toggle Constrain Proportions`. Runner allows you to manage plugins and do much more to speed up your workflow in Sketch. [Download Runner here](http://www.sketchrunner.com).

![Sketch Runner screenshot](https://github.com/ErikFontanel/sketch-toggle-constrain-proportions/blob/master/screenshot-installation.png?raw=true)

## Install manually

1.  [Download the plugin](https://github.com/ErikFontanel/sketch-toggle-constrain-proportions/releases/latest)
2.  Double click on the `toggleconstrainproportions.sketchplugin` file
3.  Done

## How to use

1.  Select an object
2.  Run this plugin and watch the lock change from 🔒 to 🔓 (and vice versa).

### Note

* As of 1.1 this plugin does not come with a default shortcut anymore since it's impossible to prevent duplicate shortcut conflicts and because [Sketch Runner](http://bit.ly/SketchRunnerWebsite) makes it easy to run commands.
* If you're using Sketch 44 or older, use [version 1.1](https://github.com/ErikFontanel/sketch-toggle-constrain-proportions/releases/tag/1.1).

---

### Contributing

_This plugin was created using `skpm`. For a detailed explanation on how things work, checkout the [skpm Readme](https://github.com/skpm/skpm/blob/master/README.md)._

## Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

Additionally, if you wish to run the plugin every time it is built:

```bash
npm run start
```

## Custom Configuration

### Babel

To customize Babel, you have two options:

* You may create a [`.babelrc`](https://babeljs.io/docs/usage/babelrc) file in your project's root directory. Any settings you define here will overwrite matching config-keys within skpm preset. For example, if you pass a "presets" object, it will replace & reset all Babel presets that skpm defaults to.

* If you'd like to modify or add to the existing Babel config, you must use a `webpack.skpm.config.js` file. Visit the [Webpack](#webpack) section for more info.

### Webpack

To customize webpack create `webpack.skpm.config.js` file which exports function that will change webpack's config.

```js
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - whether the config is for a plugin command or a resource
 **/
module.exports = function(config, isPluginCommand) {
  /** you can change config here **/
};
```

## Debugging

To view the output of your `console.log`, you have a few different options:

* Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
* Open `Console.app` and look for the sketch logs
* Look at the `~/Library/Logs/com.bohemiancoding.sketch3/Plugin Output.log` file

Skpm provides a convenient way to do the latter:

```bash
skpm log
```

The `-f` option causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

## Publishing your plugin

```bash
skpm publish <bump>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

You will need to specify a `repository` in the `package.json`:

```diff
...
+ "repository" : {
+   "type": "git",
+   "url": "git+https://github.com/ORG/NAME.git"
+  }
...
```
