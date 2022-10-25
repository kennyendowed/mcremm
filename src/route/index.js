import React from "react";
import {Routes, Route, Navigate} from "react-router-dom"
// import { Navigate, Routes, Route, Router } from "react-router-dom";
// import RouteGuard from "../core/utils/RouteGuard"

// //history
// import { history } from '../core/utils/helpers/history';

//pages
import ProtectedRoutes from "../Components/Utility/AuthGuard/ProtectedRoutes.jsx"
import PublicRoutes from "../Components/Utility/AuthGuard/PublicRoutes"
import PermissionDenied from "../views/PermissionDenied"
import InnerContent from "../Components/InnerContent"
import DashboardPage from "../views/dashboard"
import LoginPage from "../views/authentication"
import Report from "../views/Reports"




const MainRoutes = () => (
	<Routes>
		{/** Protected Routes */}
		{/** Wrap all Route under ProtectedRoutes element */}
		<Route path="/" element={<ProtectedRoutes />}>
	
			<Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
				<Route path="/dashboard" element={<DashboardPage />} >
				  {/* <Route path="/dashboard/treated" element={<DashboardPage />} /> */}
				</Route>
				{/* <Route path = "/Report" element ={<Report/>}/></Route>
			 */}
		</Route>
		</Route>

		{/** Public Routes */}
		{/** Wrap all Route under PublicRoutes element */}
		<Route path="auth" element={<PublicRoutes />}>
			<Route path="/auth" element={<LoginPage />} />
			<Route path="register" element={<LoginPage />} />
			<Route path="emailValidate" element={<LoginPage />} />
			<Route path="forget-password" element={<LoginPage />} />
			<Route path="reset-otp" element={<LoginPage />} />
		</Route>

		{/** Permission denied route */}
		<Route path="/denied" element={<PermissionDenied />} />
	</Routes>
)

export default MainRoutes

