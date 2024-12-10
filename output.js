import { useCallback, useDebugValue } from "react";
function useFoo() {
  return () => "foo";
}
function useBar() {
  useDebugValue("bar");
  return _temp;
}
function _temp() {
  return "bar";
}
function useBaz() {
  return _temp2;
}
function _temp2() {
  return "baz";
}
