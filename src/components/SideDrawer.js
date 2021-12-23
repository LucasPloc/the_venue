import { Drawer, List, ListItem } from "@material-ui/core";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElement = (location) => {
    scroller.scrollTo(location, {
      duration: 1200,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElement("Top")}>
          To top
        </ListItem>
        <ListItem button onClick={() => scrollToElement("VenueInfo")}>
          Venue info
        </ListItem>{" "}
        <ListItem button onClick={() => scrollToElement("Highlights")}>
          Highlights
        </ListItem>{" "}
        <ListItem button onClick={() => scrollToElement("Princing")}>
          Pricing
        </ListItem>{" "}
        <ListItem button onClick={() => scrollToElement("Location")}>
          Location
        </ListItem>{" "}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
