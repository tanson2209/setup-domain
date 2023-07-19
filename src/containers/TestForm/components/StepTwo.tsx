import React, { memo } from "react";
import { Grid, Theme, Typography } from "@mui/material";
import Field from "@/components/Field";
import Table, { HeaderProps } from "@/components/Table";
import { IInfoHost } from "@/types/web";
import CopyHelper from "@/components/CopyHelper";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useDomainCustomSelector, useIpSelector } from "@/store/domain";
import Link from "next/link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const StepTwo = memo(() => {
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
          <div className="bold text-blue-500 cursor-pointer">
            <ContentCopyIcon className="mr-2" />
            Sao chép
          </div>
        </CopyHelper>
      </Grid>,
    ];
  };

  const links = [
    { value: "matbao.vn", link: "https://matbao.vn" },
    { value: "cloudflare", link: "https://matbao.vn" },
    { value: "pavietnam", link: "https://matbao.vn" },
    { value: "nhà cung cấp khác", link: "https://matbao.vn" },
  ];

  const domainNew = useDomainCustomSelector();
  const ipNew = useIpSelector();

  const mockdata: IInfoHost[] = [
    {
      host: "@",
      category: "a",
      value: ipNew,
    },
  ];
  return (
    <Grid>
      <Field title="Tên miền">{domainNew}</Field>
      <Field title="IP hiện tại">{ipNew}</Field>
      <Field title="IP KiotVietWeb" className="flex flex-col">
        <Table headers={headers} items={mockdata} renderItem={renderItem} />
      </Field>
      <Grid className="flex border-orange-300 border-2 rounded-xl bg-orange-100 mt-4 p-4">
        <WarningAmberIcon className="mr-2"></WarningAmberIcon>
        <Grid>
          <div className="mb-4">
            <span className="font-bold">Lưu ý:</span> Nhập đúng địa chỉ Ip KVWEB
            sang nhà cung cấp. Thời gian kết nối IP sẽ tuỳ thuộc vào nhà cung
            cấp (khoảng 2-5 tiếng)
          </div>
          <div className="font-bold">Hướng dẫn chi tiết từ nhà cung cấp</div>
          <ul className="list-disc">
            {links.map((item, idx) => (
              <li key={idx} className="flex">
                <div className="mr-4">{item.value}</div>
                <Link
                  target="blank"
                  href={item.link}
                  className="text-blue-500 cursor-pointer underline"
                >
                  xem chi tiết
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
});

export default StepTwo;
