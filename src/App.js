import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import PostPage from "./components/dashboard/posts/PostPage";
import AddPost from "./components/dashboard/posts/AddPost";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Nav />
				<div className="container">
					<Routes>
            
            <Route path='/' element={<HomePage/>} />

            <Route path='/login' element={<LoginPage/>} />

            <Route path='/dashboard' element={<DashboardPage/>} />

            <Route path='/dashboard/posts' element={<PostPage/>} />

            <Route path='/dashboard/posts/add' element={<AddPost/>} />

					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;