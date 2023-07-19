import WrapContent from "@/components/WrapContent";
import React, { memo, useMemo } from "react";
import { Grid, Theme, TextField, Button } from "@mui/material";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useDomainAction, useDomainCustomSelector } from "@/store/domain";
import { isValidDomain } from "@/utils/validate";
import { useRouter } from "next/router";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Step = memo(() => {
  const { changeDomainInput } = useDomainAction();
  const value = useDomainCustomSelector();
  const checkDomain = isValidDomain(value);
  const router = useRouter();
  const { step } = router?.query;
  const isStepOne = step === "1" || step === undefined || step === "";
  const onClickContinue = (value: number) => {
    router.push({
      query: { step: value },
    });
  };

  const { changTimeCoundown } = useDomainAction();

  const btnBack = useMemo(() => {
    return step === "2" || step === "3" ? (
      <div
        className="bg-blue-100 text-blue-500 font-bold px-4 py-2 rounded-xl text-center"
        onClick={() => {
          router.push("/");
        }}
      >
        <BorderColorIcon className="mr-2" />
        Thay đổi tên miền
      </div>
    ) : (
      <></>
    );
  }, [step]);

  return (
    <WrapContent title="Tên miền tuỳ chỉnh" btn={btnBack}>
      <Grid className="p-4">
        {isStepOne && (
          <TextField
            onChange={(event) => {
              changeDomainInput(event.target.value);
            }}
            value={value}
            className="py-2 w-full"
            error={!checkDomain}
            label="Nhập tên miền của bạn"
            helperText="Incorrect entry."
          />
        )}
        {step === "2" && <StepTwo />}
        {step === "3" && <StepThree />}
        <Grid
          container
          marginTop={4}
          item
          direction={"row"}
          justifyContent={"flex-end"}
        >
          {isStepOne && (
            <Button
              variant="contained"
              onClick={() => onClickContinue(2)}
              disabled={!checkDomain}
            >
              Tiếp tục
            </Button>
          )}
          {step === "2" && (
            <Button
              onClick={() => {
                onClickContinue(3);
                changTimeCoundown(Date.now() + 10 * 60 * 1000);
              }}
              variant="contained"
            >
              Kết nối
            </Button>
          )}
        </Grid>
      </Grid>
    </WrapContent>
  );
});

export default Step;
