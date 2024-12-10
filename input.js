import { useCallback, useDebugValue } from "react";

function useFoo() {
  return () => "foo";
}

function useBar() {
  useDebugValue("bar");
  return () => "bar";
}

function useBaz() {
  return useCallback(() => "baz", []);
}
