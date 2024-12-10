import { useDebugValue } from "react";
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
