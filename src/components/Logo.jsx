import React, { useEffect, useRef } from "react";
import image from "../assets/images/r_logo.png";

const Logo = () => {
  const bgRef = useRef(null);

  return (
    <div className="animatedLogo" ref={bgRef}>
      {/* solid logo */}
      <img src={image} alt="R" className="animatedLogo__solid" />
      {/* outlined logo */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 297">
        <g fontFamily="URW Gothic" fontSize="334.89" fontWeight="600">
          <text
            xmlSpace="preserve"
            x="11.59"
            y="256.37"
            style={{
              lineHeight: 1.25,
              inkscapeFontSpecification: "URW Gothic, Semi-Bold",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            transform="scale(.8746 1.1434)"
          >
            <tspan
              x="11.59"
              y="256.37"
              style={{
                inkscapeFontSpecification: "URW Gothic, Semi-Bold",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
            >
              R
            </tspan>
          </text>
          <text
            xmlSpace="preserve"
            x="31.33"
            y="251.08"
            style={{
              lineHeight: 1.25,
              inkscapeFontSpecification: "URW Gothic, Semi-Bold",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            transform="scale(.8746 1.1434)"
          >
            <tspan
              x="31.33"
              y="251.08"
              style={{
                inkscapeFontSpecification: "URW Gothic, Semi-Bold",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantastAsian: "normal",
              }}
            >
              R
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
