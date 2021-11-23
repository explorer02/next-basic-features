import * as React from "react";

export const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div>
      <div
        style={{
          height: "4rem",
          background: "black",
          color: "white",
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Header
      </div>
      <div>{children}</div>
    </div>
  );
};
