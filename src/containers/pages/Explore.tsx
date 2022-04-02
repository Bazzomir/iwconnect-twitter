import React from 'react';
import styled from 'styled-components';
import {SearchBar} from '../../components/RightSide/SearchBar';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineSetting} from 'react-icons/ai';
import {TrendsForYouItems} from '../../components/RightSide/RightSideItems/RightSideItems';

export const Explore = () => {
  return (
    <div className="col-6">
      <Styled.HeaderContainer>
        <SearchBar icon={<BsSearch />} />
        <Styled.HeaderIcon>
          <AiOutlineSetting />
        </Styled.HeaderIcon>
      </Styled.HeaderContainer>
      <Styled.TrendsForYouContainer>
        <Styled.HeaderTrendsForYou>Trends for You</Styled.HeaderTrendsForYou>
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Music • Trending"
          textBold={'Britney'}
          textNum="16.6K Tweets"
        />
        <TrendsForYouItems
          textGrey="JungBook • Trending"
          textBold={'junkBook'}
          textNum="1.08M Tweets"
        />
        <TrendsForYouItems
          textGrey="Politics • Trending"
          textBold={'Russia'}
          textNum="839K Tweets"
        />
        <TrendsForYouItems
          textGrey="Trending in North Macedonia"
          textBold={'#crypto'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
        <TrendsForYouItems
          textGrey="Digital assets & cryptodocumentary • Trending"
          textBold={'#Bitcoin 💰'}
          textNum="358K Tweets"
        />
      </Styled.TrendsForYouContainer>
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
    font-weight: bold;
  `,
  HeaderIcon: styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    padding-right: 15px;
    margin: auto;
    flex: 1;
  `,
  HeaderTrendsForYou: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: white;
    font-size: 20px;
    font-weight: bold;
  `,
  TrendsForYouContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 10px;
    border: 1px solid white;
  `,
};
