ProfileLink = React.createClass({
  render() {
    let userName = Meteor.userName;
    return (
      <span>{userName}</span>
    );
  }
});
