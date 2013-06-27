Automated Project Scaffolding
========

Basic grunt-init template for scaffolding out a starter project.

Cloning the template repository to the system: 

```$ mkdir ~/.grunt-init && cd ~/.grunt-init && git clone https://github.com/steriley/grunt-eb.git eb```

Add the following commands to ```~/.bash_profile``` as alias commands for easy access:

```
alias eb-update='cd ~/.grunt-init/eb && git pull && cd -'
alias eb-new='grunt-init eb; npm install && chmod ug+x *.command && grunt'
```

Updating template: ```$ eb-update```

Starting a new project: ```$ eb-new```

## Dependency Installation

### Install Git
Download & install from the [Git website](http://git-scm.com/)

### Install node.js
Download & install from the [node.js website](http://nodejs.org/)

### Install Compass CSS Authoring Framework
```$ sudo gem update --system```

```$ sudo gem install compass```

### Install Sass
```$ sudo gem install sass -v 3.3.0.alpha.141 --pre```

### Install Grunt
```$ sudo npm install -g grunt-cli```

```$ sudo npm install -g grunt-init```
