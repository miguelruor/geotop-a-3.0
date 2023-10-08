from firebase_admin import firestore, initialize_app

# initialize firebase app and then the client
app = initialize_app()

# this is what you use in other files
db = firestore.client()