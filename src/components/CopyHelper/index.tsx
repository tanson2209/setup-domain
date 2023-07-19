import React, { memo, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
  text: string;
  children: any;
}

const CopyHelper = memo((props: Props) => {
  const { text, children } = props;
  const [isCopied, setIsCopied] = useState(false);
  const timeout = 500;
  useEffect(() => {
    if (isCopied) {
      const hide = setTimeout(() => {
        setIsCopied(false);
      }, timeout);

      return () => {
        clearTimeout(hide);
      };
    }
    return undefined;
  }, [isCopied, setIsCopied, timeout]);

  useEffect(() => {
    if (isCopied) {
      window.alert("copied!");
    }
  }, [isCopied]);

  return (
    <CopyToClipboard
      text={text}
      onCopy={() => {
        setIsCopied(true);
      }}
    >
      {children}
    </CopyToClipboard>
  );
});

export default CopyHelper;
