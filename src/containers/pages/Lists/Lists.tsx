import React from 'react';
import styled from 'styled-components';
import {IoMdArrowBack} from 'react-icons/io';
import {RiPlayListAddLine} from 'react-icons/ri';
import {FiMoreHorizontal} from 'react-icons/fi';
import {DiscoverNewLists} from './DiscoverNewLists';

export const Lists = () => {
  return (
    <div className="col-6">
      <Styled.HeaderContainer>
        <Styled.FirstIcon>
          <IoMdArrowBack />
        </Styled.FirstIcon>
        <Styled.Header>Lists</Styled.Header>
        <Styled.HeaderIcon>
          <RiPlayListAddLine />
          <FiMoreHorizontal />
        </Styled.HeaderIcon>
      </Styled.HeaderContainer>
      <Styled.TextWrapper style={{marginBottom: '50px'}}>Pinned Lists</Styled.TextWrapper>
      <Styled.TextParagraphWrapper style={{alignItems: 'center', borderBottom: '1px solid white'}}>
        Nothing to see here yet — pin your favorite Lists to access them quickly.
      </Styled.TextParagraphWrapper>
      <DiscoverNewLists />
      <Styled.TextWrapper>Your Lists</Styled.TextWrapper>
      <Styled.TextParagraphWrapper>
        You haven't created or followed any Lists. When you do, they'll show up here.
      </Styled.TextParagraphWrapper>
    </div>
  );
};

const Styled = {
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
  `,
  HeaderIcon: styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    margin: auto;
  `,
  FirstIcon: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-strat;
    padding-right: 10px;
    color: white;
  `,
  TextParagraphWrapper: styled.p`
    display: row;
    align-items: left;
    color: grey;
    padding: 0 10px;
  `,
  TextWrapper: styled.div`
    align-items: center;
    padding-left: 10px;
    color: white;
    padding: 10px 0 10px 0;
    font-size: 20px;
    font-weight: bold;
  `,
  WhoToFollowContainer: styled.div`
    flex-direction: column;
    color: white;
    aling-text: center;
    justify-content: flex-start;
    border: 1px solid black;
  `,
};
