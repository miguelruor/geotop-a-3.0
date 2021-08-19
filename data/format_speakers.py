import json

with open("speakers.json", encoding="utf-8") as speakers_file:
    speakers = json.load(speakers_file)
    
    for i in speakers.keys():
        speakers[i]["image"] = True

f = open("speakers2.json", "w")
j = json.dumps(speakers)
print(j, file=f)