import { useState } from "react";

function UploadImage() {
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0]; // Get the first file from the FileList
    setImage(file); // Set the selected file in state
  }

  function upload() {
    console.log(image);
  }

  return (
    <>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={upload}>Upload</button>
      {/* Display the selected image */}
      {image && (
        <div>
          <h3>Selected Image:</h3>
          <img src={URL.createObjectURL(image)} alt="Selected" width="200" />
        </div>
      )}
    </>
  );
}

export default UploadImage;

