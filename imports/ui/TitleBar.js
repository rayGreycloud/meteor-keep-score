import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h3>{this.props.subtitle}</h3>
    }
    // else statement not require - implicit return undefined
  }

  render() {

    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

// If default props desired
TitleBar.defaultProps = {
//  title: 'Scorekeeper'
};

export default TitleBar;
