import React from "react";
import { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function CreateListing() {
  const [files, setFiles] = useState([]);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //console.log(files);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    tools: "",
    projectUrl: "",
    githubUrl: "",
    imageUrls: [],
  });

  // console.log("=======this is formData: =======");
  // console.log(formData);

  const handleImageSubmit = (e) => {
    if (files.length > 0) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }

      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setUploading(false);
          setImageUploadError(false);
        })
        .catch((err) => {
          setImageUploadError(
            "other error, Image upload failed (2 mb max per image)"
          );
          setUploading(false);
        });
    } else {
      setImageUploadError("you can only upload 6 images");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("=======this is complete formData: =======");
    console.log(formData);
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      // setLoading(true);
      // setError(false);
      const res = await fetch("/api/listing/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          formData
          // userRef: currentUser._id,
        ),
      });
      const data = await res.json();
      console.log(data);
      // setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      // navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-100 p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-7">Create a listing</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="name"
            id="name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="text"
            placeholder="description"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          <input
            type="text"
            placeholder="startDate"
            id="startDate"
            required
            onChange={handleChange}
            value={formData.startDate}
          />
          <input
            type="text"
            placeholder="endDate"
            id="endDate"
            required
            onChange={handleChange}
            value={formData.endDate}
          />
          <input
            type="text"
            placeholder="tools"
            id="tools"
            required
            onChange={handleChange}
            value={formData.tools}
          />
          <input
            type="text"
            placeholder="projectUrl"
            id="projectUrl"
            required
            onChange={handleChange}
            value={formData.projectUrl}
          />
          <input
            type="text"
            placeholder="githubUrl"
            id="githubUrl"
            required
            onChange={handleChange}
            value={formData.githubUrl}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <p>images</p>
          <div>
            <input
              onChange={(e) => {
                setFiles(e.target.files);
              }}
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              type="button"
              onClick={handleImageSubmit}
              className="border border-green-300"
            >
              upload
            </button>
          </div>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className="flex justify-between p-3 border items-center"
              >
                <img
                  src={url}
                  alt="listing img"
                  className="w-20 h-20 object-contain rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="p-3 text-red-700 rounded-lg uppercase hover:opacity-75"
                >
                  delete
                </button>
              </div>
            ))}
          <button>submit</button>
        </div>
      </form>
    </main>
  );
}
