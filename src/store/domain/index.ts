import { useSelector } from "react-redux";

import { useAppDispatch } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInfoHost, DataHost } from "@/types/web";

// Define a type for the slice state

interface DomainState {
  domainCustom?: string;
  ipNew?: string;
  timeCoundown?: number;
}

// Define the initial state using that type
const initialState: DomainState = {
  domainCustom: undefined,
  ipNew: "64.45.24.124",
  timeCoundown: undefined,
};

export const domainSlide = createSlice({
  name: "domain",
  initialState,
  reducers: {
    changeDomainCustom: (state, action: PayloadAction<string>) => {
      state.domainCustom = action.payload;
    },
    changeTimeCustom: (state, action: PayloadAction<number>) => {
      state.timeCoundown = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const useDomainSelector = () =>
  useSelector((state: RootState) => state.domain);
export const useDomainCustomSelector = () =>
  useSelector((state: RootState) => state.domain.domainCustom);
export const useIpSelector = () =>
  useSelector((state: RootState) => state.domain.ipNew);
export const useTimeSelector = () =>
  useSelector((state: RootState) => state.domain.timeCoundown);

export const useDomainAction = () => {
  const { changeDomainCustom, changeTimeCustom } = domainSlide.actions;
  const dispatch = useAppDispatch();

  const changeDomainInput = (value: string) => {
    dispatch(changeDomainCustom(value));
  };

  const changTimeCoundown = (value: number) => {
    dispatch(changeTimeCustom(value));
  };

  return { changeDomainInput, changTimeCoundown };
};

export default domainSlide.reducer;
