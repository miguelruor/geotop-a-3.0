from firebase import db
import pandas as pd
from google.cloud.firestore_v1.base_query import FieldFilter


def main(eventId: str):
    docs = (
        db.collection(eventId).where(filter=FieldFilter("accepted", "==", True)).get()
    )

    docs = [doc.to_dict() for doc in docs]
    docs.sort(key=lambda doc: doc["surname"])

    contribution_type = {
        "keynote": "Keynote speaker",
        "participant": "Attendee",
        "poster": "Poster presentation",
        "oral": "Oral contribution",
    }

    def get_category(doc):
        category = contribution_type[doc["contribution"]] + (
            " invited by Scientific Committee"
            if doc["invited"] and doc["contribution"] == "oral"
            else ""
        )
        return category

    data = [
        {
            "Nombre": doc["completeName"],
            "Institución": doc["institution"],
            "Categoría": get_category(doc),
            "Título": doc.get("title", "N/A")
            if doc.get("title", "N/A") != ""
            else "N/A",
            "Comité científico": "Sí" if "committee" in doc else "N/A",
        }
        for doc in docs
    ]

    df = pd.DataFrame(data)
    df.sort_values(by="Nombre", inplace=True)
    df.to_excel("files/datos_todos.xlsx", index=False)
    df[df["Categoría"] == "Attendee"].to_excel(
        "files/datos_asistentes.xlsx", index=False
    )
    df[df["Categoría"] == "Keynote speaker"].to_excel(
        "files/datos_keynote_speakers.xlsx", index=False
    )
    df[df["Categoría"] == "Poster presentation"].to_excel(
        "files/datos_posters.xlsx", index=False
    )
    df[df["Categoría"] == "Oral contribution"].to_excel(
        "files/datos_speakers.xlsx", index=False
    )
    df[df["Categoría"] == "Oral contribution invited by Scientific Committee"].to_excel(
        "files/datos_invited_speakers.xlsx", index=False
    )


if __name__ == "__main__":
    EVENT_ID = "merida24"
    main(EVENT_ID)
