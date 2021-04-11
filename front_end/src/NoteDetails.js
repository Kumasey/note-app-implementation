import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export class NoteDetails extends Component {
    state = {
        note: {},
    };
    componentDidMount() {
        const fetchData = async () => {
          try {
            const url = `http://localhost:3001/notes/${this.props.match.params.id}`;
            const res = await fetch(url);
            const resp = await res.json();
            this.setState({
              note: resp,
            });
            // console.log('----->', resp)
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }
      handleDelete =()=> {
        const deleteNote = async () => {
          alert('Delete Note?')
          try {
            const url = `http://localhost:3001/notes/${this.props.match.params.id}`;
            const res = await fetch(url, {
            method: 'DELETE',
        });
        const resp = await res.json();
        this.props.history.push('/');
        alert(resp.message);
        // console.log('---->', resp.message);
          } catch (error) {
            console.log(error);
          };
        };
        deleteNote();
      };
      render() {
        const { note } = this.state;
        return (
          <div className="container">
            <div className="note-details">
              <Link to="/">
                <button className="back-btn">Back | Home</button>
              </Link>
              <h3>Note Details</h3>
    
              <div className='paragraph'>
                <h5>Title: {note ? note.title : ''}</h5>
                <div>{note ? note.content : ''}</div>
              </div>
    
              <div className='btnn'>
                <Link to={`/edit/${note._id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        );
      }
}

export default NoteDetails;