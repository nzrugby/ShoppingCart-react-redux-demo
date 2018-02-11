# FruitCart react-redux demo
A simple demo to show how to use react-redux to mange global state

Last FruitCart demo just used React without redux and it works fine.
This demo I used react-redux to rewrite the FruitCart. Both these demos work fine and produce the same results. 
To rewrite the demo, I moved all the states from component to reducers. Also I move all the onXXX attributes(or functions) to reducers. I defined a unique action for every one of these functions. Then mapDispatchToPros to bind these actions and attributes. In this demo I split the reducers into server small reducers and then use combineReducers to get a whole Reducer to manger all the state tree.  



How to use it?
  1. Download all the folders and files to a local folder(created by you. for examele: d:\js)
  
  2. Use console to enter the folder you put all source files and folders.
  
  3. type command: 'npm init' to create package.json' (use default setting first)
  
  4. type command: 'npm install webpack --save-dev'
  
  5. type command: 'npm install webpack-dev-server --save-dev'
  
  6. type command: 'npm install babel-core babel-loader babel-preset-env babel-preset-react --save-dev'
  
  7. type command: 'npm install react react-dom --save-dev'
  
  8. type command: 'npm install style-loader css-loader --save-dev'

After you finish all above steps you can run this app. Still in this app directory type 'npm start' first to pack the all the dependent files. Then run 'npm run server' to start the application. The only thing you need to be aware is webpack.config.js and package.json. After you download all the files you'd better backup these two files. For they might be modified when you install the following packages. Sometimes the different version may incur the problems.

Because this demo mainly focuses on React components and their communications, layout and CSS are not optimized. You can modify them to make the UI better. Also I used array and json object to simulate the data for simplicity. You can use json file or database to import the data.

The following is snapshot of this demo. 


![3](https://user-images.githubusercontent.com/31294078/36070161-f96537bc-0f59-11e8-9f46-2aa30526df63.gif)
