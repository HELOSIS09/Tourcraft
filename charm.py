import json

my_dict = {
    "name": "alice",
    "age": "23"
}

with open('helo.html', 'w') as f:
    json.dump(my_dict, f, indent=4)

print(my_dict)


