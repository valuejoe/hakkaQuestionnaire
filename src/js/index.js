import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Stepper from './component/Stepper'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#83ebff',
			main: '#48b9e1',
			dark: '#0089af',
			contrastText: '#0C308E',
		},
		secondary: {
			light: '#ff87c8',
			main: '#e85397',
			dark: '#b21569',
			contrastText: '#ffffff',
		},
	},
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<Stepper />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);