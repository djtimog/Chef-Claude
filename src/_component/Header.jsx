import chefRobot from "../assets/chef-robot.png";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#">
          <img
            src={chefRobot}
            alt="A robot chef icon as the logo"
            srcSet={chefRobot}
          />
          <h1>Chef Claude</h1>
        </a>
      </nav>
    </header>
  );
}
