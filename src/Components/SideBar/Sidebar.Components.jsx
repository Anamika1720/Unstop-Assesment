import {
  Admin,
  Container,
  Container1,
  Container2,
  Icon,
  MenuItem,
  SidebarContainer,
  Text,
} from "./SideBar.Styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Container>
        <Container1>
          <MenuItem>
            <Icon className="material-icons">dashboard</Icon>
            <Text>Dashboard</Text>
          </MenuItem>
          <MenuItem $active={true}>
            <Icon className="material-icons">assignment</Icon>
            <Text>Assessment</Text>
          </MenuItem>

          <MenuItem>
            <Icon className="material-icons">library_books</Icon>
            <Text>My Library</Text>
          </MenuItem>
        </Container1>

        <Container2>
          <Admin>Admin</Admin>
          <MenuItem>
            <Icon className="material-icons">check_circle</Icon>
            <Text>Round Status</Text>
          </MenuItem>
        </Container2>
      </Container>
    </SidebarContainer>
  );
};

export default Sidebar;
