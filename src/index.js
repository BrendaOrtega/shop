import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {configureStore} from "./redux/store/configureStore";
import {MuiThemeProvider} from "material-ui";
import {Provider} from 'react-redux';
import {checkIfUser} from "./redux/actions/userActions";
import getMuiTheme from 'material-ui/styles/getMuiTheme';



export const store = configureStore();
store.dispatch(checkIfUser());


const WithRouter = () => (

        <BrowserRouter>
            <App />
        </BrowserRouter>


);
const muiTheme = getMuiTheme({
    palette: {
        //textColor: '#8e1c58',
        primary1Color:'#8e1c58'
    },
    appBar: {
        height: 50,
    },
});

const Main = ()=>(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <WithRouter/>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();