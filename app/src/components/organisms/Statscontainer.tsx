import React from "react";
import { Box } from '@chakra-ui/react'
import { PokemonData } from "../../utils/utils";
import { StatsTextBar } from "./molecules/StatsTextBar";

type StatscontainerProps = {
  pokeData: PokemonData;
}

const Statscontainer: React.FC<StatscontainerProps> = (props) => {
  const { pokeData } = props;
  const { stats } = pokeData
  return (
    <Box>
      {stats ? (
        stats.map((elem) => (
          <StatsTextBar
            key={elem.stat.name}
            base_stats={elem.base_stat}
            name={elem.stat.name}
          />
        ))
      ) : (
        "取得に失敗しました"
      )}
    </Box>
  );
};

export { Statscontainer };