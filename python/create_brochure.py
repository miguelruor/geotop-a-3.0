from firebase import db
import pandas as pd
from google.cloud.firestore_v1.base_query import FieldFilter


def add_program(file):
    df = pd.read_excel("files/program.xlsx", dtype=str)
    df.fillna("", inplace=True)

    """file.write(
        "<span style='page-break-before: always;'></span>  \n"
    )  # force page break in pdf"""
    file.write("## Program  \n")

    border_style = "border-left: 1px solid #000; border-right: 1px solid #000;"

    file.write("<table style='white-space:nowrap; border-top: 1px solid #000'>  \n")
    file.write(
        f"""<tr> 
<th style='{border_style}'>&nbsp;</th> 
<th style='{border_style}'>January 7</th> 
<th colspan='2' style='text-align: center; {border_style}'>January 8</th> 
<th style='{border_style}'> January 9</th> 
</tr>"""
    )

    for _, row in df.iterrows():
        horario = row["horario"].replace("-", " - ")

        if row["January 8.1"] == "":
            double_col = f"<td colspan='2' style='text-align: center; {border_style}'>{row['January 8']} </td>"
        else:
            double_col = f"<td style='{border_style}'>{row['January 8']} </td> <td style='{border_style}'>{row['January 8.1']}</td>"

        file.write(
            f"<tr> <td style='{border_style}'>{horario}</td> <td style='{border_style}'>{row['January 7']}</td> {double_col} <td style='{border_style}'>{row['January 9']}</td> </tr>  \n"
        )

    file.write("</table>  \n")

    file.write("<table style='white-space:nowrap; border-top: 1px solid #000'>  \n")
    file.write(
        f"""<tr> 
<th style='{border_style}'>&nbsp;</th> 
<th colspan='2' style='text-align: center; {border_style}'>January 10</th> 
<th colspan='2'  style='text-align: center; {border_style}'' >January 11</th> 
</tr>"""
    )

    for _, row in df.iterrows():
        horario = row["horario"].replace("-", " - ")

        if row["January 10.1"] == "":
            double_col = f"<td colspan='2' style='text-align: center; {border_style}'>{row['January 10']} </td>"
        else:
            double_col = f"<td style='{border_style}'>{row['January 10']} </td> <td style='{border_style}'>{row['January 10.1']}</td>"

        if row["January 11.1"] == "":
            double_col_2 = f"<td colspan='2' style='text-align: center; {border_style}'>{row['January 11']} </td>"
        else:
            double_col_2 = f"<td style='{border_style}'>{row['January 11']} </td> <td style='{border_style}'>{row['January 11.1']}</td>"

        file.write(
            f"<tr> <td style='{border_style}'>{horario}</td>  {double_col} {double_col_2} </tr>  \n"
        )

    file.write("</table>  \n")

    file.write("<table style='white-space:nowrap; border-top: 1px solid #000'>  \n")
    file.write(
        f"""<tr> 
<th style='{border_style}'>&nbsp;</th> 
<th style='{border_style}'> January 12</th> 
<th style='{border_style}'>January 13</th> 
</tr>"""
    )

    for _, row in df.iterrows():
        horario = row["horario"].replace("-", " - ")

        file.write(
            f"<tr> <td style='{border_style}'>{horario}</td> <td style='{border_style}'>{row['January 12']}</td> <td style='{border_style}'>{row['January 13']}</td> </tr>  \n"
        )

    file.write("</table>  \n")

    file.write("\n---\n")


