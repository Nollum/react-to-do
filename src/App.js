import Todo from './Todo/todo';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Noto Sans JP', 'Roboto'].join(','),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Grid
				container
				className="app"
				justify="center"
				alignItems="center"
				direction="column"
				style={{ minHeight: '90vh' }}
			>
				<Grid
					item
					style={{
						border: '2px solid gray',
						borderRadius: '10px',
						padding: '5vh',
						backgroundColor: '#EEEEEE',
					}}
				>
					<Todo />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
