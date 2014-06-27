Web Application Boilerplate (WAB)
=================================

Boilerplate template to kickstart a web application. Including Sass, Grunt, LiveReload...

### Includes:
* FontAwesome   -   v.4.0.3
* jQuery        -   v.1.11.1
* Sass          -   v.?
* Grunt         -   v.?
* LiveReload    -   v.?


### Initialization [MAC os X]:

1. Clone the repository into your desired location:
   <code>git clone https://github.com/Gogoro/wab.git</code>

2. Change git remote path to your decired location
   <code>git remote set-url urlhere.git</code>

3. Link your vHost to the app folder

3. Install dependencies in your project root with the following shell command
   <code>npm install</code>

4. Run grunt with the following shell command
   <code>grunt</code>

### Webapp structure

Write more about the layout

```
Project root /
|
|-- app/                        # Common modules
|   |-- assets/
|   |   |-- css/
|   |   |-- fonts/              # font collection
|   |   |-- images/             # ...
|   |   |-- js/                 # ...
|   |   |-- sass/               # ...
|   |-- html/
|   |   |-- partials/           # Partials to making faster and better templates
|   |   |   |-- header.html     # Header template
|   |   |   |-- footer.html     # Footer template
|   |   `-- index.html          # Template files
|   `-- index.html              # Generated index file
`-- gruntfile.js
|
`-- package.json                # CSS or Sass from other projects
```

<a href="http://thesassway.com/beginner/how-to-structure-a-sass-project"> Read the article for more information. </a>

