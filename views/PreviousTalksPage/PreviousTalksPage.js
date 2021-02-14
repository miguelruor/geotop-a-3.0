import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./PreviousTalksPageStyle.js";

const useStyles = makeStyles(styles);

export default function PreviousTalksPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    </div>
  )
}
