import React from "react";
import Travel from "./Travel";
import img1 from "./49c069bb-8a54-4ded-81f0-e463ef6c66da.hw1.jpeg";
import img2 from "./1280px-1_bali_rice_terrace_2011.jpeg";
import img3 from "./rome.jpg";
import img4 from "./sofia-bul.jpeg";
import img5 from "./new_york.jpg";

const tab = [
    {
        destination: "Phoenix, Arizona",
        country: "U.S.A",
        photo: img1,
        distance: "8724 kilometers",
        alt: ""
    },
    {
        destination: "Bali",
        country: "Indonesia",
        photo: img2,
        distance: "12288 kilometers",
        alt:""
    },
    {
        destination: "Rome",
        country: "Italy",
        photo: img3,
        distance: "1,211 kilometers",
        alt:""
    },
    {
        destination: "Sofia",
        country: "Bulgaria",
        photo: img4,
        distance: "1,771 kilometers",
        alt:""
    },
    {
        destination: "New York",
        country: "U.S.A.",
        photo: img5,
        distance: "5,755 kilometers",
        alt:""
    },
  ];

  const Travels = () => {
      return (
          <div>
              {tab.map( (travel,idx) => {
                  return (<Travel key={idx} {...travel}/>)
              })}
          </div>
      );
  }

  export default Travels;