import styled from '@emotion/styled';
import Head from 'next/head';
import { ChangeEventHandler, useState } from 'react';

const Main = styled.main`
  padding: 8rem 2.4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1.6rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  max-width: 76.8rem;
  height: 30rem;
  border: 0.1rem solid #dee2e6;
  border-radius: 12px;
  background: #ffffff;
  padding: 1.2rem 1.4rem;
  outline: 0;
  resize: none;
  color: #495057;

  &::selection {
    background: #c2b6ff;
  }

  @media (hover: hover) {
    &:hover {
      border: 0.1rem solid #c2b6ff;
    }
  }

  &:active {
    border: 0.1rem solid #c2b6ff;
  }

  &:focus {
    border: 0.1rem solid #6244ff;
  }

  &:disabled {
    color: #868e96;
    background: #f8f9fa;
    border: 0.1rem solid #dee2e6;
    opacity: 1;
    -webkit-text-fill-color: #868e96;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const ReplaceButton = styled.button`
  margin-top: 1.6rem;
  height: 5.6rem;
  padding: 1.6rem 1.95rem;
  color: #ffffff;
  background: #6244ff;
  border: 0;
  border-radius: 1.6rem;
  transition: 0.3s;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.08rem;

  @media (hover: hover) {
    &:hover {
      background: #4127d1;
    }
  }

  &:active {
    background: #4127d1;
  }

  &:disabled {
    background: #c2b6ff;
  }
`;

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChangeTextAreaValue: ChangeEventHandler<HTMLTextAreaElement> = ({ target }) => {
    const { value } = target;

    setTextAreaValue(value);
  };

  const handleReplaceNbsp = () => {
    const replacedNbsp = textAreaValue.replace(/&nbsp;/g, ' ');

    setTextAreaValue(replacedNbsp);
  };

  const isDisabled = textAreaValue === '';
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>nbsp ?????????</Title>
        <TextArea value={textAreaValue} onChange={handleChangeTextAreaValue} />
        <ReplaceButton type="button" onClick={handleReplaceNbsp} disabled={isDisabled}>
          ????????????
        </ReplaceButton>
      </Main>
    </>
  );
}
