import { StatusType } from "@/types/web";
import React, { memo } from "react";

interface Props {
  status: StatusType;
}

const Status = memo((props: Props) => {
  const { status } = props;
  return status === "success" ? (
    <div className="bg-[#20da42] px-3 py-[2px] rounded-2xl text-white">
      Đã kết nối
    </div>
  ) : (
    <div className="bg-[#ffbf65] px-3 py-[2px] rounded-2xl text-white">
      Hệ thống đang kết nối
    </div>
  );
});

export default Status;