def first_page(file):
    file.write(
        '<h1 style="text-align: center;">GEOTOP-A International Conference</h1>  \n'
    )
    file.write(
        '<h2 style="text-align: center;">Applications of Geometry and Topology</h2>  \n\n'
    )
    file.write("### January 8-13, 2024. Mérida (Yucatán), México  \n")
    file.write(
        "<p>Some of the leading experts in applications of geometric and topological methods will gather in Mérida to present and discuss some of the most recent advances in various areas of mathematical sciences. Six thematic sessions will focus on hot topics that are marking current progress in active research areas, from topological data analysis to applications in artificial intelligence, from topological methods in field theory to applications of geometry and topology to DNA biology.</p>\n"
    )
    file.write(
        "<p>This conference will also provide a wonderful occasion to celebrate five years of activity of the international web-seminar series GEOTOP-A, launched in August 2018.</p>\n\n"
    )
    file.write("### Thematic Sessions  \n")
    file.write(
        """<h3 style="text-align: center;">Applications of Geometry and Topology to Biology (DNA)</h3>
<p>
    This session will present modern applications of geometry and topology to the structure and mechanism of DNA, proteins and viruses.
</p>
<h3 style="text-align: center;">Applications in Physical Sciences (PHYS)</h3>
<p>
    In recent years there has been an increased interest in applications of geometric and topological techniques to physical systems, especially in the mathematical formalism of dynamical systems, in the study of vortex flows, magnetic fields, polymer physics and complex systems. Some of the most prominent advances in these various research areas will be presented and discussed in this session.
</p>
<h3 style="text-align: center;">Combinatorial Topology of Relational Structures (CTRS)</h3>
<p>
    Simplicial complexes have been used very successfully in more and more situations recently, as a model where objects interact in some way. The reason is that they are higher dimensional generalizations of graphs, that can represent relations not only about pairs of objects, but of sets of objects of any cardinality.
    <br />Once a situation is modeled as a simplicial complex, or even a more general relational structure such as a simplicial set, it emerges that topological properties about the object capture properties about the underlying application, such as agents in a political structure, species in an ecological system, neurons in the brain, or computers interacting through a network or multicore shared memory system. The session will gather researchers that have already worked on the topology of relational structures, as well as others that are interesting in learning about these fascinating applications.
</p>
<h3 style="text-align: center;">Data Analysis, Machine Learning and AI (DAMLAI)</h3>
<p>
    Modern and novel applications of Data Analysis, Machine Learning and AI to the sciences and in particular to pure mathematics will be presented.
</p>
<h3 style="text-align: center;">Topological Complexity and LS Category (TCLS)</h3>
<p>
    Topological complexity is a numerical homotopy invariant of a topological space that gives a measure of the complexity of motion planning algorithms in robotics. This recently created research area is located within the burgeoning field of applied algebraic topology. With an originally applied motivation and, at the same time, a strong connection to classical subjects of algebraic topology like Lusternik-Schnirelmann category, this field has rapidly evolved due to contributions of many topologists. Recently, more applied flavoured results have begun to emerge, and nowadays the subject is a vibrant, highly active and fruitful ground for scientific activity, ready to face the current technological needs of our society. This session aims at bringing together specialists as well as early career mathematicians to discuss recent advances, and to set future lines of research in the area.
</p>
<h3 style="text-align: center;">Topological Data Analysis (TDA)</h3>
<p>
    The 21st century witnessed the emergence of synergy between topology and data science. The two-way relation between the two lead to successful applications and new data driven theoretical results. The goal of this session is to facilitate conversations and new collaborations between researchers on the whole theoretical-applied continuum.
</p>  \n\n"""
    )

    file.write("## Scientific Committee  \n")
    file.write(
        """<ul>
    <li>Paweł Dłotko (Dioscuri Centre, Poland)</li>
    <li>Michael Farber (Queen Mary University of London, UK)</li>
    <li>José-Carlos Gómez-Larrañaga (CIMAT-Mérida, México)</li>
    <li>Jesús González-Espino-Barros (CINVESTAV, México)</li>
    <li>Eric Goubault (École Polytechnique, France)</li>
    <li>Ingrid Membrillo-Solís (University of Southampton, UK)</li>
    <li>Neza Mramor-Kosta (U Ljubljana, Slovenia)</li>
    <li>Sergio Rajsbaum (Instituto de Matemáticas, UNAM, México & IRIF, France)</li>
    <li>Renzo L. Ricca (U Milano-Bicocca, Italy)</li>
    <li>Radmila Sazdanovic (North Carolina State U, USA)</li>
    <li>De Witt Sumners (Florida State U, USA)</li>
</ul>  \n\n"""
    )
    file.write(
        "<span style='page-break-before: always;'></span>  \n"
    )  # force page break in pdf
    file.write("## Organizing Committee  \n")
    file.write(
        """<ul>
    <li>Martha-Gabriela Araujo-Pardo (Sociedad Matemática Mexicana & IM-UNAM, México)</li>
    <li>Luis-Celso Chan-Palomo (FMAT-UADY, México)</li>
    <li>José-Carlos Gómez-Larrañaga (CIMAT-Mérida, México)</li>
    <li>Ernesto-Antonio Guerrero-Lara (FMAT-UADY, México)</li>
    <li>Ingrid Membrillo-Solís (University of Southampton, UK)</li>
    <li>Jesús-Rogelio Pérez-Buendía (CIMAT-Mérida, México)</li>
    <li>Antonio Rieser (CIMAT-Guanajuato, México)</li>
    <li>Jesús Rodríguez-Viorato (CIMAT-Guanajuato, México)</li>
    <li>Pablo Suárez-Serrato (IM-UNAM, México)</li>
</ul>  \n\n"""
    )
    file.write("## Supporting Organizations  \n")
    file.write(
        """<ul>
    <li>Centro de Investigación en Matemáticas</li>
    <li>Centro de Investigación de Estudios Avanzados</li>
    <li>Consejo Nacional de Humanidades, Ciencias y Tecnologías</li>
    <li>Instituto de Matemáticas, UNAM</li>
    <li>Sociedad Matemática Mexicana</li>
    <li>Universidad Autónoma de Yucatán</li>
</ul>  \n\n"""
    )
    file.write("\n---\n")


