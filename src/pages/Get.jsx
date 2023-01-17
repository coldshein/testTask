import axios from 'axios';
import React from 'react';
import CardItem from '../components/CardItem';

const Get = () => {
    const [users, setUsers] = React.useState();
    const [count, setCount] = React.useState(6);
    const [show, setShow] = React.useState(true)
    const getItems = async (count) => {
        const { data } = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`);
        setUsers(data.users);

    }

    const showMore = () => {
        setCount((prev) => prev + 6)
        getItems(count);
    }

    React.useEffect(() => {
        getItems(6);
    }, [])

    const sortedUsers = users?.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
    );


    return (
        <section class="get">
            <div class="container">
                <div class="get-inner">
                    <h1>Working with GET request</h1>
                    <div class="card-container">
                        {
                            sortedUsers ? sortedUsers.map((user, index) => <CardItem {...user} key={user.id} />) : null
                        }
                    </div>
                    <button class="yellow-btn" onClick={showMore}>Show more</button>
                </div>
            </div>
        </section>
    );
}

export default Get;