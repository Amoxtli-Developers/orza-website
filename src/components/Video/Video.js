import React from "react";

const Video = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",

      }}
    >
      <video
        controls
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          marginTop: "50px",
        }}
      >
        {/* Placeholder video source */}
        <source
          src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_20mb.mp4"
          type="video/mp4"
        />
        {/* Fallback content in case the video is not supported */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
