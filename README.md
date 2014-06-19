Web Application Boilerplate (WAB)
=================================

Boilerplate template to kickstart a web application. Including Sass, Grunt, LiveReload...

**Initialization:**

*#1* Clone the repository into your desired location:
<code>git clone https://github.com/Gogoro/wab.git</code>

*#2* Link your vHost to the app folder

*#3* Install dependencies in your project root with the following shell command
<code>npm install</code>

*#4* Run grunt with the following shell command
<code>grunt</code>


*Includes:*
* FontAwesome   -   v.4.0.3
* jQuery        -   v.1.11.1
* Sass          -   v.?
* Grunt         -   v.?
* LiveReload    -   v.?


**Structure a sass project, the sass way**

Consitentcy is key, ey? That's why we are going to follow this structure when we are developing apps in sass.
(Needs to be updated)

<code>
    stylesheets/
|
|-- modules/              # Common modules
|   |-- _all.scss         # Include to get all modules
|   |-- _utility.scss     # Module name
|   |-- _colors.scss      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.scss     # buttons
|   |-- _figures.scss     # figures
|   |-- _grids.scss       # grids
|   |-- _typography.scss  # typography
|   |-- _reset.scss       # reset
|   ...
|
|-- vendor/               # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file
</code>

<a href="http://thesassway.com/beginner/how-to-structure-a-sass-project"> Read the article for more information. </a>

