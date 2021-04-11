import React, { Component } from 'react';

export class AddNote extends Component {
    render() {
        return(
            <div className='btn'>
                <form onSubmit={this.props.onSubmit}>
                    <div className='form_group'>
                        <label>TITLE</label><br/>
                        <input
                        type='text'
                        name='title'
                        value={this.props.title}
                        onChange={this.props.onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>CONTENT</label><br/>
                        <textarea
                            type='text'
                            name='content'
                            value={this.props.content}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <button>Add Note</button>
                </form>
            </div>
        )
    }
}

export default AddNote;