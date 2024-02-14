import { useState } from "react"
function UploadImage() {
  const [image, setImage] = useState();
  function upload() {
    console.log(image)
  }
  return (
    <>
      Upload Image
      <input type="file" onChange={(e) => setImage(e.target.value)} />
      <button onClick={upload}>Click</button>
    </>
  )
}

export default UploadImage
