#Getting Started

Locate the Sites folder in Finder and add a new folder with the same name of the URL the article will go under.

Select the new folder and press ```ctrl+alt+cmd+t``` this will open a new Terminal window for that folder.

## Using Latest Template

Run the following command from the terminal ```eb-update```

This will update the starter template with the latest available updates.

## Creating New Project

Run the following command from the terminal ```eb-new```

After running eb-new you will be asked to add the Page title, META description & keywords to add to the HTML document. It will then open a new browser window containing the Markdown tool and the HTML page you will be working on.

This following file structure is created ```project_name``` will be replaced with the url of the project:

```
project_name
│ grunt.command
│ Gruntfile.js
│ package.json
│ README.md
│
├───app
│ │ project_name.html
│ │
│ ├───css
│ │ project_name.css
│ │ project_name.map
│ │
│ ├───scss
│ │ project_name.scss
│
└───node_modules
```

**Make sure you write your styles in the Sass .scss file rather than ```project_name.css```**

The ```app``` folder can be zipped up and sent for review when completed.

## Restarting Project

If you need to come back to this project at a later date, running the ```grunt.command``` will start up the preview server.

## Enable Chrome CSS Sourcemaps
Open Google Chrome and go to the following location in your address bar: ```chrome://flags/```

Find the option **Enable Developer Tools experiments.** and choose Enable, hit the Relaunch Now button.

Open the DevTools ```cmd+alt+i``` and open the settings you will have a new option of Experiments.

Select the Experiments tab and check Support for Sass.

Finally go to the General tab and select Enable source maps under the Sources heading.
