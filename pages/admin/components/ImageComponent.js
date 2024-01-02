import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function ImageComponent({ id }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const response = await axios.get(
        `http://localhost:3000/admin/${id}/image`,
        { responseType: "arraybuffer" }
      );
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      setImage(base64);
    };

    getImage();
  }, [id]);

  return <Image src={`data:image/png;base64,${image}`} alt="admin" />;
}
export default ImageComponent;
