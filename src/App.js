import React from "react";
import Container from "./components/layout/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import HotelsPage from "./components/dashboard/hotels/HotelsPage";
import AddHotels from "./components/dashboard/hotels/AddHotels";
import ContactPage from "./components/contact/ContactPage";
import EstablishmentsPage from "./components/establishments/EstablishmentsPage";
import EstablishmentsDetails from "./components/establishments/EstablishmentsDetails";
import MessagesPage from "./components/dashboard/messages/MessagesPage";
import EnquiriesPage from "./components/dashboard/enquiries/EnquiriesPage";
import BookingPage from "./components/establishments/booking/BookingPage";

function App() {
	return (
		
		<Container>
		    <AuthProvider>
			    <Router>
				    <Nav />
				        <div className="container">
					<Routes>

                        <Route path='/' element={<HomePage/>} />

						<Route path='/establishments' element={<EstablishmentsPage/>} />

						<Route path="/establishments/details/:id" element={<EstablishmentsDetails />} />

			            <Route path='/contact' element={<ContactPage/>} />

						<Route path='/booking' element={<BookingPage/>} />

                        <Route path='/login' element={<LoginPage/>} />

                        <Route path='/dashboard' element={<DashboardPage/>} />

                        <Route path='/dashboard/hotels' element={<HotelsPage/>} />

                        <Route path='/dashboard/hotels/add' element={<AddHotels/>} />

						<Route path='/dashboard/messages' element={<MessagesPage/>} />

						<Route path='/dashboard/enquiries' element={<EnquiriesPage/>} />

					</Routes>
					
				        </div>
			    </Router>
		    </AuthProvider>
			<Footer />
		</Container>
	
	);
}

export default App;