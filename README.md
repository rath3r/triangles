# Quick Gulp development setup

A quick setup for using [Gulp][1] to develop prototypes and
flat file sites. A tutorial on [tutsplus][2] was used for some pointers.

## Features

### Connect

A server is created using [gulp-connect][3] which has watch and livereload
configured.

### Less

[Less][4] for the styles although [Sass][5] could be installed just as quick.

    npm install gulp-sass --save-dev

### Twig

Rather than just using `.html` files [twig][6] is being used for templates.

[1]:http://gulpjs.com/
[2]:http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903
[2]:https://www.npmjs.com/package/gulp-connect
[3]:https://www.npmjs.com/package/gulp-less
[4]:https://www.npmjs.com/package/gulp-sass
[5]:https://www.npmjs.com/package/gulp-twig
