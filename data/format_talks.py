import json

months = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
}

with open("talks.json", encoding="utf8") as talks_file:
    talks = json.load(talks_file)

    for i in talks.keys():

        month_day, year = talks[i]['date'].split(", ") 
        month, day = month_day.split()
        day = day if len(day) > 1 else "0"+day
        talks[i]["date2"] = year+months[month]+day
        
        talks[i].pop("timestamp", None)

f = open("talks2.json", "w")
j = json.dumps(talks)
print(j, file=f)
