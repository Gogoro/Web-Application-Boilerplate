Web Application Boilerplate (WAB)
=================================

Boilerplate template to kickstart your web application.

#### Includes:
* Sass          -   v.?
* Gulp         -   v.?
* LiveReload    -   v.?


#### Initialization [MAC os X]:

1. Clone the repository into your desired location:
   <code>git clone https://github.com/Gogoro/wab.git</code>

2. Change git remote path to your decired location
   <code>git remote set-url urlhere.git</code>

3. Link your viritual host root to the app folder

3. Install dependencies in your project root with the following shell command
   <code>npm install</code>

4. Run gulp with the following shell command
   <code>gulp</code>
   NB: if you get an gulp not found error, try <code>npm install -g gulp</code> 

#### WAB Structure

The WAB structure is made to kickstart the development process, and fit every small project.

```
Project root /
|
|-- app/
|   |-- assets/
|   |   |-- css/
|   |   |-- fonts/
|   |   |-- img/
|   |   |-- js/
|   |   |-- sass/
|   |
|   `-- index.html
|
`-- gulpfile.js
|
`-- package.json
```
