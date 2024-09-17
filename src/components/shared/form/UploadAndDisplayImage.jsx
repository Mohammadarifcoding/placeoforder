import { useState } from "react";
import DynamicInput from "./DynamicInput";

const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            {/* Display the selected image */}
            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width="50px"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <br />
                    {/* Button to remove the selected image */}
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}

            {/* Input element to select an image file */}
            <DynamicInput
                type="file"
                name="myImage"
                label='Picture'
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
