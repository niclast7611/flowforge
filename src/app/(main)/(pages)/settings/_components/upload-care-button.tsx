"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

// type Props = {
//   onUpload: (file: File) => void;
// };

const UploadCareButton = () => {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="e74b18808fa1e127838b"
      />
    </div>
  );
};

export default UploadCareButton;
