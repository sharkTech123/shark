import React from "react";
import styles from "./Hazard.module.css";

function HazardVideos() {
  const videoURLs = [
    "https://www.youtube.com/embed/MpjbrzYnnAY",
    "https://www.youtube.com/embed/Zuu1F4NSWQo",
    "https://www.youtube.com/embed/yrCfp-9Fzlg",
    "https://www.youtube.com/embed/0DXPWBv5hrY",
    "https://www.youtube.com/embed/MozU03NwbQ8",
    "https://www.youtube.com/embed/NoxcCOa_-Yc",
    "https://www.youtube.com/embed/ecnP-gxKBpE",
    "https://www.youtube.com/embed/hRTXP6lemWU",
    "https://www.youtube.com/embed/u8GceoTRmP4",
    "https://www.youtube.com/embed/9ICcf0448Jk",
    "https://www.youtube.com/embed/crQq8m22CY4",
    "https://www.youtube.com/embed/W0nVpLTNzvA",
    "https://www.youtube.com/embed/TQgBE8DtCb8",
    "https://www.youtube.com/embed/JcK1PHR8-sM",
    "https://www.youtube.com/embed/wQ6u_j5e6tc",
    "https://www.youtube.com/embed/JVntebdrC08",
    "https://www.youtube.com/embed/93fzW4izNiA",
    "https://www.youtube.com/embed/9_OTR81MK68",
    "https://www.youtube.com/embed/WAbK4BM1gmI",
    "https://www.youtube.com/embed/oBoY6pMH4Co",
    "https://www.youtube.com/embed/ob1m_mUKVX4",
    "https://www.youtube.com/embed/J5_YIQeKMAw",
    "https://www.youtube.com/embed/_LTAovQiBNI",
    "https://www.youtube.com/embed/vtDqDuCaH2s",
    "https://www.youtube.com/embed/aWxIuaEeSZA",
    "https://www.youtube.com/embed/zBXRL21byF8",
    "https://www.youtube.com/embed/LCjDw34dGnM",
    "https://www.youtube.com/embed/sIQtqZxyLCk",
    "https://www.youtube.com/embed/J1L6-65r18M",
    "https://www.youtube.com/embed/jB3grugHr_0",
    "https://www.youtube.com/embed/atZ-quaxlTs",
    "https://www.youtube.com/embed/nTNQ7MDAdko",
    "https://www.youtube.com/embed/d1VZadRKG3o",
    "https://www.youtube.com/embed/3lmQYLRbKHw",
    "https://www.youtube.com/embed/y4CCEiass1A",
    "https://www.youtube.com/embed/SKZ3iA2O_pg",
    "https://www.youtube.com/embed/yc7Xo-5HAkM",
    "https://www.youtube.com/embed/9Ow5oITdBjE",
    "https://www.youtube.com/embed/zS33g8m3SRg",
    "https://www.youtube.com/embed/5FvyFd81_1k",
  ];
  return (
    <>
      <div className={styles.hazardVideosGridContainer}>
        {videoURLs.map((url, index) => (
          <div className={styles.hazardGridItem} key={index}>
            <iframe
              style={{
                borderRadius: "10px",
                boxShadow: "0px 0px 55px 5px rgba(29, 29, 29, 0.4)",
              }}
              width="300"
              height="200"
              src={url}
              allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

export default HazardVideos;
