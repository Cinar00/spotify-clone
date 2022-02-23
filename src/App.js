import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BottomBar from "./components/Bottombar";
import { BrowserRouter } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<Sidebar/>
				<Content/>
			</div>
			<BottomBar/>
		</BrowserRouter>
	);
}

export default App;