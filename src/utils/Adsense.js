import React, { Component, PropTypes } from 'react';

class Adsense extends Component {
  
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  
  render() {
    return (
      <div style={this.props.wrapperDivStyle} > 
        <ins className="adsbygoogle"  
          style={{'display': 'block'}}
          data-ad-client={this.props.client}
          data-ad-slot={this.props.slot}
          data-ad-format={this.props.format}>
        </ins>
      </div>
    );
  }
}

export default Adsense;