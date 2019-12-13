# ember-ghost-casper-template

This is a template designed to work with [Ember Ghost](https://github.com/stonecircle/ember-ghost) and is a fully-functional, static site implementation of the
[Attila Template](https://github.com/zutrinken/attila) built on EmberJS with fully working out of the
box SEO friendly output. It supports being hosted on Github Pages, AWS S3 or any other static site
hosting solution.

For more information on how to use this system [read the Ember Ghost documentation](https://github.com/stonecircle/ember-ghost/blob/master/README.md) but if you want to get started straight away, try the quick start below.

If you want to see a demo of this template you can checkout [https://ember-ghost-attila-template.stonecircle.io/](https://ember-ghost-attila-template.stonecircle.io/)

Original Demo: [attila.zutrinken.com](https://attila.zutrinken.com/)

You do not need to be a web developer to be able to use this system. You just write markdown files
and the rest of the work is performed by EmberJS' build system.

## Quick Start

```sh
# if you don't have ember-cli installed already
npm install -g ember-cli

ember new super-blog
cd super-blog

ember install ember-ghost ember-ghost-attila-template
```

It will ask you if you want to update the `index.html` file and you should say yes 👍

If you want to see the blog system running on your local machine just run `npm start` and you will
be able to navigate to  [http://localhost:4200](http://localhost:4200) to see the blog in action.

## Copyright & License

Copyright (C) 2015-2019 Peter Amende - Released under the [MIT License](https://github.com/zutrinken/attila/blob/master/LICENSE).
