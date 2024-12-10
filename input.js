import { useDebugValue } from "react";

function useFoo() {
  return () => "foo";
}

function useBar() {
  useDebugValue("bar");
  return () => "bar";
}
