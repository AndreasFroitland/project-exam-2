import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import HotelsPage from "./components/dashboard/hotels/HotelsPage";
import AddHotels from "./components/dashboard/hotels/AddHotels";
import ContactPage from "./components/contact/ContactPage";

function App() {
	return (
		<AuthProvider>
			<Router>
				<Nav />
				<div className="container">
					<Routes>
            
                        <Route path='/' element={<HomePage/>} />

			            <Route path='/contact' element={<ContactPage/>} />

                        <Route path='/login' element={<LoginPage/>} />

                        <Route path='/dashboard' element={<DashboardPage/>} />

                        <Route path='/dashboard/hotels' element={<HotelsPage/>} />

                        <Route path='/dashboard/hotels/add' element={<AddHotels/>} />

					</Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;