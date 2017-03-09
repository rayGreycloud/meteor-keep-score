import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

// If default props desired
TitleBar.defaultProps = {
//  title: 'Scorekeeper'
};

export default TitleBar;
