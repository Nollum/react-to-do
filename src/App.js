import Todo from './ToDo/todo';
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
						border: '0.2px solid gray',
						borderRadius: '10px',
						padding: '5vh',
					}}
				>
					<Todo />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
