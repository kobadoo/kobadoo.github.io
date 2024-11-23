import requests
import time
import json

# JSON data
data = [
    {"value": "En fotball", "name": "football"},
    {"value": "Hvor er fotballen?", "name": "football_q"},
    {"value": "En kaffe", "name": "coffee"},
    {"value": "Hvor er kaffen?", "name": "coffee_q"},
    {"value": "Et telt", "name": "tent"},
    {"value": "Hvor er teltet?", "name": "tent_q"},
    {"value": "En politikvinne", "name": "police"},
    {"value": "Hvor er politikvinnen?", "name": "police_q"},
    {"value": "En mann", "name": "man"},
    {"value": "Hvor er mannen?", "name": "man_q"},
    {"value": "En kvinne", "name": "woman"},
    {"value": "Hvor er kvinnen?", "name": "woman_q"},
    {"value": "En baby", "name": "baby"},
    {"value": "Hvor er babyen?", "name": "baby_q"},
    {"value": "En robot", "name": "robot"},
    {"value": "Hvor er roboten?", "name": "robot_q"},
    {"value": "En klovn", "name": "clown"},
    {"value": "Hvor er klovnen?", "name": "clown_q"},
    {"value": "En tunge", "name": "tongue"},
    {"value": "Hvor er tungen?", "name": "tongue_q"},
    {"value": "En arm", "name": "arm"},
    {"value": "Hvor er armen?", "name": "arm_q"},
    {"value": "Et bein", "name": "bone"},
    {"value": "Hvor er beinet?", "name": "bone_q"},
    {"value": "Et ben", "name": "leg"},
    {"value": "Hvor er benet?", "name": "leg_q"},
    {"value": "En fot", "name": "foot"},
    {"value": "Hvor er foten?", "name": "foot_q"},
    {"value": "En tann", "name": "tooth"},
    {"value": "Hvor er tannen?", "name": "tooth_q"},
    {"value": "En rullestol", "name": "wheelchair"},
    {"value": "Hvor er rullestolen?", "name": "wheelchair_q"},
    {"value": "En ring", "name": "ring"},
    {"value": "Hvor er ringen?", "name": "ring_q"},
    {"value": "En penn", "name": "pen"},
    {"value": "Hvor er pennen?", "name": "pen_q"},
    {"value": "En pakke", "name": "package"},
    {"value": "Hvor er pakken?", "name": "package_q"},
    {"value": "En klokke", "name": "clock"},
    {"value": "Hvor er klokken?", "name": "clock_q"},
    {"value": "En prinsesse", "name": "princess"},
    {"value": "Hvor er prinsessen?", "name": "princess_q"},
    {"value": "Et maleri", "name": "painting"},
    {"value": "Hvor er maleriet?", "name": "painting_q"},
    {"value": "En søppelbøtte", "name": "bin"},
    {"value": "Hvor er søppelbøtten?", "name": "bin_q"},
    {"value": "En vulkan", "name": "volcano"},
    {"value": "Hvor er vulkanen?", "name": "volcano_q"},
    {"value": "Et hotell", "name": "hotel"},
    {"value": "Hvor er hotellet?", "name": "hotel_q"},
    {"value": "Et sykehus", "name": "hospital"},
    {"value": "Hvor er sykehuset?", "name": "hospital_q"},
    {"value": "Et stadion", "name": "stadium"},
    {"value": "Hvor er stadion?", "name": "stadium_q"},
    {"value": "En toalett", "name": "toilet"},
    {"value": "Hvor er toalettet?", "name": "toilet_q"},
    {"value": "Et badekar", "name": "bathtub"},
    {"value": "Hvor er badekaret?", "name": "bathtub_q"},
    {"value": "Rulleskøyter", "name": "rollerskates"},
    {"value": "Hvor er rulleskøytene?", "name": "rollerskates_q"},
    {"value": "En sparkesykkel", "name": "scooter"},
    {"value": "Hvor er sparkesykkelen?", "name": "scooter_q"},
    {"value": "En geit", "name": "goat"},
    {"value": "Hvor er geiten?", "name": "goat_q"},
    {"value": "En villsvin", "name": "wildpig"},
    {"value": "Hvor er villsvinet?", "name": "wildpig_q"},
    {"value": "En ørn", "name": "eagle"},
    {"value": "Hvor er ørnen?", "name": "eagle_q"},
    {"value": "En neshorn", "name": "rhino"},
    {"value": "Hvor er neshornet?", "name": "rhino_q"},
    {"value": "En påfugl", "name": "peacock"},
    {"value": "Hvor er påfuglen?", "name": "peacock_q"},
    {"value": "En flodhest", "name": "hippo"},
    {"value": "Hvor er flodhesten?", "name": "hippo_q"},
    {"value": "En papegøye", "name": "parrot"},
    {"value": "Hvor er papegøyen?", "name": "parrot_q"},
    {"value": "En mygg", "name": "mosquito"},
    {"value": "Hvor er myggen?", "name": "mosquito_q"},
    {"value": "En svane", "name": "swan"},
    {"value": "Hvor er svanen?", "name": "swan_q"},
    {"value": "En sel", "name": "seal"},
    {"value": "Hvor er selen?", "name": "seal_q"},
    {"value": "En hamburger", "name": "burger"},
    {"value": "Hvor er hamburgeren?", "name": "burger_q"},
    {"value": "En baguette", "name": "bread"},
    {"value": "Hvor er baguetten?", "name": "bread_q"},
    {"value": "Peanøtter", "name": "peanuts"},
    {"value": "Hvor er peanøttene?", "name": "peanuts_q"},
    {"value": "Ost", "name": "cheese"},
    {"value": "Hvor er osten?", "name": "cheese_q"},
    {"value": "En hvitløk", "name": "garlic"},
    {"value": "Hvor er hvitløken?", "name": "garlic_q"},
    {"value": "En løk", "name": "onion"},
    {"value": "Hvor er løken?", "name": "onion_q"},
    {"value": "En skje", "name": "spoon"},
    {"value": "Hvor er skjeen?", "name": "spoon_q"},
    {"value": "En kaktus", "name": "cactus"},
    {"value": "Hvor er kaktusen?", "name": "cactus_q"},
    {"value": "En sopp", "name": "mushroom"},
    {"value": "Hvor er soppen?", "name": "mushroom_q"},
    {"value": "En fersken", "name": "peach"},
    {"value": "Hvor er ferskenen?", "name": "peach_q"},
    {"value": "En basketball", "name": "basketball"},
    {"value": "Hvor er basketballen?", "name": "basketball_q"},
    {"value": "En tennisball", "name": "tennis"},
    {"value": "Hvor er tennisballen?", "name": "tennis_q"},
    {"value": "En medalje", "name": "medal"},
    {"value": "Hvor er medaljen?", "name": "medal_q"},
    {"value": "En paraply", "name": "umbrella"},
    {"value": "Hvor er paraplyen?", "name": "umbrella_q"},
    {"value": "En bikini", "name": "bikini"},
    {"value": "Hvor er bikinien?", "name": "bikini_q"},
    {"value": "Sokker", "name": "socks"},
    {"value": "Hvor er sokkene?", "name": "socks_q"},
    {"value": "En caps", "name": "cap"},
    {"value": "Hvor er capsen?", "name": "cap_q"},
    {"value": "Hansker", "name": "gloves"},
    {"value": "Hvor er hanskene?", "name": "gloves_q"},
    {"value": "Et skjerf", "name": "scarf"},
    {"value": "Hvor er skjerfet?", "name": "scarf_q"},
    {"value": "En veske", "name": "handbag"},
    {"value": "Hvor er vesken?", "name": "handbag_q"},
    {"value": "En saksofon", "name": "saxophone"},
    {"value": "Hvor er saksofonen?", "name": "saxophone_q"},
    {"value": "En nøkkel", "name": "key"},
    {"value": "Hvor er nøkkelen?", "name": "key_q"},
    {"value": "En hammer", "name": "hammer"},
    {"value": "Hvor er hammeren?", "name": "hammer_q"},
    {"value": "En bjelle", "name": "bell"},
    {"value": "Hvor er bjellen?", "name": "bell_q"},
    {"value": "En kost", "name": "broom"},
    {"value": "Hvor er kosten?", "name": "broom_q"},
    {"value": "Et lys", "name": "candle"},
    {"value": "Hvor er lyset?", "name": "candle_q"},
    {"value": "En lyspære", "name": "lightbulb"},
    {"value": "Hvor er lyspæren?", "name": "lightbulb_q"},
    {"value": "En dør", "name": "door"},
    {"value": "Hvor er døren?", "name": "door_q"}
]