def create_markdown_brochure(eventId: str, file_name: str):
    sessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"]
    session_order = {session: i for i, session in enumerate(sessions)}
    contribution_order = {"keynote": 1, "oral": 2, "poster": 3, "participant": 4}

    with open("files/" + file_name, "w") as file:
        # data structures
        docs = (
            db.collection(eventId)
            .where(filter=FieldFilter("accepted", "==", True))
            .get()
        )

        docs = [doc.to_dict() for doc in docs]
        docs.sort(
            key=lambda doc: (
                contribution_order[doc["contribution"]],
                session_order.get(doc["session"], len(sessions)),
                doc["surname"],
            )
        )
        for i, doc in enumerate(docs):
            doc["number"] = i + 1

        types_participation = {
            "participant": [],
            "oral": {session: [] for session in sessions},
            "keynote": {session: [] for session in sessions},
            "poster": [],
        }

        for doc in docs:
            if doc["contribution"] == "participant" or doc["contribution"] == "poster":
                types_participation[doc["contribution"]].append(doc)
            else:
                types_participation[doc["contribution"]][doc["session"]].append(doc)

        # info
        first_page(file)

        # program
        add_program(file)

        # keynote speakers
        file.write('<h2 style="text-align: center;">Keynote speakers</h2>  \n\n')

        for session in sessions:
            file.write(f'<h3 style="text-align: center;">{session}</h3>  \n\n')

            for talk in types_participation["keynote"][session]:
                file.write(
                    f"{talk['number']}\) <b>{talk['completeName']}</b> - {talk['institution']}  \n"
                )
                file.write(
                    f'<div style="text-align: center;">"<i style="text-align: center;">{talk["title"]}</i>"</div>  \n\n'
                )
                # file.write("<b>Abstract</b>:\n  ")
                file.write(talk["abstract"])
                file.write("\n\n---\n\n")

        # Oral contributions
        file.write('<h2 style="text-align: center;">Oral contributions</h2>  \n\n')

        for session in sessions:
            file.write(f'<h3 style="text-align: center;">{session}</h3>  \n\n')

            for talk in types_participation["oral"][session]:
                file.write(
                    f"{talk['number']}\) <b>{talk['completeName']}</b>{' (Invited by Scientific Committee)' if talk['invited'] else ''} - {talk['institution']}  \n"
                )
                file.write(
                    f'<div style="text-align: center;">"<i style="text-align: center;">{talk["title"]}</i>"</div>  \n\n'
                )
                # file.write("<b>Abstract</b>:\n  ")
                file.write(talk["abstract"])
                file.write("\n\n---\n\n")

        # Posters
        file.write('<h2 style="text-align: center;">Posters</h2>  \n\n')

        for talk in types_participation["poster"]:
            file.write(f"{talk['number']}\) <b>{talk['completeName']}</b>  \n")
            file.write(
                f'<div style="text-align: center;">"<i style="text-align: center;">{talk["title"]}</i>"</div>  \n\n'
            )
            # file.write("<b>Abstract</b>:\n  ")
            file.write(talk["abstract"])
            file.write("\n\n---\n\n")


def main():
    EVENT_ID = "merida24"
    FILE_NAME = "GEOTOP-A_Merida2024.md"

    create_markdown_brochure(EVENT_ID, FILE_NAME)


if __name__ == "__main__":
    main()
