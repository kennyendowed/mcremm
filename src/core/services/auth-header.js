export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));

  if (user) {
    // return { Authorization: 'Bearer ' + user.accessToken };
    return { "Authorization": user , 'Content-Type': 'multipart/form-data', };
  } else {
    return {};
  }
}
