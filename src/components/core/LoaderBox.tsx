import React from "react";

import { Loader } from "./Loaders";
import cn from "classnames";

type Props = {
  cover?: "content" | "screen";
  message?: string;
  defaultMessage?: boolean;
};
export const LoadingBox = (props: Props) => {
  const { cover = "content", message } = props;
  return (
    <div
      className={cn("flex items-center justify-center w-full", {
        "h-[95vh]": cover == "screen",
      })}
    >
      <Loader message={message} />
    </div>
  );
};
