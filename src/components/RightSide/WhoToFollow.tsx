import { Styled, WhoToFollowItems, } from './RightSideItems/RightSideItems';

interface WhoToFollowProps {
  text: string;
}

export const WhoToFollow = ({ text }: WhoToFollowProps) => {
  return (
    <Styled.Container className="row">
      <Styled.TitleP>{text}</Styled.TitleP>
      <div className="col-12 m-0 p-0">
        <WhoToFollowItems textGrey="@clonebase" textWhite="Clonebase" />
        <WhoToFollowItems textGrey="@clonebase" textWhite="Clonebase" />
      </div>
    </Styled.Container>
  );
};
