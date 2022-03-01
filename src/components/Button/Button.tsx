import React, {useState, useRef} from 'react';

interface Props {
  backgraundColor: string;
  textColor?: string;
  name?: string;
}

interface State {
  user: string[];
  posts: string[];
  comments: string[];
  nekojBroj: number;
  nekojBool: boolean;
}

const Button = ({name, backgraundColor, textColor = 'grey'}: Props) => {
  const [clicked, setCliced] = useState<number>(0);
  const [text, setText] = useState<string>();
  const someRef = useRef<HTMLDivElement>(null);

  const onClick = (event: any) => {
    console.log('event', clicked);
    setCliced(prevState => {
      return prevState + 1;
    });
    // someRef?.current?.innerHTML = clicked;
  };

  // const [users, setUsers] = useState<string[]>(['Ognen', 'Blagoj']);
  // const [posts, setPosts] = useState<string[]>(['nekoj post']);
  // const [comments, setComments] = useState<string[]>([]);
  // const [nekojBroj, setNekojBroj] = useState<number>(0);
  // const [nekojBool, setNekojBool] = useState<boolean>(true)'

  // const [state, setState] = useState<State>({
  //     user: ['Ognen', 'Blagoj'],
  //     posts: [],
  //     comments: [],
  //     nekojBroj: 0,
  //     nekojBool: true,
  // })
  // setState({
  //     ...state,
  //     posts: ['nekoj post'],
  // })

  // const person = {
  //     name: "Bazzo",
  //     lastname: "Jovanovski",
  //     languages: ['Macedonian', 'English']
  // }
  // console.log(person)
  // const array = ['Blagoj', 'Jovanovski']
  // console.log(array)

  return (
    <>
      <div
        ref={someRef}
        onClick={onClick}
        onMouseOver={() => {
          console.log('hovered over button');
        }}
        style={{
          backgroundColor: backgraundColor,
          color: textColor,
          borderRadius: '30px',
          padding: '10px 30px',
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {name}
        {/* {!person.name ? name : name} */}
      </div>
      <input
        value={text}
        onChange={event => {
          console.log('event', event.target.value);
        }}
      />
    </>
  );
};

export default Button;
