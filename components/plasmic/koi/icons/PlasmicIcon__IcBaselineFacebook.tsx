// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IcBaselineFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IcBaselineFacebookIcon(props: IcBaselineFacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M32.5 20.031c0-6.9-5.6-12.5-12.5-12.5s-12.5 5.6-12.5 12.5c0 6.05 4.3 11.088 10 12.25v-8.5H15v-3.75h2.5v-3.125a4.38 4.38 0 014.375-4.375H25v3.75h-2.5c-.688 0-1.25.563-1.25 1.25v2.5H25v3.75h-3.75v8.688c6.313-.625 11.25-5.95 11.25-12.438z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcBaselineFacebookIcon;
/* prettier-ignore-end */
