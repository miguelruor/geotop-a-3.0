import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";
import Button from "../../components/CustomButtons/Button.js";
import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import Link from "next/link"

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Link href='./' passHref>
        <ListItem className={classes.listItem}>
          <Button 
          type="button" 
          color="transparent"
          className={classes.navLink}  
          round>
            Homepage
          </Button>
        </ListItem>
      </Link> 
      <Link href='/next-talks' passHref>
        <ListItem className={classes.listItem}>
            <Button
              type = "button"
              color="transparent"
              className={classes.navLink}
              round>
                Next Talks
            </Button>
        </ListItem>
      </Link>
      <Link href='/previous-talks' passHref>
        <ListItem className={classes.listItem}>
          <Button
          type = "button"
          color="transparent"
          className={classes.navLink}
          round>
            Previous Talks
          </Button>
        </ListItem>
      </Link>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Search talks by:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link href= '/list-speakers' passHref className={classes.dropdownLink}>
              Speakers
            </Link>,
            <Link href= '/list-keywords' passHref  className={classes.dropdownLink}>
              Keywords
            </Link>
          ]}
        />
      </ListItem>
      <Link href='/subscribe' passHref>
        <ListItem className={classes.listItem}>
          <Button
          type = "button"
          color="transparent"
          className={classes.navLink}
          round>
            Subscribe
          </Button>
        </ListItem>
      </Link>
    </List>
  );
}