# API URL
api_url = "https://api.soundoftext.com"

def create_sound(text, voice="nb-NO"):
    """Create a new sound using the Sound of Text API."""
    response = requests.post(
        f"{api_url}/sounds",
        headers={"Content-Type": "application/json"},
        json={
            "engine": "Google",
            "data": {
                "text": text,
                "voice": voice
            }
        }
    )
    response.raise_for_status()
    return response.json()["id"]

def get_sound_status(sound_id):
    """Get the status of the created sound."""
    response = requests.get(f"{api_url}/sounds/{sound_id}")
    response.raise_for_status()
    return response.json()

def download_sound(location, filename):
    """Download the sound from the given location and save it locally."""
    response = requests.get(location)
    response.raise_for_status()
    with open(f"{filename}.mp3", "wb") as file:
        file.write(response.content)

def main():
    for item in data:
        try:
            # Create the sound
            sound_id = create_sound(item["value"])
            print(f"Sound ID for '{item['value']}': {sound_id}")

            # Poll the status until the sound is ready
            status = get_sound_status(sound_id)
            while status["status"] == "Pending":
                print(f"Waiting for sound '{item['value']}' to be ready...")
                time.sleep(5)
                status = get_sound_status(sound_id)

            if status["status"] == "Done":
                # Download the sound
                download_sound(status["location"], item["name"])
                print(f"Sound '{item['value']}' saved as {item['name']}.mp3")
            else:
                print(f"Error generating sound for '{item['value']}': {status['message']}")

        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()

