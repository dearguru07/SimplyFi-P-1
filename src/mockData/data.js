import React, { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";

export default function AvatarGallery() {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const newAvatars = Array.from({ length: 1 }, () => {
      const randomSeed = `user${Math.floor(Math.random() * 10000)}`;
      const avatar = createAvatar(adventurer, { seed: randomSeed });
      return avatar.toString();
    });

    setAvatars(newAvatars);
  }, []); 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {avatars.map((svg, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "10px",
              width: "150px",
              background: "#fafafa",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
    </div>
  );
}
