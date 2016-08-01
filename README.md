# Quick Gulp development setup

A quick setup for using [Gulp][1] to develop prototypes and
flat file sites. A tutorial on [tutsplus][2] was used for some pointers.

## Features

### Connect

A server is created using [gulp-connect][3] which has watch and livereload
configured.

### Clean

Gotta [clean][8] the dist before building.

### Less

[Less][4] for the styles although [Sass][5] could be installed just as quick.

    npm install gulp-sass --save-dev

### Twig

Rather than just using `.html` files [twig][6] is being used for templates.

### Concat

Currently using [concat][7] to pull all the javascript together. Maybe something
like coffee could be the way forward.

[1]:http://gulpjs.com/
[2]:http://code.tutsplus.com/tutorials/gulp-as-a-development-web-server--cms-20903
[3]:https://www.npmjs.com/package/gulp-connect
[4]:https://www.npmjs.com/package/gulp-less
[5]:https://www.npmjs.com/package/gulp-sass
[6]:https://www.npmjs.com/package/gulp-twig
[7]:https://github.com/contra/gulp-concat
[8]:https://www.npmjs.com/package/gulp-clean
