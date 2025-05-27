import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover { background: #63e6be; }
  &:active { background: #20c997; }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;

  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover { background: #ff8787; }
      &:active { background: #fa5252; }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 16px 16px;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: { id: nextId.current, text: value, done: false },
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter를 누르세요"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);