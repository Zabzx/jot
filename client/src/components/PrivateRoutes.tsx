import { useEffect, useState } from "react"
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
import Login from "./Login";

const PrivateRoutes = () => {
  const [verified, setVerified] = useState(false)
  const [loader, setLoader] = useState(true)
  const token = localStorage.getItem("user-token")
  const headers = {
    "auth-token": token
  }

  useEffect(() => {
    axios.get("http://localhost:5000/protect", { headers })
      .then(res => {
        if (res.data !== "Invalid token") {
          setVerified!(true)
        } else {
          console.log("Invalid token")
        }

      })
  }, [])

  useEffect(() => {
    console.log(verified)
  }, [verified])

  return (
    !loader || verified ? <div>
    { verified ? <Outlet /> : <Navigate to="/login" /> }
    </div> : <Login />
  )
}

export default PrivateRoutes