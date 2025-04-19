export default function changeSearchBar() {
  const searchBarInput = document.querySelector<HTMLInputElement>(
    "input[data-testid=SearchBox_Search_Input]"
  );

  if (searchBarInput) searchBarInput.placeholder = "Search Twitter";
}
