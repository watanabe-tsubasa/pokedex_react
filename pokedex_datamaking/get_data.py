import aiohttp
import asyncio
import requests
import json

res = requests.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').json()
poke_name_list = list(map(lambda x: x["name"], res["results"]))

en_to_ja = {}

async def get_pokemon_species(session, name):
    base_url = 'https://pokeapi.co/api/v2/pokemon-species'
    async with session.get(f'{base_url}/{name}') as res:
        if res.status == 200:
            data = await res.json()
            filtered_names = list(filter(lambda x: x["language"]["name"] == "ja-Hrkt", data["names"]))
            if filtered_names:
                filtered_name = filtered_names[0]["name"]
                en_to_ja[name] = filtered_name
            else:
                en_to_ja[name] = ""
        else:
            en_to_ja[name] = ""

async def main():
    async with aiohttp.ClientSession() as session:
        tasks = []
        for name in poke_name_list:
            task = asyncio.create_task(get_pokemon_species(session, name))
            tasks.append(task)
        await asyncio.gather(*tasks)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())

with open('data.json', 'w') as f:
    json.dump(en_to_ja, f)