// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.67 14.91c0-3.304-.878-6.052-2.627-8.238-1.754-2.186-4.16-3.279-7.226-3.279-3.035 0-5.44 1.093-7.21 3.279-1.774 2.186-2.66 4.934-2.66 8.237 0 3.418.898 6.19 2.692 8.32 1.803 2.133 4.196 3.197 7.177 3.197 2.912 0 5.286-1.036 7.113-3.116 1.827-2.075 2.74-4.877 2.74-8.4zm3.93 0c0 4.232-1.219 7.776-3.654 10.635-2.438 2.85-5.815 4.274-10.13 4.274-4.339 0-7.727-1.423-10.162-4.274C1.215 22.686 0 19.142 0 14.909 0 10.68 1.215 7.141 3.654 4.29 6.089 1.431 9.477 0 13.816 0c4.437 0 7.838 1.452 10.212 4.355C26.41 7.26 27.6 10.778 27.6 14.91z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
