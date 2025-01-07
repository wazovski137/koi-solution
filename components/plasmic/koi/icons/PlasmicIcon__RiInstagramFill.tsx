// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RiInstagramFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RiInstagramFillIcon(props: RiInstagramFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03 1.064.05 1.79.218 2.427.465.66.254 1.216.598 1.772 1.153a4.9 4.9 0 011.153 1.772c.247.637.415 1.363.465 2.428.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31c.002.73-.005 1.459-.023 2.188l-.006.194c-.008.225-.018.446-.03.712-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 01-1.153 1.772 4.9 4.9 0 01-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309c-.73.003-1.46-.005-2.189-.023l-.194-.006c-.237-.009-.475-.02-.712-.031-1.064-.05-1.79-.218-2.428-.465a4.899 4.899 0 01-1.771-1.153 4.9 4.9 0 01-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712-.005-.194A79.01 79.01 0 012 13.028v-2.056c-.003-.73.005-1.459.022-2.188l.007-.194c.008-.225.018-.446.03-.712.05-1.065.218-1.79.465-2.428A4.9 4.9 0 013.68 3.678a4.9 4.9 0 011.77-1.153c.638-.247 1.363-.415 2.428-.465.266-.012.488-.022.712-.03l.194-.006c.73-.018 1.459-.025 2.188-.023L13.028 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6m5.25-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RiInstagramFillIcon;
/* prettier-ignore-end */
