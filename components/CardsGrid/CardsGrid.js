import styles from "./CardsGrid.module.css";
import NavPills from "../NavPills/NavPills.js";


const CardsGrid = ({ cardsContent, upper_legend, button_text, tabsOrdered }) => {

    // cardsContent = { tabText: [card1, card2, ...], ... }
    // each card has topNote, title, subtitle, link, image path
    // upper_legend = text to be displayed above the grid
    // button_text = text to be displayed in the button of each card

    const tabs = tabsOrdered.map(tabText => ({ tabButton: tabText }));

    return (
        <div className={styles.cards_grid} >
            {upper_legend ? <h3 className={styles.upper_legend}>{upper_legend}</h3> : null}
            <div className={styles.container}>
                <NavPills
                    color="primary"
                    horizontal={{
                        tabsGrid: { xs: 12, sm: 2, md: 2 },
                        contentGrid: { xs: 12, sm: 10, md: 10 }
                    }}
                    content={cardsContent}
                    tabs={tabs}
                    tabsIdxOrdered={tabsOrdered}
                    button_text={button_text}
                />
            </div>
        </div >
    )
}

export default CardsGrid