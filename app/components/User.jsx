const React = require('react');
const PropTypes = require('prop-types');

class User extends React.Component {
    render() {
        const friends = this.props.list.filter(function (friend) {
            return friend.friend === true;
        });
        const nonfriends = this.props.list.filter(function (friend) {
            return friend.friend === false;
        });

        return (
            <div>
                <h1>Friends</h1>
                <ul>
                    {friends.map(function (item) {
                        return <li key={"friend_" + item.name}> {item.name} </li>;
                    })}
                </ul>

                <hr />

                <h1> Non Friends </h1>
                <ul>
                    {nonfriends.map(function (item) {
                        return <li key={"nonfriend_" + item.name}> {item.name} </li>;
                    })}
                </ul>
            </div>
        )
    }
}

User.propTypes = {
    list: PropTypes.array.isRequired
}

User.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        friend: PropTypes.bool.isRequired
    }))
}

export default User;