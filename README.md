Flask - Vue skeleton
------------------
 
[Yii 2 basic](https://github.com/pallets/flask) skeleton application with an integrated [Vue](https://cli.vuejs.org/) frontend framework.

Requirements
============
These are the **minimum** requirements to build and run this project.

* Python 3.7
* [Node](https://nodejs.org) v8.16.0
* [NPM](https://www.npmjs.com) 6.4.1
* [Composer](https://getcomposer.org/)
* [@vue/cli](https://cli.vuejs.org/) v3.9.1 (also works with v4.0.0+)

> Alternatively you can use [Yarn](https://yarnpkg.com) instead of Node and NPM.

Installation
============

1. Clone this project

    ```bash
    $ git clone https://github.com/radfuse/flask-vue-skeleton.git my-project
    ```

2. Set up the virual env

    ```bash
    $ cd my-project
    $ python3 -m venv env
    $ . env/bin/activate
    ```

    On Windows:

    ```bash
    $ cd my-project
    $ py -m venv env
    $ .\\env\\Scripts\\activate
    ```

3. Install flask packages via pip

    ```bash
    $ pip install -r requirements.txt
    ```


4. Install node modules via npm

    ```bash
    $ cd client    
    $ npm install
    ```

Configuration
============

### Flask config    
    
Create a `.env` file in the root and set the following:

```bash
SECRET_KEY = '<your secret key here>'
SQLALCHEMY_DATABASE_URI = "<your db URI here>"
```

### Vue config    
Edit the `client/.env` file with actual parameters, for example:

```
VUE_APP_API_URL="http://localhost:5000"
```


Usage
============

### Running the flask server

If your virtual env isn't activated yet, then run:

```bash
$ . env/bin/activate
```

On Windows:

```bash
$ .\\env\\Scripts\\activate
```

Then you can start the flask application:

```bash
$ python3 app.py
```

On Windows:

```bash
$ py app.py
```

### Running with Vue CLI

From the root directory you can start the Vue CLI service to run and live-update your Vue frontend.

```bash
$ cd client
$ npm run serve
```

Then the CLI must build and serve your app, so you can visit http://localhost:8080 (by default) to see the application running.

### Building with Vue CLI

If you want to deploy your frontend and not serving it via the Vue CLI service, you can run the build command, so the webpack can pack it into your `dist` folder.

```bash
$ cd client
$ npm run build
```
