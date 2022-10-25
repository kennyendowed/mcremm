import React from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {
	//get item from localstorage

	let user

	const _user = localStorage.getItem("user")

	if (_user) {
		user = JSON.parse(_user)
		// console.log("user", user)
	}
	if (user) {
		return {
			auth: true,
			role: user.roleaccess,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}

//protected Route state
// type ProtectedRouteType = {
// 	roleRequired?: "ADMIN" | "USER"
// }

const ProtectedRoutes = () => {
	const {auth, role} = useAuth()


	//if the role required is there or not
	if (role) {
		const roles = role.split(',');
		let usersRoles = [
			{
				"id": "fincon"
			},
			{
				"id": "ic"
			},
			{
				"id": "hd"
			}
		];
		let result = usersRoles.filter(u => roles.includes(u.id));
	
		return auth ? (
			result[0] ? (
				<Outlet />
			) : (
				<Navigate to="/denied" />
			)
		
		) : (
			<Navigate to="/auth" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/auth" />
	}
}

export default ProtectedRoutes
// Fincon/ICU/HRMM
	// roles.includes('hd', 'fincon' | 'ic' ) ? (
			// 	<Outlet />
			// ) : (
			// 	<Navigate to="/denied" />
			// )


			// eslint-disable-next-line array-callback-return
			// roles.map((value,index) => {
			// 	if(value.includes('hd')  || value.includes('fincon') ||value.includes('ic' )  )
			// 	{
			// 		return 	<Outlet />
			// 	}
			// 	else{
			// 	return <Navigate to="/denied" />
			// 	}

			// })
