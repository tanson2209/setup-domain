import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { useUserSelector } from "@/store/user";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const HeaderStyled = styled.header`
  /* .active {
    color: #43e3ff;
  }

  .menu-item:hover {
    color: #43e3ff;
  } */
`;

const Header = ({ isFullWidth = false }: { isFullWidth?: boolean }) => {
  const { pathname, asPath, query } = useRouter();
  const { userInfo, tokens } = useUserSelector();
  const router = useRouter();

  const menu = [
    { path: "/", title: "自分の記録", icon: "/svgs/icon_info.svg" },
    { path: "/my-record", title: "チャレンジ", icon: "/svgs/record.svg" },
    { path: "/column", title: "お知らせ", icon: "/svgs/icon_memo.svg" },
  ];

  return (
    <HeaderStyled
      className={`flex h-[72px] w-full justify-center sticky top-0 z-10 bg-dark-600 ${
        isFullWidth && "border-b border-solid border-light-200"
      }`}
    ></HeaderStyled>
  );
};

export default Header;
