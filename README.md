Web Application Boilerplate (WAB)
=================================

Welcome to WAB! A boilerplate to kickstart your web application.

Website: [http://gogoro.github.io/Web-Application-Boilerplate](http://gogoro.github.io/Web-Application-Boilerplate)

#### Includes:
* Gulp
* Sass
* LiveReload


#### Initialization [MAC osX and Linux]:

1. Clone the repository into your desired location:
   <code>git clone https://github.com/Gogoro/wab.git</code>

2. Change git remote path to your decired location
   <code>git remote set-url origin urlhere.git</code>

3. Link your viritual host root to the app folder

3. Install dependencies in your project root with the following shell command
   <code>npm install</code>

4. Run gulp with the following shell command
   <code>gulp</code>


> Try <code>npm install -g gulp</code> if you have problems getting gulp to run.

#### Initialization [Windows]:

1. Clone the repository into your desired location:
   <code>git clone https://github.com/Gogoro/wab.git</code>

2. Change git remote path to your decired location
   <code>git remote set-url origin urlhere.git</code>

3. Link your viritual host root to the app folder.

3. Install dependencies in your project root by running the **windows-install.bat** file.

4. Run gulp by running the **windows-run.bat** file.

> Try <code>npm install -g gulp</code> if you have problems getting gulp to run.

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

