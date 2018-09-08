import React, { Component, ReactFragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

//please note: I used PropsType checking as its good to check the datatype that we expect before we use the props 

class CommentList extends Component {

  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }

  renderComments() {

    return _.map(this.props.allComments, comm =>{ // note: we have to use lodashes map because when we dealing with objects ( like in this case) they do not have their own map like arrays do
      return (
        <div class="row mb-4" key = { comm.name }>
          <div class="col">
            <div class="card">
              <h6 class="card-header">{comm.name}</h6>
              <div class="card-body">
                <h5 class="card-title">{comm.title}</h5>
                <p class="card-text">{comm.comment}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    
  }


  render() {
    return (
      <ReactFragment>
        <div className="row mb-4">
          <div className="col">
            <button type="button" className="btn btn-primary" onClick={() => { this.props.setFlag(true) }}>Add Comment</button>
          </div>
        </div>
        {this.renderComments()}
      </ReactFragment>
    );
  } //note: React Fragment learned and used here
}

const mapStateToProps = state => {
  return { allComments: state.comments };
};

CommentList.PropTypes = { //proptypes checking here
  name : PropTypes.string,
  title : PropTypes.string,
  comment : PropTypes.string,
}

export default connect(mapStateToProps)(CommentList);