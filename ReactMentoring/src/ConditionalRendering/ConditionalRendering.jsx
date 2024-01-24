const UserGreeting = () => <h1>Welcome back, User!</h1>;

const GuestGreeting = () => <h1>Please sign up.</h1>;

const Greeting = ({ isLoggedIn }) =>
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

const ConditionalRendering = () => {
  const userIsLoggedIn = false;
  return (
    <div>
      <Greeting isLoggedIn={userIsLoggedIn} />
    </div>
  );
};

export default ConditionalRendering;
