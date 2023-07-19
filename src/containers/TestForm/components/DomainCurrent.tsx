import WrapContent from "@/components/WrapContent";
import React, { memo, useMemo, useState } from "react";
import InfoHost from "./InfoHost";
import { useRouter } from "next/router";
import { useTimeSelector, useDomainCustomSelector } from "@/store/domain";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const DomainCurrent = memo(() => {
  const router = useRouter();
  const duration = useTimeSelector();
  const name = useDomainCustomSelector();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const btnBack = useMemo(() => {
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              router.push("/");
              handleClose();
            }}
          >
            Huỷ kết nối
          </MenuItem>
        </Menu>
      </div>
    );
  }, [anchorEl]);

  return (
    <WrapContent title="Tên miền hiện tại" btn={btnBack}>
      <InfoHost
        data={{
          mockTime: duration,
          name: name,
          status: "success",
        }}
      />
    </WrapContent>
  );
});

export default DomainCurrent;
