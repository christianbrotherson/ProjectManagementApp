import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EditNewsletter extends Component {

    componentDidMount() {
        this.props.fetchNewsletterById(this.props.match.params._id)
    }
    
    
    renderInput(field) {
        return (
            <div>
                <label htmlFor={field.input.name}>{field.input.name}</label>
                <input className="form-control" {...field.input}/>
            </div>
        )
    }

    handleFormSubmit({title, body}) {
        this.props.saveNewsletterEdit({title, body}, this.props.match.params._id)
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="title" component={this.renderInput} type="text" />
                <Field name="body" component={this.renderInput} type="textarea" />


                <button className="btn btn-primary btn-block">Save</button>
                <Link to="/newsletter"><button className="btn btn-danger btn-block">Cancel</button></Link>
            </form>
        )

    }
}

function mapStateToProps(state) {
    return { initialValues: state.newsletter.fetchedItem }
}

EditNewsletter = reduxForm(
    {
        form: 'editNewsletter',
        enableReinitialize: true
    }
)(EditNewsletter)

export default connect(mapStateToProps, actions)(EditNewsletter);