

import { useRef } from "react";
import useApi from "../hooks/useApi";

export default function SeachBar() {
  const { setQuery } = useApi();
 const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

 function handleSearch(term: string) {
   if (debounceTimeout.current) {
     clearTimeout(debounceTimeout.current);
   }

   debounceTimeout.current = setTimeout(() => {
     setQuery(term);
   }, 300); // 300ms debounce delay
 }
  return (
    <label
      htmlFor="search"
      className="border pl-1 rounded-md flex gap-4 items-center">
      <img src="/search-icon.png" alt="search" width={20} height={20} />
      <input
        type="search"
        name="search"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="search by patients..."
        className="bg-transparent focus-visible:border-none border-none outline-none p-1 px-2"
      />
    </label>
  );
}
