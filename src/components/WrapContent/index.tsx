import React, { memo } from "react";
import { Grid, Theme, Button } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  title: string;
  children: any;

  btn?: any;
}
const WrapContent = memo((props: Props) => {
  const { title, children, btn } = props;
  const router = useRouter();

  return (
    <Grid direction={"column"} className="bg-white rounded-lg">
      <div className="flex justify-between items-center border-gray border-b-[1px] p-4 cursor-pointer">
        <div className="font-bold  ">{title}</div>
        {btn}
      </div>
      {children}
    </Grid>
  );
});

export default WrapContent;
