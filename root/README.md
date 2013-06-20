#Getting Started

Locate the Sites folder in Finder and add a new folder with the same name of the URL the article will go under.

Select the new folder and press ```Ctrl+Alt+Cmd+T``` this will open a new Terminal window for that folder.

## Using The Latest Template

Run the following command from the terminal ```eb-update```

This will update the starter template with the latest available updates.

## Creating A New Project

Run the following command from the terminal ```eb-new```

After running eb-new you will be asked to add the Project title, META description & keywords to add to the HTML document. It will then open a new browser window containing the Markdown tool and the HTML page you will be working on.

You will also need to execute the ```sass.command``` file in the folder by double-clicking it to start up the preprocessor.

This following file structure is created ```project_name``` will be replaced with the url of the project:

```
project_name
│   grunt.command
│   Gruntfile.js
│   package.json
│   README.md
│   sass.command
│
├───app
│   │   project_name.html
│   │
│   ├───css
│   │       article.css
│   │       article.map
│   │
│   └───scss
│           article.scss
│           _project_name.scss
│
└───node_modules
```

**Make sure you update the ```_project_name.scss``` for your styling rather than ```article.css```**

The ```app``` folder can be zipped up and sent for review when completed.

## Restarting the Project

If you need to come back to this project at a later date, running the ```grunt.command``` will start up the preview server, afterwards execute the ```sass.command``` to start the preprocessor.
