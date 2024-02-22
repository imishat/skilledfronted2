"use client";

import { Button } from "@/app/components/ui/button";
import Dropzone from "@/app/components/ui/dropzone";
import toast from "cogo-toast";
import { useEffect, useState } from "react";

export default function ResumeUploader({ resume = null }) {
  // Local State
  const [loading, setLoading] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  /**
   * HANDLERS
   */
  const handleUpload = async file => {
    setLoading(true);
    try {
      // form data
      const formData = new FormData();
      formData.append("resume", file);

      const response = await uplaodResume(formData);
      if (response?.success) {
        toast.success("Resume uploaded successfully");
        setLoading(false);
        setShowUpload(false);
      }

      if (!response?.success) {
        toast.error("Error while uploading resume");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error while uploading resume --> ", error);
      setLoading(false);
      toast.error("Error while uploading resume");
    }
  };

  // download resume handler
  const downloadResumeHandler = () => {
    window.open(resume, "_blank");
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (resume === null) {
      setShowUpload(true);
    }
  }, [resume]);

  return (
    <div>
      <div>
        {/* Show a card for uploaded resume */}
        {resume && (
          <div className="bg-secondary p-5 rounded mt-5">
            <h2 className="text-1xl my-5 font-semibold">Uploaded Resume</h2>
            <div className="flex items-center">
              <iframe
                src={resume}
                title="Uploaded Resume"
                width="100%"
                height="400px" // Adjust height as needed
              />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <Button
                variant="outline"
                customClass="text-blue-500 text-sm border-blue-500"
                onClick={downloadResumeHandler}
              >
                View
              </Button>
              <Button
                variant="outline"
                customClass="text-green-500 text-sm border-green-500"
                onClick={downloadResumeHandler}
              >
                Download
              </Button>
              <Button
                variant="outline"
                customClass="text-yellow-500 text-sm border-yellow-500"
                onClick={() => setShowUpload(!showUpload)}
              >
                Update
              </Button>
            </div>
          </div>
        )}
      </div>
      {showUpload && (
        <div>
          <h2 className="text-1xl my-5 font-semibold">Resume Manager</h2>
          <Dropzone onUpload={handleUpload} loading={loading} />
        </div>
      )}
    </div>
  );
}
