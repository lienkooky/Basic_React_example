import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      subject: { title: 'WEB', sub: 'world wide web!' },
      welcome: { title: 'welcome', sub: 'hello react!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' },
      ],
    };
  }
  render() {
    const { subject, contents, mode, welcome } = this.state;
    let _title,
      _desc = null;
    if (mode === 'welcome') {
      _title = mode.title;
      _desc = welcome.sub;
    } else if (mode === 'read') {
      _title = contents[0].title;
      _desc = contents[0].desc;
    }
    return (
      <div className="App">
        <Subject title={subject.title} sub={subject.sub}></Subject>
        <TOC data={contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
