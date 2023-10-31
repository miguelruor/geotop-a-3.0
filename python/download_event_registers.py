from firebase import db
from google.cloud.firestore_v1.base_query import FieldFilter

def create_markdown_file_with_registers(eventId: str, session: str, file_name: str):
    docs = (
        db.collection(eventId)
        .where(filter=FieldFilter("session", "==", session))
        .get()
    )
    
    docs = [doc.to_dict() for doc in docs]
    
    docs.sort(key=lambda doc: doc['surname'])
    
    type_contribution = {"oral": "Oral contribution", "poster": "Poster", "keynote": "Keynote speaker"}
    
    with open("files/" + file_name, "w") as f:
        f.write(f"# {session}\n\n")
        
        for doc in docs:
            f.write(f"<b>Name</b>: {doc['completeName']}  \n")
            f.write(f"<b>Contribution</b>: {type_contribution[doc['contribution']]}  \n")
            f.write(f"<b>Title</b>: {doc['title']}  \n")
            f.write("<b>Abstract</b>:\n  ")
            f.write(doc['abstract'])
            f.write("\n\n")
        


if __name__ == "__main__":
    EVENT_ID = "merida24"
    SESSION = "CTRS"
    FILE_NAME = f"geotop-a-merida-{SESSION}.md"
    
    create_markdown_file_with_registers(EVENT_ID, SESSION, FILE_NAME)
    