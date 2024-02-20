import { Box } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"

function UploadImage() {
  const [image, setImage] = useState("")
  const [show, setShow] = useState(null)

  const onInputChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);
    const headers = { "auth-token": localStorage.getItem("user-token"), "Content-Type": "multipart/form-data" }

    await axios.post("http://localhost:5000/upload-image", formData, { headers })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const showImage = async () => {
    const headers = { "auth-token": localStorage.getItem("user-token") }
    await axios.get("http://localhost:5000/get-image", { headers })
      .then(res => setShow(res.data.data[0]))
      .catch(err => console.log(err))
  }
  return (
  <Box color="white">
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Upload</button>
      </form>

      <button onClick={showImage}>show image</button>
      {/* {show !== null ? <img src={`../images/${show.image}`} alt="Your Image" /> : ""} */}
      {show !== null ? <img src={`../public/${show.image}`} alt="Your Image" /> : ""}

  </Box>
  )
}

export default UploadImage
