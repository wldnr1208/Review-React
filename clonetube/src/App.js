import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <SearchHeader />
      {/* searchheader에는 네트워크 통신을 하지 않으니까 우산은 outlet에 씌우자 */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
