import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Hidden from '@material-ui/core/Hidden';

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico"
        }
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: "merida24" } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function AbstractSubmission(props) {
    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Accomodation and Meals</h1>

            <h2>Hotels</h2>

            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        Less than 10 minutes walking distance from the central buildings of the Autonomous University of Yucatán (UADY):
                        <ul>
                            <li><a href="https://www.casalucia.com.mx/en" target='_blank'>Casa Lucía Hotel Boutique</a></li>
                            <li><a href="https://www.piedradeagua.com/en" target='_blank'>Piedra de Agua Hotel Boutique</a></li>
                            <li><a href="https://www.mansionmerida.com/en" target='_blank'>Mansión Mérida Hotel Boutique</a></li>
                        </ul>
                    </p>
                    <p>
                        Less than 30-minutes walking distance from the central buildings of the Autonomous University of Yucatán (UADY) (taxis are inexpensive):
                        <ul>
                            <li><a href="https://www.fiestamericana.com/en" target='_blank'>Fiesta Americana Mérida</a></li>
                            <li><a href="https://www.hyatt.com/en-US/hotel/mexico/hyatt-regency-merida/merid" target='_blank'>Hyatt Regency Mérida</a></li>
                            <li><a href="https://www.nh-hotels.com/hotel/nh-collection-merida-paseo-montejo" target='_blank'>NH Collection Mérida Paseo Montejo</a></li>
                        </ul>
                    </p>
                    <p>We recommend to check <a href='https://www.booking.com/' target='_blank'>Booking.com</a>. For families, check <a href='https://www.airbnb.com/?locale=en&_set_bev_on_new_domain=1689563765_MjQ0Njc5M2I1ZjEz&country_override=US&display_currency=USD' target='_blank'>Airbnb</a>.</p>
                    <Hidden mdUp>
                        <figure>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Hpy78Jhaqk5y6T743FZulFUAzBTcZLQ&ehbc=2E312F" width="640" height="480"></iframe>
                            <figcaption>Click on purple icons to see detailed information.</figcaption>
                        </figure>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <figure>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Hpy78Jhaqk5y6T743FZulFUAzBTcZLQ&ehbc=2E312F" width="640" height="480"></iframe>
                        <figcaption>Click on purple icons to see detailed information.</figcaption>
                    </figure>
                </Hidden>
            </div>


            <h2>Restaurants and bars</h2>

            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        Some recommendations of restaurants and bars:
                        <ul>
                            <li><a href='https://lachayamaya.com/en/' target='_blank'>Chaya Maya</a></li>
                            <li><a href='https://mugy.com.mx/' target='_blank'>Museo de la Gastronomía Yucateca</a></li>
                            <li><a href='https://picheta.mx/?lang=en' target='_blank'>Picheta</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d3808622-Reviews-Manjar_blanco-Merida_Yucatan_Peninsula.html' target='_blank'>Manjar Blanco</a></li>
                            <li><a href='https://www.facebook.com/elnuevotuchocentro/' target='_blank'>El Nuevo Tucho</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d16880908-Reviews-Casa_Maya-Merida_Yucatan_Peninsula.html' target='_blank'>Casa Maya</a></li>
                            <li><a href='http://mercado60.com/' target='_blank'>Mercado 60</a></li>
                            <li><a href='https://elcolon.mx/' target='_blank'>Sorbetería Colón</a></li>
                            <li>Santa Lucía</li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d23841042-Reviews-Matilda_Salon_Mexicano-Merida_Yucatan_Peninsula.html' target='_blank'>Matilda Salón Mexicano</a></li>
                            <li><a href='https://www.restaurantemicaela.com/' target='_blank'>Micaela Mar y Leña</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d23888157-Reviews-Le_Makech-Merida_Yucatan_Peninsula.html' target='_blank'>Le Makech</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d983662-Reviews-Amaro-Merida_Yucatan_Peninsula.html' target='_blank'>Amaro</a></li>
                            <li><a href='https://paseo60.com/en/' target='_blank'>Paseo 60</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d1995923-Reviews-Hennessy_s_Irish_Pub-Merida_Yucatan_Peninsula.html' target='_blank'>Hennessy’s Irish Pub</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d2043870-Reviews-Rafaello_s_Pizza-Merida_Yucatan_Peninsula.html' target='_blank'>Pizzeria Raffaello’s</a></li>
                            <li><a href='https://voltacafe.mx/' target='_blank'>Voltacafé</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g150811-d12816306-Reviews-Marago_Coffee-Merida_Yucatan_Peninsula.html' target='_blank'>Márago Coffee</a></li>
                            <li><a href='https://www.tripadvisor.com/Restaurant_Review-g154245-d3649433-Reviews-La_Luna_Sul_Mare-Boca_del_Rio_Central_Mexico_and_Gulf_Coast.html' target='_blank'>Luna Sul Mare</a></li>
                            <li><a href='https://www.olivamerida.com/' target='_blank'>Oliva Enoteca</a></li>
                            <li><a href='https://yerbasantamx.com/yerbasantameridaing/' target='_blank'>Yerba Santa</a></li>
                            <li><a href='https://emplumado.mx/' target='_blank'>Emplumado</a></li>
                            <li><a href='https://www.casatho.com/' target='_blank'>Casa T'HO</a></li>
                            <li><a href='https://www.google.com/maps/place/Restaurante+Avelino%26Mar%C3%ADa+%2F+Cafebrer%C3%ADa+Dos+Encuentros/@20.9838165,-89.6205494,17z/data=!4m15!1m8!3m7!1s0x8f56714f8fc0ab81:0xf03acdb31bb15b57!2sRestaurante+Avelino%26Mar%C3%ADa+%2F+Cafebrer%C3%ADa+Dos+Encuentros!8m2!3d20.9838165!4d-89.6183607!10e5!16s%2Fg%2F11stvgcth4!3m5!1s0x8f56714f8fc0ab81:0xf03acdb31bb15b57!8m2!3d20.9838165!4d-89.6183607!16s%2Fg%2F11stvgcth4?entry=ttu' target='_blank'>Avelino y María</a></li>
                            <li><a href='https://www.facebook.com/piensarosa.merida/' target='_blank'>Piensarosa</a></li>
                            <li><a href='https://www.apoala.mx/' target='_blank'>Apoala</a></li>
                            <li><a href='https://latratto.mx/' target='_blank'>La Tratto</a></li>
                        </ul>
                    </p>
                    <Hidden mdUp>
                        <figure>
                            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LeG1WWSNu0Vj35KjC4fUio8rqv1bL6E&ehbc=2E312F" width="640" height="480"></iframe>
                            <figcaption>Click on purple icons to see detailed information.</figcaption>
                        </figure>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <figure>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1LeG1WWSNu0Vj35KjC4fUio8rqv1bL6E&ehbc=2E312F" width="640" height="480"></iframe>
                        <figcaption>Click on purple icons to see detailed information.</figcaption>
                    </figure>
                </Hidden>
            </div>
        </Background>
    )
}
