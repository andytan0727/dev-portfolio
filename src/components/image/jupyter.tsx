import React from "react";

import JupyterSVG from "@src/images/jupyter.svg";

interface JupyterProps {
  size: number | string;
}

const Jupyter: React.FC<JupyterProps> = (props: JupyterProps) => {
  const { size } = props;

  return (
    <JupyterSVG
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Jupyter;
