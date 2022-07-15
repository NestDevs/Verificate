# Verificate

> ## Brief


- first you create your react app and the process are as follows
 - npm init
 - mkdir src
 - create index.html in src
 - create a div with an id of root 
 - create script tag
 - create index.js
      <Script type="module" src="./index.js">
 - install react dom and percel
 - npm i percel react-dom react     add script
    "start": "percel ,/src/index.html", - add build     "build": "percel build ./src/index.html", - go to index.js
 - import react from "react" from index.js
 import ReactDOM from "reactDOM"
 - import App from "./App"
     const element  = document.getElementById('root');
     const root = ReactDOM.createRoot(element);
     root.render(<App/>)
 - create App.js and then import react from react
 - then creacte a functional component example
     function App () {
       return(<div>dchj</div>)
      }
 - export default App;
 - then you npm start
 - create app.css
 - prettier -code formatter


