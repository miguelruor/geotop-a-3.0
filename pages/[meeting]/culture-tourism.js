import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Image from 'next/image';
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

export default function CultureAndTourism(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Culture and Tourism</h1>
            <br />
            <p>
                Here there are some recommendations of great places to visit in Merida and its surroundings. At the end of this webpage you can find a <a href='#tourism-map'>map</a> with
                all of the locations. Click on purple icons to see detailed information.
            </p>

            <h2>Anthropology and History Museum (Canton Palace) </h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        The Canton Palace was built in the first decade of the 20th century. The architecture of the mansion is of the eclectic style known as Beaux Arts, which prevailed in Europe during the Belle Epoque and in Mexico during the Porfiriato. Currently the museum has a program of continuous temporary exhibitions, which seek the dissemination of cultural heritage from the pre-Hispanic past to the present day.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/palacio_canton_1.jpg" objectFit='contain' width={500} height={400} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/palacio_canton_1.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <h2>Casa Montejo Museum</h2>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/casa_montejo_1.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
                <div className={style.sideImageTextRight}>
                    <p>
                        This house was built a few years after the founding of the city in 1542, by order of Francisco de Montejo, one of the first conquerors to arrive on the peninsula from Spain. The building has undergone several modifications in more than four centuries, according to the stylistic fashions of the time. Today you can appreciate the interior decoration in its site museum. It retains its original Plateresque façade and remains one of the few examples of Renaissance civil architecture from the 16th century. It operates as a cultural historical space, where temporary exhibitions are exhibited and various complementary activities are shown, such as conferences, seminars, book presentations and workshops.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/casa_montejo_1.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
            </div>

            <h2>Music Palace Museum</h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        The Museo del Palacio de la Música is part of the National Center of Mexican Music in Merida, Yucatán. Located in the basement, in an area of 1,769 square meters. It opened its doors on June 25, 2018 in order to publicize and preserve popular and traditional Mexican music. With a unique museography and various technological resources that recreate environments and experiences that amaze visitors. It offers an unparalleled compilation that protects, disseminates and dignifies the great popular musical heritage of Mexico and the artists who exalt Mexican musical expressions. It has eight interactive rooms, a public square, an auditorium for 450 people, and the classrooms where the Degree in Traditional and Popular Mexican Music is taught.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/palacio_musica.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/palacio_musica.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <h2>Quinta Montes Molina Museum</h2>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/casa_museo_montes_molina.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
                <div className={style.sideImageTextRight}>
                    <p>
                        Inside the Montes Molina House Museum, you will be able to admire European furniture, Carrara marble floors, precious Baccarat and Murano glass chandeliers, antique clocks, Art Deco pieces, porcelain and alabaster sculptures, family tableware and all kinds of furniture, ornaments and antiques. The rooms and bathrooms keep the elegance and European taste, a marked influence at that time. In the basement is the kitchen, laundry room, cistern, cellars, old cellar and utility rooms. This magnificent house passed into the hands of the Montes Molina family in 1915 and has been preserved with all the original furniture from that time, through the four generations that have lived and still live in it.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/casa_museo_montes_molina.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
            </div>

            <h2>Mayan World Museum</h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        The Museum exhibits a magnificent collection of more than 1,160 pieces that allows you to enjoy, among other examples, textiles, religious elements, pieces and various objects and belongings that reflect the current daily life of the Mayans. Engravings, books and historical documents are also shown, as well as artistic and religious works from the colonial era; collections from the pre-Hispanic era that include stelae, bas-reliefs and stone sculptures; vessels, trousseau and ceramic offerings, as well as ornaments and luxury objects made of gold, jade and shell. All this forms a framework where the past and the present are combined through new technologies and digital systems to allow the visitor to travel through time and return to the present.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/mundo_maya.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/mundo_maya.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <h2>Cenotes near Merida</h2>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <figure>
                        <Image src="/img/meetings/merida24/tourism/xbatun.jpg" objectFit='contain' width={500} height={350} />
                        <figcaption>Cenote X-batun</figcaption>
                    </figure>
                </Hidden>
                <div className={style.sideImageTextRight}>
                    <p>
                        Cenotes are one-of-a-kind natural wonders found in the Yucatan Peninsula. Their peculiarity encourages tourists from all over the world to come to visit this area of the country to enjoy these beautiful bodies of fresh water, along with the coasts of the Mexican Caribbean.
                        The main theory of the emergence of cenotes dates back to the extinction of the dinosaurs, since the meteorite that hit the coast of Chicxulub, Yucatan would be responsible for creating these natural wonders. The following are cenotes near Merida:
                        <ul>
                            <li>Cenote Sambulá, in Motul de Carrillo Puerto (44 km from Merida)</li>
                            <li>Cenote Dzombakal and cenote X-batun, in San Antonio Mulix (49 km from Merida)</li>
                            <li>Cenote Noh-Mozón, in Tecoh (44 km from Merida).</li>
                        </ul>
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <figure>
                                <Image src="/img/meetings/merida24/tourism/xbatun.jpg" objectFit='contain' width={500} height={350} />
                                <figcaption>Cenote X-batun</figcaption>
                            </figure>
                        </div>
                    </Hidden>
                </div>
            </div>

            <h2>Paseo de Montejo</h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        Paseo de Montejo, named after Francisco de Montejo, conqueror of Yucatan and founder of the city of Merida, Mexico. It is the most important avenue in Merida. Numerous public and private institutions are located along its route and it is the main part of the tourist corridor of Merida. The layout and design are inspired by that of the French boulevards. Flanked by large trees, it has a ridge and numerous roundabouts. On both sides of this avenue, beautiful palaces and mansions of wealthy Yucatan characters of the 19th century were built. Throughout its outline, the Paseo de Montejo contains important monuments and buildings that are emblematic of Merida and the state of Yucatan. It has a total length of 5,483 meters, which also makes it one of the longest in the city.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/paseo-montejo.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/paseo-montejo.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <h2>Uxmal</h2>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/uxmal.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
                <div className={style.sideImageTextRight}>
                    <p>
                        To the south of Yucatan, 62 km from Merida, the archaeological zone of Uxmal emerges spectacularly, declared a World Heritage Site by UNESCO. It is one of the archaeological zones of the Mayan culture whose architecture is one of the most majestic in Yucatan.
                        Its beauty is characterized by having low and horizontal palaces, placed around patios or quadrangles, which are rich in decorations of highly detailed sculptures made with thousands of small stones perfectly polished and adjusted, forming geometric mosaics
                        of perfection unmatched in the entire Mayan area.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/uxmal.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
            </div>

            <h2>Puerto Progreso</h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        Puerto Progreso is the ideal complement to the cultural experience that traveling to Merida represents. While you are in Merida, you will surely feel like escaping to the beach at some point. This is when Puerto Progreso becomes relevant. Puerto Progreso is just over 40 km from Merida, so in less than an hour you will have arrived.
                        This beautiful coastal town is home to the most important port in the state and is the gateway to the Yucatecan peninsula from the Gulf of Mexico. In addition to a relaxed and familiar atmosphere that invites you to rest and disconnect, Puerto Progreso offers an extensive menu of water activities, tasty gastronomic proposals and some lodging options.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/puerto-progreso.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/puerto-progreso.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <h2>Izamal</h2>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/izamal.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
                <div className={style.sideImageTextRight}>
                    <p>
                        Izamal is a beautiful colonial city founded in the mid-16th century on the remains of an ancient Mayan city. This place is known as "City of the Hills", recalling the covered pyramids that were there at the arrival of the Spanish, as well as "The City of the Three Cultures" because it combines features of its pre-Hispanic past, of the colonial period and of the present time.
                    </p>
                    <p>
                        Currently, all painted yellow and white by the will of the authorities and neighbors, it maintains an image of elegance and charm from bygone eras that distinguish and define it with a stately air in the regional context. In its neat patterned streets, horse-drawn carriages take the visitor on a charming tour of its squares and parks and its historic suburbs. Izamal is located 72 km east of the city of Mérida.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/izamal.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
            </div>

            <h2>Rio Lagartos</h2>
            <div className={style.imageAndText}>
                <div className={style.sideImageText}>
                    <p>
                        Rio Lagartos is a beach located to the East of the Yucatan peninsula that is characterized by all the diversity of fauna and flora that surrounds it, as well as by all the landscapes and views it offers. It is considered one of the biggest tourist attractions that Yucatan has, since it is a unique place where you can do different activities that allow you to fully coexist with nature and also have a very pleasant time. There are different tours that can take you to the Rio Lagartos Biosphere Reserve to see the flamingos, crocodiles, pelicans, seagulls, different types of fish, among others.
                    </p>
                    <Hidden mdUp>
                        <div className={style.centeredImage}>
                            <Image src="/img/meetings/merida24/tourism/rio-lagartos.jpg" objectFit='contain' width={500} height={350} />
                        </div>
                    </Hidden>
                </div>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/tourism/rio-lagartos.jpg" objectFit='contain' width={500} height={350} />
                </Hidden>
            </div>

            <br />

            <a id="tourism-map"><h2>Map</h2></a>
            <p>Click on purple icons to see detailed information.</p>

            <div id={"map"} style={{ height: "60px", width: "20px" }}></div>

            <div className={style.mapResponsive}>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_4QOtwoA_rUpcqDrzeFCqrVZKjmjZYY&ehbc=2E312F" width="640" height="480"></iframe>
            </div>

            <p>
                At Registration Desk, we will count with a Cortesy Desk runned by <a href='https://drive.google.com/file/d/1dOCoJ5-AM5YJw05qFlPleyA0KicraDva/view?usp=sharing' target='_blank'>Patricia Viajes</a>, travel agency where you can find tourist information such as amusing tours and good rates for hotels and rental cars.
            </p>
        </Background>
    )
}
