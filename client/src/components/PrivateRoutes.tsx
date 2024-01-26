import { useEffect, useState } from "react"
import { VerifiedContext } from "../Context/VerifiedContext";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [verified, setVerified] = useState(false)
  const [loader, setLoader] = useState(true)
  const token = localStorage.getItem("user-token")
  const headers = {
    "auth-token": "s"
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
    // setLoader(false)
  }, [verified])

  return (
    !loader || verified ? <div>
    { verified ? <Outlet /> : <Navigate state={verified} to="/login" /> }
    </div> : "loading"
  )
}

export default PrivateRoutes