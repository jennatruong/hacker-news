import { createGlobalState } from 'react-hooks-global-state';

// https://github.com/dai-shi/react-hooks-global-state

export const { useGlobalState } = createGlobalState({
  count: 0,
  currentPage: "newstories",
  selectedButton: "New Stories",
  loaded: "false",
  currentStories: Array()
});