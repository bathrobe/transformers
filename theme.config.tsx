import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg height="100" width="200">
        <circle
          cx="25"
          cy="50"
          r="15"
          stroke="pink"
          fill="none"
          strokeWidth="3"
        />
        <rect
          x="65"
          y="35"
          width="30"
          height="30"
          stroke="lightyellow"
          fill="none"
          strokeWidth="3"
        />
        <polygon
          points="130,35 145,65 115,65"
          stroke="lightblue"
          fill="none"
          strokeWidth="3"
        />
      </svg>
    </>
  ),
  docsRepositoryBase: "https://github.com/bathrobe/transformers/tree/main",
  footer: {
    text: "Transformers Notes by Joe Holmes",
  },
};

export default config;
