import React, { useCallback, useEffect, useRef, useState } from 'react';

import { magnifyingGlassVariants, useBoxAnimations } from './animation';
import { Input, SearchBase, SearchButton, SearchIcon } from './style';

export const NavBarSearch: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const searchBaseRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { animateInput, animateBase, focusAnimation } = useBoxAnimations({
    searchBaseRef,
    inputRef,
    openSearch,
    setOpenSearch,
  });

  const handleSearchClick = useCallback(() => {
    if (openSearch && searchInput.trim()) {
      // TODO: create search function
    }
    if (!openSearch) {
      setOpenSearch(true);
    }
  }, [openSearch, searchInput]);

  const handleSearchInput = useCallback(
    (changeEvent: React.ChangeEvent<HTMLInputElement>) =>
      setSearchInput(changeEvent.currentTarget.value),
    [setSearchInput],
  );

  useEffect(() => {
    if (inputRef && inputRef.current && !inputRef.current.disabled) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <SearchBase
      ref={searchBaseRef}
      animate={animateBase}
      onClick={(): Promise<void> => focusAnimation(false)}
    >
      <Input
        ref={inputRef}
        disabled={!openSearch}
        animate={animateInput}
        value={searchInput}
        onChange={handleSearchInput}
        onBlur={(): Promise<void> => focusAnimation(false)}
      />
      <SearchButton
        onClick={handleSearchClick}
        onBlur={(): Promise<void> => focusAnimation(false)}
      >
        <SearchIcon
          variants={magnifyingGlassVariants}
          animate={openSearch ? 'open' : 'rest'}
          width="100%"
        />
      </SearchButton>
    </SearchBase>
  );
};
