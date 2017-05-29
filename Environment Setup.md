# React
Learning React


# npm install -g httpster //Local server at port 3000
	httpster -d ./dist -p 3000


#npm init //Generate Project

#npm install --save-dev babel-cli  //Dependencies
#npm install -g babel-cli // Global Install

#npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0 //For babel
	babel ./src/index.js --out-file ./dist/bundle.js

@Add start script with httpstr command in package.json file and run 'npm start'


--Webpack--

// Migration required for Webpack v2

#npm install webpack babel-loader webpack-dev-server --save-dev

@webpack // check if migration worked and the files are compiling
@npm start // to run the app with hot reload

#npm install --save react react-dom

#npm install --save-dev json-loader

-- Loader for css and scss --
#npm install style-loader css-loader autoprefixer-loader sass-loader node-sass --save-dev

#npm install jsx-loader --save-dev


#npm install --save react-icons //Icons for use in react



-- React Upgrade --

#npm install prop-types  --save-dev


-- React Router --

#npm install --save react-router@3.0.2
#npm install --save react-router-dom


-- Fetch --
#npm install --save isomorphic-fetch

-- Material Design --
#npm install --save react-mdl
