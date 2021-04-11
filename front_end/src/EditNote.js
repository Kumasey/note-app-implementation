import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddNote from './AddNote';

export class EditNote extends Component {
    state = {
        title: '',
        content: '',
    };
    componentDidMount() {
        const fetchData = async () => {
            try {
                const url = `http://localhost:3001/notes/${this.props.match.params.id}`;
                const res = await fetch(url);
                const resp = await res.json();
                this.setState({
                    title: resp.title,
                    content: resp.content,
                });
            } catch (error) {
                console.log(error);
            };
        };
        fetchData();
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { title, content } = this.state;
        const data = {
            title,
            content,
        };
        console.log(data);
        const editNote = async () => {
                const url = `http://localhost:3001/notes/${this.props.match.params.id}`;
                const res = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const resp = await res.json();
                console.log(resp);
                this.props.history.push('/');
        };
        editNote();
    };
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    render() {
        const { title, content } = this.state;
        return (
            <div className="note_edit">
                <Link to={`/notes/${this.props.match.params.id}`}>
                    <button>Back</button>
                </Link>
                <Link to='/'>
                    <button>Home</button>
                </Link>
                <h5>Edit Note</h5>
                <AddNote
                    onSubmit={this.onSubmit}
                    title={title}
                    content={content}
                    onChange={this.onChange}
                />
            </div>
        );
    };
};

export default EditNote;