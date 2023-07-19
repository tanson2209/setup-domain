import React, { memo } from "react";
import { Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import WrapContent from "@/components/WrapContent";
import Step from "./components/Step";
import InfoHost from "./components/InfoHost";
import { useRouter } from "next/router";
import DomainCurrent from "./components/DomainCurrent";

const useStyles = makeStyles((theme: Theme) => ({
  marginTop20: {
    marginTop: 20,
  },
}));

interface Props {}

const HomepageDetail = memo((props: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const { step } = router?.query;
  const mockTime = 1689701861000;
  return (
    <Grid
      xs={12}
      item
      container
      justifyContent={"center"}
      className=" h-screen  text-black"
    >
      <Grid
        xs={5}
        item
        direction={"column"}
        className="bg-[#CCFFFF] space-y-4"
        padding={5}
      >
        <Grid direction={"column"}>
          <div className="text-2xl font-bold">Tên miền</div>
          <div className="text-[#868686]">
            Tăng khả năng hiển thị của website
          </div>
          <div className="text-[rgb(134,134,134)]">
            Bạn có thể{" "}
            <Link href="/" className="text-blue-500 underline">
              xem hướng dẫn tại đây
            </Link>
          </div>
        </Grid>
        <WrapContent title="Tên miền mặc định">
          <InfoHost
            data={{
              mockTime: mockTime,
              name: "cuahangxx.kiotviet.vn",
              status: "success",
            }}
          />
        </WrapContent>
        {step === "4" ? <DomainCurrent /> : <Step />}
      </Grid>
    </Grid>
  );
});

export default HomepageDetail;
