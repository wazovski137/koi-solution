// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1StrokeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1StrokeIcon(props: Ellipse1StrokeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 120 120"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M60 116.868c31.407 0 56.868-25.46 56.868-56.868 0-31.407-25.46-56.868-56.868-56.868C28.593 3.132 3.132 28.592 3.132 60c0 31.407 25.46 56.868 56.868 56.868zM60 120c33.137 0 60-26.863 60-60S93.137 0 60 0 0 26.863 0 60s26.863 60 60 60z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse1StrokeIcon;
/* prettier-ignore-end */
