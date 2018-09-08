import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import propTypes from 'prop-types';

//please note: I used PropsType checking as its good to check the datatype that we expect before we use the props 

class CommentList extends Component {

  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {

    return _.map(this.props.allComments, comm =>{ // note: we have to use lodashes map because when we dealing with objects ( like in this case) they do not have their own map like arrays do
      return (
        <div className="row mb-4" key = { comm.name }>
          <div className="col">
            <div className="card">
              <h6 className="card-header">{comm.name}</h6>
              <div className="card-body">
                <h5 className="card-title">{comm.title}</h5>
                <p className="card-text">{comm.comment}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    
  }


  render() {
    return (
      <React.Fragment>
        <div className="row mb-4">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={() => { this.props.setFlag(true) }}>Add Comment</button>
          </div>
        </div>
        {this.renderComments()}
      </React.Fragment>
    );
  } //note: React Fragment learned and used here
}

const mapStateToProps = state => {
  return { allComments: state.comments };
};

CommentList.propTypes = { //proptypes checking here
  name : propTypes.string,
  title : propTypes.string,
  comment : propTypes.string,
}

export default connect(mapStateToProps)(CommentList);
