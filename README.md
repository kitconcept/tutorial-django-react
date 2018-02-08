# Django & React Tutorial

## Django

We basically follow the [Django REST framework quickstart guide](http://www.django-rest-framework.org/tutorial/quickstart/) here.

Create backend folder with a virtual Python environment:

```bash:
mkdir backend
cd backend
virtualenv -p /usr/bin/python3 .
```

Install Django and Django REST framework:

```bash:
bin/pip3 install django djangorestframework
```

Create Django project structure:

```bash:
bin/django-admin startproject tutorial .
cd tutorial
django-admin startapp quickstart
cd ..
```

Create Django super user:

```bash:
python manage migrate
python manage.py createsuperuser --email admin@example.com --username admin
pw:admin123
```

Start Django:

```bash:
python manage.py runserver
````

Check if basic auth works:

```bash
curl -H 'Accept: application/json; indent=4' -u admin:admin123 http://127.0.0.1:8000/users/
```

Response should be:

```JavaScript
[
    {
        "url": "http://127.0.0.1:8000/users/1/",
        "username": "admin",
        "email": "admin@example.com",
        "groups": []
    }
]
```

# Frontend

## Prerequisits

Install latest Node LTS. We recommend to use nvm:

```bash
nvm install 8.9.4
nvm use 8.9.4
```

Install create-react-app globally:

```bash
npm install -g create-react-app
````

Create new react app:

```bash
ngx create-react-app frontend
cd frontend
````

Install dependencies:

```bash
yarn install
```

Start development server:

```bash
yarn start
````

Your browser should automatically open with 'localhost:3000' and show the create-react-app standard HTML view.

## Django CORS

Install corsheaders:

```bash
bin/pip3 install django-cors-headers
```

settings.py:

```python
INSTALLED_APPS = (
    ...
    'corsheaders',
    ...
)
````

settings.py:

```python
MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    ...
]````

settings.py:

```python
CORS_ORIGIN_ALLOW_ALL = True
````

# Make React app query the Django Backend

At first we create a state in the main React app to hold the information we fetch from the backend.

Open 'frontend/src/App.js' and add a 'constructor' method to the 'App' class:

```JavaScript
class App extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  ...
}```

Then we actually query the backend in the 'componentDidMount' method that is automatically called when the React component has been mounted;:

```JavaScript

class App extends Component {

  ...

  componentDidMount() {
    fetch(
      'http://127.0.0.1:8000/users/1',
      {
        headers: {
          'Accept': 'application/json'
        }
      }
    ).then((response) => response.json())
    .then((responseData) => {
      this.setState({ user: responseData });
      console.log('Fetch from backend successful!')
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    return (
       ...
       <p>Username: {this.state.user.username}</p>
       <p>E-Mail: {this.state.user.email}</p>
       ...
     );
   }
```

When the React app loads in your browser you will most likely see an error in your JavaScript console. This is caused by CORS preventing you from serving content from different origins. Install the CORS plugin for Chrome for development:

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi


# REST API communication

Options:

- fetch (ES6)
- Superagent
- Axios

# Static Code Analysis

eslint...

# Automatic Code Formatting

Add dependencies:

```bash
yarn add husky lint-staged prettier
```

package.json:

```JavaScript
  "dependencies": {
    // ...
  },
+ "lint-staged": {
+   "src/**/*.{js,jsx,json,css}": [
+     "prettier --single-quote --write",
+     "git add"
+   ]
+ },
  "scripts": {
+   "precommit": "lint-staged",
```

Source and full tutorial:

https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically

## Prettier IDE support

You should install a prettier plugin to your favorite editor.

### Prettier formatter for Visual Studio Code

Install Prettier formatter for Visual Studio Code:

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

vscode settings:

```JavaScript
// Set the default
"editor.formatOnSave": false,
// Enable per-language
"[javascript]": {
    "editor.formatOnSave": true
}```


# Router / Redux

Add dependencies:

```bash:
yarn add redux react-redux react-router-dom react-router-redux@next redux-thunk history --save