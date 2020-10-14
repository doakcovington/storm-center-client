const setAdmin = (payload) => ({ type: "SET_ADMIN", payload})

export const logAdminOut = () => ({type: "LOG_OUT"})

export const fetchAdmin = (adminInfo) => dispatch => {
  fetch(`http://localhost:5000/login`, {
    headers: {
      "Content-Type": "applications/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(adminInfo)
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token)
    dispatch(setAdmin(data.admin))
  })
}