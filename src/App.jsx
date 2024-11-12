import React from "react";
import MainComponent from "./components/MainComponent/MainComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MainComponent />
		</QueryClientProvider>
	);
};

export default App;
