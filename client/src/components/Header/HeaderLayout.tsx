import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
export default function HeaderLayout() {
  return (
    <>
      <header>
        {" "}
        <div
          style={{
            backgroundColor: "whitesmoke",
            height: "40px",
            color: "black",
          }}
        >
          {" "}
          머리{" "}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
