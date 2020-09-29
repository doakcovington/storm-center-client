//Action Creators
const setAdmin = (payload) => ({
  type: "SET_ADMIN", payload
})

export const logAdminOut = () => ({
  type: "LOG_OUT"
})

//Methods
export const fetchAdmin = (adminInfo) => dispatch => {
  fetch(`http://localhost:5000/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(adminInfo)
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token)
    dispatch(data.admin)
  })
}

export const signAdminUp = (adminInfo) => dispatch => {
  fetch(`http://localhost:5000/api/v1/login`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
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