from firebase import db
from google.cloud.firestore_v1.base_query import FieldFilter


def main(eventId: str):
    sessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"]
    session_order = {session: i for i, session in enumerate(sessions)}
    contribution_order = {"keynote": 1, "oral": 2, "poster": 3, "participant": 4}

    docs = (
        db.collection(eventId).where(filter=FieldFilter("accepted", "==", True)).get()
    )

    docs = [(doc.id, doc.to_dict()) for doc in docs]
    docs.sort(
        key=lambda doc: (
            contribution_order[doc[1]["contribution"]],
            session_order.get(doc[1]["session"], len(sessions)),
            doc[1]["surname"],
        )
    )

    for i, doc in enumerate(docs):
        doc[1]["number"] = i + 1
        db.collection(eventId).document(doc[0]).set(
            {"number": doc[1]["number"]}, merge=True
        )


if __name__ == "__main__":
    EVENT_ID = "merida24"
    main(EVENT_ID)
