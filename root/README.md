#Getting Started

Locate the Sites folder in Finder and add a new folder with the same name of the URL the article will go under.

Open Terminal and type ```cd ``` make sure you leave a space after ```cd ``` then drag the folder from the top of the Finder window to the Terminal window and press return.

## Using The Latest Template

Run the following command from the terminal ```$ eb-update```

This will update your system with any changes that have been made to the template system.

## Creating A New Project

Run the following command from the terminal ```$ eb-new```

After running eb-new you will be asked a number of questions to help start out the HTML document. It will then open a new browser window containing the Markdown tool and the HTML page you will be working on.

This following file structure is created ```namedurl``` will be replaced with the url of the project:

```
│   grunt.command
│   Gruntfile.js
│   package.json
│   sass.command
│
├───app
│   │   namedurl.html
│   │
│   ├───css
│   │       article.css
│   │       article.map
│   │
│   └───scss
│           article.scss
│           _namedurl.scss
│
└───node_modules
```

You will also need to execute the ```sass.command``` file in the folder by double-clicking it to start up the preprocessor.

If you need to come back to this project at a later date, running the ```grunt.command``` will start up the preview server, you will also have to execute the ```sass.command```

**Make sure you update the ```_namedurl.scss``` for your styling rather than ```article.css```**

The ```app``` folder can be zipped up and sent for review when completed.
