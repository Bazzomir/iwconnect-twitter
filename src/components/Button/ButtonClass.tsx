import React, {Component} from 'react';

interface Props {
  backgraundColor: string;
  textColor?: string;
  name?: string;
}

class ButtonClass extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: ['Ognen', 'Blagoj'],
      posts: [],
      comments: [],
      nekojBroj: 0,
      nekojBool: true,
    };
  }

  componentDidMount() {
    this.setState({
      users: ['Blagoj'],
    });
  }

  render() {
    const {backgraundColor, textColor, name} = this.props;

    return (
      <div
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
      </div>
    );
  }
}

export default ButtonClass;
