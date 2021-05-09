import { useState, useEffect} from 'react';
import Users from '../components/Users';
import Loading from '../components/Loading';
import '../../src/User.css';

const People = () => {
    const [user, setUser] = useState([]);
    const [number, setNumber] = useState(100);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const url = `https://randomuser.me/api/?results=${number}&seed=abc&page=${pageNumber}`;
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setUser([...data.results]);
            setLoading(false)
        })
        .catch((err) => console.log(err));
    }, [number, pageNumber]);

    const handlePrevious = () => {
        if(pageNumber >= 2) {
            setPageNumber(pageNumber - 1);
        };
        return;
    };
    const handleNext = () => {
        setPageNumber(pageNumber + 1);
    };
    return (
        <div>
            <h1>Users Data</h1>
            <div className='select'>Number of Users: 
                <select onChange={(e) => setNumber(e.target.value)}>
                    <option value='100'>100</option>
                    <option value='50'>50</option>
                    <option value='30'>30</option>
                    <option value='10'>10</option>
                    <option value='5'>5</option>
                    <option value='1'>1</option>
                </select>
            </div>
            <h3>Page {(pageNumber)}</h3>
            <div className='laoding-container'>
                {loading ? <Loading /> : ''}
            </div>
            <div className="users-container">
                    {user.map((user) => (
                        <Users user={user} key={user.login.uuid} />
                    ))}        
            </div>
            <div className='pagination'>
                <button className='previous' type='button' 
                onClick={handlePrevious} disabled={pageNumber === 1 ? true : false}>
                    Previous
                </button>
                <button className='next' type='button' onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default People;