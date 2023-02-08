import React from "react";
export * as AntD from "antd";
export * as Next from "@alifd/next";
export * as BizCharts from "bizcharts";

export async function foobar() {
  await fetch("/foobar");
}

export function Foobar(props: any) {
  return <div {...props}>Hi</div>;
}
