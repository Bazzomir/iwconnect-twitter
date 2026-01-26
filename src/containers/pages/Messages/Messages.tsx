import styled from 'styled-components';
import { Button } from '../../../components/Button/Button';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { PageWrapperComponent } from '../../PageWrapper/PageWrapperComponent';

export const Messages = () => {
  return (
    <PageWrapperComponent>
      <div className="col-12 col-md-9">
        <div className="row gap-5">
          <Styled.HeaderContainer>
            <Styled.Header>Messages</Styled.Header>
            <Styled.HeaderIcon>
              <AiOutlineSetting />
              <MdOutlineForwardToInbox />
            </Styled.HeaderIcon>
          </Styled.HeaderContainer>
          <div className="col-12 my-3">
            <Styled.TextContainer className="mt-5">
              <Styled.TextWrapper>Welcome to your inbox!</Styled.TextWrapper>
              <Styled.TextParagraphWrapper>
                Drop a line, share Tweets and more with private conversations between you and others
                on Twitter.
              </Styled.TextParagraphWrapper>
              <div className="col-12 col-sm-8 col-md-6">
                <Button nameButton="Start a conversation" />
              </div>
            </Styled.TextContainer>
          </div>
          <div className="col-12 mt-5">
            <Styled.TextContainer>
              <Styled.TextWrapper>Select a message</Styled.TextWrapper>
              <Styled.TextParagraphWrapper>
                Choose from your existing conversations, start a new one, or just keep swimming.
              </Styled.TextParagraphWrapper>
              <div className="col-6">
                <Button nameButton="New message" />
              </div>
            </Styled.TextContainer>
          </div>
        </div>
      </div>
    </PageWrapperComponent >
  );
};

export const Styled = {
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
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
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    margin: auto;
    wight: 100%;
  `,
  TextParagraphWrapper: styled.p`
    align-items: center;
    color: grey;
    padding: 0 10px;
  `,
  TextWrapper: styled.div`
    align-items: center;
    padding-left: 10px;
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    padding: 10px 0 10px 0;
    font-size: 37.5px;
    font-weight: bold;
  `,
};
