Automated Project Scaffolding
========

Basic grunt-init template for scaffolding out a starter project.

Cloning the template repository to the system: 

```$ mkdir ~/.grunt-init && cd ~/.grunt-init && git clone https://github.com/steriley/grunt-eb.git eb```

Updating template:

```$ cd ~/.grunt-init/eb && git pull && cd -```

Starting a new project:

```$ grunt-init eb; npm install && chmod ug+x *.command && grunt```

## Dependency Installation

### Install Git
Use the download package from the [Git website](http://git-scm.com/) 

### Install Compass CSS Authoring Framework
```$ sudo gem update --system```

```$ sudo gem install compass```

### Install Sass
```$ sudo gem install sass -v 3.3.0.alpha.141 --pre```

### Install Grunt
Requires [NodeJS](http://nodejs.org/) to be installed

```$ npm install -g grunt-cli```

```$ npm install -g grunt-init```
