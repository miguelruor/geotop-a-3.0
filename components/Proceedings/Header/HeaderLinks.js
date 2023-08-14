import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "../../CustomButtons/Button.js";
import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { menuOptions } = props

  const classes = useStyles();
  return (
    <List className={classes.list}>
      {menuOptions.map((option, index) => (
        <Link key={index} href={option.url}>
          <ListItem className={classes.listItem}>
            <Button
              type="button"
              color="transparent"
              className={classes.navLinkLessPadding}
              round>
              {option.text}
            </Button>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
