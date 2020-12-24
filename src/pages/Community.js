import React from "react";
import { community } from "../assets/images/0_images";
import { HeaderInstance as Header } from "../components/0_Instances/HeaderInstance";
import Image from "../components/atoms/Image/Image";
import StandardPage from "../components/templates/StandardPage";

export const Community = () => {
  return (
    <StandardPage
      className="justify-center"
      header={<Header />}
      body={
        <Image
          src={community}
          style={{
            width: "80%",
            objectFit: "contain",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        />
      }
    />
  );
};

export default Community;
