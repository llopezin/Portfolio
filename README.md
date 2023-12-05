## Requirements

[Node.js](http://nodejs.org/) >= 10.15.x

## Features

- Uses [Parcel](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).
  - Automatically minify and optimize CSS code on production build with [`postcss-clean`](https://github.com/leodido/postcss-clean).

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

### Commands

| Command         | Description                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it.                                                                      |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder.                                                                                                               |
