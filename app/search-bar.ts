import { querySelectorMemoized } from "./utils";

export default function changeSearchBar() {
  const searchBarInput = querySelectorMemoized<HTMLInputElement>(
    "input[aria-label='Search query']"
  );

  if (searchBarInput) searchBarInput.placeholder = "Search Twitter";
}
