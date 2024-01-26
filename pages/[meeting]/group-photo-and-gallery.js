import { useEffect, useState } from 'react';
import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

const photos = {
    group: [
        "Group 1 Medium.jpeg",
        "IMG_0321 Medium.jpeg",
        "IMG_0331 Medium.jpeg",
        "IMG_0334 Medium.jpeg",
        "IMG_0346 Medium.jpeg",
        "IMG_0352 Medium.jpeg",
        "IMG_0368 Medium.jpeg",
    ],
    academic: [
        "Angulo Medium.jpeg",
        "Berger Medium.jpeg",
        "Eric and Sophia Medium.jpeg",
        "JL Leon Medium.jpeg",
        "N1 Medium.jpeg",
        "N2 Medium.jpeg",
        "Pawel Medium.jpeg",
        "Pawel1 Medium.jpeg",
        "Sophia K Medium.jpeg",
        "Sophie Medium.jpeg",
        "Volic Medium.jpeg",
        "jason Medium.jpeg",
    ],
    social: [
        "Bernardo Jose Medium.jpeg",
        "Cristian M Medium.jpeg",
        "Cristian Renzo Medium.jpeg",
        "Eric GEOTOP A Medium.jpeg",
        "Fosado Medium.jpeg",
        "Joaquin estudiantes Medium.jpeg",
        "Ma Fernanda Marlene Medium.jpeg",
        "Natasha Medium.jpeg",
        "Rogelio Jesus Medium.jpeg",
        "Social Grupal Medium.jpeg",
        "Sophie social Medium.jpeg",
        "Virk Tombari Medium.jpeg",
    ],
    others: [
        "Gilda Esteban Medium.jpeg",
        "Sabina Medium.jpeg",
    ]
};


export async function getStaticPaths() {

    var paths = [{ params: { meeting: "merida24" } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function GroupPhotoAndGallery(props) {
    const [numCols, setNumCols] = useState(1)

    useEffect(() => {
        // window is accessible here.
        setNumCols(window.innerWidth < 1000 ? 1 : 3);
    }, []);

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Group Photos and Gallery</h1>

            <p>
                Download them <a href="https://drive.google.com/drive/folders/1Cm3Hq2JMmkWOuk7WWgo5P7KWlLRj2G0h?usp=sharing" target="_blank">here</a> (with better resolution).
            </p>

            <h2>
                Group photos
            </h2>

            <ImageList sx={{ width: "100%", height: 800 }} cols={numCols} >
                {photos.group.map((item) => (
                    <ImageListItem key={item}>
                        <Image src={`/img/meetings/merida24/photos/${item}`} objectFit='contain' width={1000} height={1000} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>

            <h2>
                Academic photos
            </h2>

            <ImageList sx={{ width: "100%", height: 800 }} cols={numCols} >
                {photos.academic.map((item) => (
                    <ImageListItem key={item}>
                        <Image src={`/img/meetings/merida24/photos/${item}`} objectFit='contain' width={1000} height={1000} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>

            <h2>
                Social photos
            </h2>

            <ImageList sx={{ width: "100%", height: 800 }} cols={numCols} >
                {photos.social.map((item) => (
                    <ImageListItem key={item}>
                        <Image src={`/img/meetings/merida24/photos/${item}`} objectFit='contain' width={1000} height={1000} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>

            <h2>
                Others
            </h2>

            <ImageList sx={{ width: "100%", height: 800 }} cols={numCols} >
                {photos.others.map((item) => (
                    <ImageListItem key={item}>
                        <Image src={`/img/meetings/merida24/photos/${item}`} objectFit='contain' width={1000} height={1000} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>

        </Background>
    )
}
