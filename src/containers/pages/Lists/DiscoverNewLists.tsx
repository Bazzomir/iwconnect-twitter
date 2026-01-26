import styled from 'styled-components';
import {LightButton} from '../../../components/Button/Button';

export const DiscoverNewLists = () => {
  return (
    <div className="col-12" style={{borderBottom: '1px solid white'}}>
      <h3 style={{color: 'white'}}>Discover new Lists</h3>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                Tennis
                <Styled.TextWhiteGrey>_danielgoggi_</Styled.TextWhiteGrey>
                <Styled.TextGrey>@DanielGoggi</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                Football
                <Styled.TextWhiteGrey>Leo Messi</Styled.TextWhiteGrey>
                <Styled.TextGrey>@LeoMessi</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                JavaScript
                <Styled.TextWhiteGrey>Blagoj Jovanovski</Styled.TextWhiteGrey>
                <Styled.TextGrey>@BazzomirJ</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                Coffee
                <Styled.TextWhiteGrey>Coffee Time</Styled.TextWhiteGrey>
                <Styled.TextGrey>@CoffeeTime</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                Dogs
                <Styled.TextWhiteGrey>Dog Wispers</Styled.TextWhiteGrey>
                <Styled.TextGrey>@dogwispers</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Styled.ImgWrapper src="https://i.pravatar.cc/100" />
        </div>
        <div className="col-6">
          <p>
            <Styled.TextP>
              <Styled.TextWhite>
                Cat
                <Styled.TextWhiteGrey>MyCatFromHell</Styled.TextWhiteGrey>
                <Styled.TextGrey>@MyCatFromHell</Styled.TextGrey>
              </Styled.TextWhite>
            </Styled.TextP>
          </p>
        </div>
        <div className="col-3" style={{margin: '20px 0 10px 0'}}>
          <LightButton nameButton="Follow" />
        </div>
      </div>
    </div>
  );
};

const Styled = {
  ImgWrapper: styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 20px;
    margin: 10px;
  `,
  TextP: styled.div`
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    margin: 5px 0 10px 0;
  `,
  TextGrey: styled.p`
    color: grey;
    font-size: 11px;
    margin: 0;
  `,
  TextWhiteGrey: styled.p`
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 11px;
    margin: 0;
  `,
  TextWhite: styled.p`
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 20px;
    height: 20px;
    margin-top: 0;
    margin-bottom: 6px;
  `,
};
