"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

type Props = {
  onUpload: (image: string) => Promise<User>;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleUpload = async (info: { uuid: string; cdnUrl: string }) => {
    console.log("Upload successful with UUID:", info);
    try {
      // Only send the CDN URL to your server action, not the entire file
      const response = await onUpload(info.cdnUrl);
      if (response) {
        router.refresh();
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="e74b18808fa1e127838b"
        onFileUploadSuccess={handleUpload}
      />
    </div>
  );
};

export default UploadCareButton;
