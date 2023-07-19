import React, { memo } from "react";
import { Grid, Theme, Typography } from "@mui/material";
import Field from "@/components/Field";
import Table, { HeaderProps } from "@/components/Table";
import { IInfoHost } from "@/types/web";
import CopyHelper from "@/components/CopyHelper";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import Countdown from "react-countdown";
import { useDomainCustomSelector, useTimeSelector } from "@/store/domain";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { useRouter } from "next/router";

const StepThree = memo(() => {
  const headers: HeaderProps[] = [
    {
      name: "Host",
      align: "left",
    },
    {
      name: "Loại",
      align: "left",
    },
    {
      name: "Giá trị",
      align: "left",
    },
  ];

  const renderItem = (item: IInfoHost) => {
    const { host, value, category } = item;
    return [
      <Typography key={host} className="">
        {host}
      </Typography>,
      // tslint:disable-next-line:max-line-length
      <Typography key={category}>{category}</Typography>,
      <Grid className="flex justify-between">
        <Grid className="">{value}</Grid>
        <CopyHelper text={value}>
          <div className="bold text-blue-500 cursor-pointer">Copy value</div>
        </CopyHelper>
      </Grid>,
    ];
  };

  const mockdata: IInfoHost[] = [
    {
      host: "@",
      category: "a",
      value: "123.45.24.124",
    },
  ];

  const router = useRouter();

  // Renderer callback with condition
  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      router.push({
        query: { step: 4 },
      });
      // Render a completed state
      return <div className="h-22-px"></div>;
    } else {
      // Render a countdown
      return (
        <div className="text-white text-3xl font-bold flex justify-center items-center bg-gray-600 py-4 px-2 w-[180px] rounded-lg">
          <HourglassBottomIcon fontSize="large" className="mr-2 text-3xl" />

          {`${minutes.toString().padStart(2, "0") || "00"}:${
            seconds.toString().padStart(2, "0") || "00"
          }s`}
        </div>
      );
    }
  };
  const duration = useTimeSelector();
  const LockDurationTime = memo(() => {
    return <Countdown date={duration} renderer={renderer} />;
  });
  const domainNew = useDomainCustomSelector();

  return (
    <Grid>
      <LockDurationTime />
      <Field title="Tên miền">{domainNew}</Field>
      <Field title="Trạng thái">
        {" "}
        <div className="bg-[#ffbf65] px-3 py-[2px] flex rounded-2xl text-white">
          Hệ thống đang kết nối
        </div>
      </Field>
      <Field title="IP KiotVietWeb" className="flex flex-col">
        <Table headers={headers} items={mockdata} renderItem={renderItem} />
      </Field>
      <Grid className="flex border-orange-300 border-2 rounded-xl my-2 bg-orange-100 p-4">
        <WarningAmberIcon className="mr-2"></WarningAmberIcon>

        <div className="">
          Hệ thống đang thiếy lập tên miền. Bạn có thể truy cập sau
          <span className="font-bold"> 10 phút</span>, nếu không được xin liên
          hệ hotline<span className="font-bold"> 19006522</span> để được hỗ trợ.
        </div>
      </Grid>
    </Grid>
  );
});

export default StepThree;
