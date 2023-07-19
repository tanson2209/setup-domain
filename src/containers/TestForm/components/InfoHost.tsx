import React, { memo } from "react";
import { Grid, Theme, Typography } from "@mui/material";
import Field from "@/components/Field";
import { DataHost } from "@/types/web";
import format from "date-fns/format";
import Status from "@/components/Status";

interface Props {
  data: DataHost;
}
const InfoHost = memo((props: Props) => {
  const { mockTime, name, status } = props.data;
  return (
    <Grid direction={"column"} className="p-4 ">
      <Field title="Tên miền">{name}</Field>
      <Field title="Trạng thái">
        <Status status={status} />
      </Field>
      <Field title="Ngày thêm">
        {` ${format(mockTime, "hh")} giờ  ${format(
          mockTime,
          "mm"
        )} phút, ngày ${format(mockTime, "dd/MM/yyyy")}`}
      </Field>
    </Grid>
  );
});

export default InfoHost;
