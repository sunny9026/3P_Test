import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addComment } from "../Actions/index";




class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            namefield : null,  //please note: always a good practice to bind all the inputs to state only so to make them controlled fields
            titlefield : null,
            commentfield : null,
            formValid : true
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
        console.log(event.target.name.value.length)
        if(event.target.name.value.length === 0 || event.target.title.value.length === 0 || event.target.comment.value.length === 0){
            event.preventDefault();
            this.setState({ formValid : false });
        }
        else{
            let payload = {
                name : event.target.name.value,
                title : event.target.title.value,
                comment : event.target.comment.value
            }

            this.props.addComment(payload);
            this.props.setFlag(false);
        }
        
    }


    render() {
        return(
            <div className="row">
            <div className="col">
        
            { this.state.formValid ? null  : <div className="alert alert-danger" role="alert">
                All fields are required.
        </div> 
    }
              
              <form onSubmit = { this.handleFormSubmit }>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" id="name" name="name" placeholder="Enter user name" value={this.state.namefield} onChange={event => this.setState({namefield : event.target.value})} /> 
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" id="title" name="title" placeholder="Enter comment title" value={this.state.titlefield} onChange={event => this.setState({titlefield : event.target.value})} />
                </div>
                <div className="form-group">
                  <label>Comment</label>
                  <textarea className="form-control" id="comment" name="comment" placeholder="Enter comment" value={this.state.commentfield} onChange={event => this.setState({commentfield : event.target.value})} />
                </div>
        
                <div className="text-right">
                  <button type="button" className="btn btn-secondary" onClick = { () => { this.props.setFlag(false) } }>Cancel</button>
                  &nbsp;
                  <button type="submit" value="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {  
    return {  
        addComment: comment => dispatch (addComment(comment))  
    };  
}; 

export default connect(null,mapDispatchToProps)(CommentForm);

