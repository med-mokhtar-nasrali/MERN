const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


const divideByThree = pokemon.filter(p => p.id % 3===0);
console.log(divideByThree);

const fireType = pokemon.filter(p => p.types.filter(type => type ==="fire").length > 0 );
console.log(fireType);

const types = pokemon.filter(p => p.types.length > 1);
console.log(types);

const pokNames = pokemon.map(p => p.name);
console.log(pokNames);

const bigId = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(bigId);

const pokType = pokemon.filter(p => p.types.length === 1 && p.types[0] == "poison" ).map(p => p.name);
console.log(pokType);

const secondFlying = pokemon.filter(p => p.types[1] == "flying").map(p => p.types[0]);
console.log(secondFlying);


const normaltype=pokemon.filter(p => p.types.filter(type => type ==="normal").length > 0 ) ;
console.log(normaltype.length);


const allExpt148 = pokemon.filter(p => p.id !== 148)
console.log(allExpt148);

const replace = pokemon.map(p => {
    if (p.id === 35){
        p.types = p.types.map(type => type ==="normal" ? "fairy" : type);
    }
    return p;
})
console.log(replace);