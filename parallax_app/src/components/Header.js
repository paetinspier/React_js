import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <h3>Task Tracker</h3>

        {showAddTask ? (
          <Button color="red" text="Done" onClick={onAdd}></Button>
        ) : (
          <Button color="green" text="Add" onClick={onAdd}></Button>
        )}
      </header>
    </div>
  );
};

Header.defaultProps = {
  name: "New User",
};

export default Header;
