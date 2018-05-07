import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class EditNewsletter extends Component {
    
    renderInput(field) {
        return <input className="form-control" {...field.input} type="field.type" />
    }

    handleFormSubmit() {

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <label htmlFor="title">Title</label>
                <Field name="title" component={this.renderInput} type="text" />
                <label htmlFor="body">Body</label>
                <Field name="body" component={this.renderInput} type="text" />

                <button action="submit" className="btn btn-primary" >Save</button>
                <Link to="/newsletter"><button className="btn btn-danger">Cancel</button></Link>
            </form>
        )

    }
}

EditNewsletter = reduxForm({form: 'editNewsletter'})(EditNewsletter)
export default EditNewsletter;