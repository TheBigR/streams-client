import React from 'react';
import { connect } from 'react-redux';


const StreamEdit  = (props) => {  

return (
<div>{props.stream.title}</div>
    ); 
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect (mapStateToProps)(StreamEdit);
