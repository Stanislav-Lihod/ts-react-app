declare module '*.less' {
  interface IClassName{
    [className: string]: string
  }
  const resource: IClassName;
  export = resource;
}
declare module "*.svg" {
  import React from "react";
  const SVG: React.FC<React.SVGAttributes<SVGSVGElement>>;
  export default SVG;
}
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.webp"
declare module "*.gif"