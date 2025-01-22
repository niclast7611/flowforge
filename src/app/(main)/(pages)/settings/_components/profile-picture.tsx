import React from "react";
import UploadCareButton from "./upload-care-button";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfilePicture = () => {
  return (
    <div className="flex flex-col">
      {/* <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[30vh] flex-col items-center justify-center">
        {userImage ? (
          <div>
            <div className="relative h-full w-2/12">
              <Image src={userImage} alt="Profile Picture" fill />
            </div>
            <Button
              onClick={removeProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </div>
        ) : (
          <div></div>
        )}
      </div> */}
    </div>
  );
};

export default ProfilePicture;
