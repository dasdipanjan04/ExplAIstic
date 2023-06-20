import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Circles } from "react-loader-spinner";
import "./UploadFile.css";
import UploadFilePage from "../assets/characters/UploadFilePage";

export const UploadFile = (props) => {
  const token = localStorage.getItem("token");
  console.log(token);
  const inputref = useRef();
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState();
  const [file, setfile] = useState();
  const [fileType, setFileType] = useState();
  const [loading,setLoading] = useState(false);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
  const onDrop = () => wrapperRef.current.classList.remove("dragover");
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    const input_file = e.target.files[0];
    setFileList(input_file);
   
    const d = URL.createObjectURL(e.target.files[0]);
    const header = {
      Authorization: `Bearer ${token}`,
    };
    console.log(header);

   
    const type = newFile.type.split("/")[1];
    console.log(newFile.type.split("/")[1]);
    setFileType(newFile.type.split("/")[1]);
    setfile(URL.createObjectURL(e.target.files[0]));
  };

  const fileRemove = () => {
    setfile();
    setFileList();
  };

  const handleClick = () => {
    setLoading(true);
     const formData = new FormData();
     formData.append("file", fileList);
     axios
      .post(
        "http://localhost:9000/upload_file",formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": 'multipart/form-data',
          },
        }
      )
      .then((res) => {
        setLoading(false);
        navigate("/generatecaption");
      })
      .catch((err) => {
        console.log("Error", err);
      });


   
  };
  return (
    <>
      <div>
        <div className="header-page1">
          <div>
            <p>ExplAIstic</p>
          </div>
          <div className="icons-page1">
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <section>
          <div className="content-page1">
            <div className="innerContent-page1">
              <p className="steps">Step 1 :Upload Files</p>
              <div>
                <p className="label">
                  Add Context <span>(optional)</span>
                </p>
                <input
                  placeholder="Tell us something about your memory"
                  className="context-page1"
                ></input>
              </div>

              <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                <div className="drop-file-input__label">
                  {!file ? (
                    <>
                      <i
                        class="fa-regular fa-image"
                        style={{ color: "#989aa0" }}
                      ></i>
                      <p className="title">
                        Add Photo or Video{" "}
                        <span style={{ color: "red" }}>*</span>
                      </p>
                      <p className="subtitle">Drag & Drop your files here</p>
                    </>
                  ) : (fileType == "mp4") | "mov" ? (
                    <video controls className="selectedFile">
                      <source src={file}></source>
                    </video>
                  ) : (
                    <img src={file} className="selectedFile"></img>
                  )}
                </div>
                {!file ? (
                  <input
                    ref={inputref}
                    accept="image/jpg,image/png,image/jpeg,video/mp4,video/mov"
                    type="file"
                    value=""
                    onChange={(e) => onFileDrop(e)}
                  />
                ) : null}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {file ? (
                  <button className="deleteBtn" onClick={fileRemove}>
                    Remove File
                  </button>
                ) : null}

                {loading? <>
                  <div className="spinners">
                    <Circles
                      height="50"
                      width="50"
                      color="#1c4042"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    ></Circles>
                  </div>
                </>:<button className="btn-style-page1" onClick={handleClick}>
                  Next
                </button>}
              </div>
            </div>
          </div>

          <div className="footer-page1"></div>
        </section>
        <UploadFilePage></UploadFilePage>
      </div>
    </>
  );
};
