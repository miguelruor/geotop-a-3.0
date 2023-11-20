from firebase import db
import json


def main(eventId: str):
    sessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"]
    session_order = {session: i for i, session in enumerate(sessions)}
    contribution_order = {"keynote": 1, "oral": 2, "poster": 3, "participant": 4}

    docs = db.collection(eventId).get()

    docs = [doc.to_dict() for doc in docs]
    docs.sort(
        key=lambda doc: (
            not doc["accepted"],
            contribution_order[doc["contribution"]],
            session_order.get(doc["session"], len(sessions)),
            doc["surname"],
        )
    )

    for i, doc in enumerate(docs):
        doc["number"] = i + 1
        doc["createdAt"] = doc["createdAt"].isoformat()

    data = {doc["number"]: doc for doc in docs}

    with open("files/backup.json", "w") as f:
        json.dump(data, f)


if __name__ == "__main__":
    EVENT_ID = "merida24"
    main(EVENT_ID)
