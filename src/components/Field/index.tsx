import React, { memo } from "react";
import { Grid, Theme, Typography } from "@mui/material";

interface Props {
  title: string;
  children?: any;
  className?: string;
}
const Field = memo((props: Props) => {
  const { title, children, className } = props;
  return (
    <div className={`py-2 ${className ? className : "flex"}`}>
      <div className="font-bold min-w-[150px] mr-4">{title}</div>
      {children}
    </div>
  );
});

export default Field;
