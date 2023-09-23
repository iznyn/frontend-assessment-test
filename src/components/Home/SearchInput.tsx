/**
 * Search Input
 */
import { FC, useState } from 'react';
import styled from 'styled-components';
import { IconSearch } from './IconSearch';

const Wrapper = styled.div`
  width: 240px;
  margin: 0 auto;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 12px;
  font-size: 14px;
  line-height: 16px;
  background-color: #fdfdfd;
  border: 1px solid #cccccc;
  border-radius: 50px;
  outline: none;
  color: #3f3f3f;
`;

const Submit = styled.button`
  border: 0 none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 4px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ISearchInput {
  onChange(keyword: string): void;
}

export const SearchInput: FC<ISearchInput> = ({ onChange }) => {
  const [value, setValue] = useState('');

  return (
    <Wrapper>
      <Input 
        type="text"
        name="keyword"
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
      />
      <Submit 
        type="button"
        onClick={() => onChange(value)}
      >
        <IconSearch />
      </Submit>
    </Wrapper>
  );
}
