# south-west

Dev Career south west project for group 23

## Styling

We have our styling defined in the sass folder with the main.scss file being the entry point. We use the [BEM](http://getbem.com/) methodology for our class naming.

Note: We are using the sass 7-1 pattern for our folder structure. This is a common pattern used in sass projects. You can read more about it [here](https://sass-guidelin.es/#architecture).

Note: Our output file is in the styles folder and is called styles.css. This is the file that is linked to the index.html file.

### Running sass

To run sass you need to have node installed. You can download sass from here [here](https://sass-lang.com/install/) and install it globally on your PC.

Once you have Sass installed you can run the following command in the root terminal of your project to run sass:

```bash
sass --watch sass/main.scss:assets/css/styles.css
```

The above command will watch the main.scss file and compile it to the styles.css file in the styles folder.

Note : Do not edit the styles.css file directly as it will be overwritten by sass.

## Live Server

Navigate into the dist folder and right click on the index.html file and select "Open with Live Server" to view the website.

### Tasks Assigned to each member

- Josheph (aka Bigbrothers) - Leadership/Regional Executive council
- Naomi - About-us/history
