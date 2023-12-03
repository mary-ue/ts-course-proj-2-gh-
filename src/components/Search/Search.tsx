import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';
import { Button } from 'components/Button';

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    const text = searchRef.current?.value || '';

    if (text) {
      onSubmit(text);
      if (searchRef.current) {
        searchRef.current.value = '';
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label className={styles.label} htmlFor="search">
          <SearchIcon />
        </label>
        <input 
          className={styles.textField}
          id="search"
          ref={searchRef}
          type="text"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && (
          <div className={styles.error}>
            No result
          </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
};