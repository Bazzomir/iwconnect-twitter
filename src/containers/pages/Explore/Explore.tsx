import styled from 'styled-components';
import { SearchBar } from '../../../components/RightSide/SearchBar';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { TrendsForYouItems } from '../../../components/RightSide/RightSideItems/RightSideItems';
import { ExploreImageBox } from './ExploreImageBox';
import { PageWrapperComponent } from '../../PageWrapper/PageWrapperComponent';

export const Explore = () => {
  return (
    <PageWrapperComponent>
      <div className="col-12 col-md-9 col-lg-6">
        <Styled.HeaderContainer>
          <div className="col-11">
            <SearchBar icon={<BsSearch />} />
          </div>
          <div className="col-1">
            <AiOutlineSetting />
          </div>
        </Styled.HeaderContainer>
        <ExploreImageBox />
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
          {/* <TrendsForYouItems
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
          /> */}
        </Styled.TrendsForYouContainer>
      </div>
    </PageWrapperComponent>
  );
};

const Styled = {
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-weight: bold;
  `,
  HeaderTrendsForYou: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 20px;
    font-weight: bold;
  `,
  TrendsForYouContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left: 10px;
  `,
};
