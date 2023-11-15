from firebase import db
import pandas as pd
from google.cloud.firestore_v1.base_query import FieldFilter


def main(eventId: str):
    docs = (
        db.collection(eventId).where(filter=FieldFilter("accepted", "==", True)).get()
    )

    docs = [doc.to_dict() for doc in docs]
    docs = [doc for doc in docs if doc["contribution"] != "participant"]

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
            "number": doc["number"],
            "Nombre": doc["completeName"],
            "Institución": doc["institution"],
            "Categoría": get_category(doc),
            "session": doc["session"],
            "Título": doc.get("title", "N/A")
            if doc.get("title", "N/A") != ""
            else "N/A",
            "Abstract": doc["abstract"],
        }
        for doc in docs
    ]

    pd.DataFrame(data).to_excel("files/datos_speakers.xlsx", index=False)


if __name__ == "__main__":
    EVENT_ID = "merida24"
    main(EVENT_ID)
