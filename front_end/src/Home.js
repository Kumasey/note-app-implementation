import React, { Component } from "react";
import AddNote from './AddNote';
import { Link } from 'react-router-dom';
import './Home.css'


export class Home extends Component {
    state = {
        note: [],
        title: '',
        content: '',
    };
    componentDidMount() {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3001/notes');
                const note  = await res.json();
                this.setState({
                    note,
                });
                // console.log('--------->', note)
            } catch (error) {
                console.log(error);
            };
        };
        fetchData();
    };
    onChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        const { title, content } = this.state;
        const data = {
            title,
            content,
        };
        // console.log('--------->', data);
        const addNote = async () => {
            try {
                const url = 'http://localhost:3001/notes';
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                const respBody = await res.json();
                this.setState({
                    note: [...this.state.note, respBody],
                    title: '',
                    content: '',
                });
                // console.log('------->',respBody);
            } catch (error) {
                console.log(error);
            };
        };
        addNote();
    }
    render() {
        const { title, content, note } = this.state;
        return(
            <div className='note_home'>
                <div className='form_'>
                    <h2>NOTES</h2>
                    <ul>
                        {note && note.length > 0 
                        ? note.map(({title, _id}) => (
                            <li key={_id}>
                                <Link to={`/notes/${_id}`}>{title}</Link>
                            </li>
                        ))
                    : 'no Note found'}
                    </ul>
                </div>
                <div className='form'>
                    <AddNote
                        onSubmit={this.onSubmit}
                        title={title}
                        content={content}
                        onChange={this.onChange}
                    />
                </div>  
            </div>
        )
    };
};

export default Home;