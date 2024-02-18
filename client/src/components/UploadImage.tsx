import { Box } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"

function UploadImage() {
  const [image, setImage] = useState("")

  const onInputChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);

    const result = await axios.post("http://localhost:5000/upload-image", formData, { headers: {"Content-Type": "multipart/form-data"}})
  }
  return (
  <Box color="white">
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Upload</button>
      </form>
  </Box>
  )
}

export default UploadImage
