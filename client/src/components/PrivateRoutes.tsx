import { useState, useEffect } from "react"
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [isVerified, setIsVerified] = useState(false)
  const token = localStorage.getItem("user-token")
  const headers = {
    "auth-token": token
  }

  useEffect(() => {
    axios.get("http://localhost:5000/protect", { headers })
      .then(res => {
        if (res.data !== "Invalid token") {
          setIsVerified(true)
        } else {
          console.log("Invalid token")
        }
      })
  }, [])

  useEffect(() => {
    console.log(isVerified)
  }, [isVerified])

  return (
    isVerified ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes