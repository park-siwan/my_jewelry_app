import React, { Component } from 'react';

class Subject extends Component {
  render(){
    console.log('Subject render');
    return (
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();//새로고침 방지
          this.props.onChangePage();//App컴포넌트에서 
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;