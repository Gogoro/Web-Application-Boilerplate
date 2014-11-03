Web Application Boilerplate (WAB)
=================================

Boilerplate template to kickstart a web application. Including Sass, Grunt, LiveReload...

#### Includes:
* FontAwesome   -   v.4.0.3
* jQuery        -   v.1.11.1
* Sass          -   v.?
* Grunt         -   v.?
* LiveReload    -   v.?


#### Initialization [MAC os X]:

1. Clone the repository into your desired location:
   <code>git clone https://github.com/Gogoro/wab.git</code>

2. Change git remote path to your decired location
   <code>git remote set-url urlhere.git</code>

3. Link your viritual host root to the app folder

3. Install dependencies in your project root with the following shell command
   <code>npm install</code>

4. Run grunt with the following shell command
   <code>grunt</code>

#### WAB Structure

The WAB structure is made to kickstart the development process, and fit every small project.

```
Project root /
|
|-- app/                        # Basically your application files
|   |-- assets/
|   |   |-- css/
|   |   |-- fonts/
|   |   |-- images/
|   |   |-- js/
|   |   |-- sass/
|   |
|   |-- html/
|   |   |-- partials/           # Using partials makes creating templates faster than ever
|   |   |   `-- header.html     # partial header file included in index.html
|   |   `-- index.html          # index file - includes partials
|   `-- index.html              # Generated index file
|
`-- gruntfile.js                # Gruntfile controlling your grunt command
|
`-- package.json                # Dependency map
```

Read this article if you are interested in how to structure a <a href="http://thesassway.com/beginner/how-to-structure-a-sass-project">sass</a> project.