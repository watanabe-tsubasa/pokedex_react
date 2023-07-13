import axios from "axios";
import { maxstats } from "../components/organisms/molecules/atoms/maxstats";

const commonHoverStyle = {
  opacity: 1,
  transition: "opacity 0.8s",
  "&:hover": {
    opacity: 0.8,
  }
}
const commonButtonHoverStyle = {
  opacity: 1,
  transition: "opacity 0.8s",
  "&:hover": {
    opacity: 0.8,
    bg: "#6594FB",
  }
}


interface data {
    name: string;
    url: string;
    }
    
interface PokemonData {
  abilities?: {
    ability: {
      name: string;
      url: string;
    };
  }[];
  types?: {
    type: {
      name: string;
      url: string;
    };
  }[];
  stats?: {
    base_stat: number;
    effort: number;
    stat: {
      name: keyof typeof maxstats;
      url: string;
    };
  }[];
  held_items?: {
    item: {
      name: string;
      url: string;
    };
  }[];
  sprites?: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  name?: string;
  weight?: number;
}


const getList = async (url:string) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

const getPokeData = async (data: data[]): Promise<[PokemonData]> => {
let _pokemonData = await Promise.all(
    data.map((obj) => {
        const pokemonRecord = getList(obj.url);
        return pokemonRecord;
    }))
    return _pokemonData as [PokemonData]
}

const calcPowerWeight = (weight: number) => {
  if(weight < 90){
    return 20;
  } else if(weight < 249){
    return 40;
  } else if(weight < 499){
    return 60;
  } else if(weight < 999){
    return 80;
  } else if(weight < 1999){
    return 100;
  } else{
    return 120
  } 
};

const hiraToKata = (text: string) => {
  return text.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
};

export { commonHoverStyle, commonButtonHoverStyle, getList, getPokeData, calcPowerWeight, hiraToKata, PokemonData };