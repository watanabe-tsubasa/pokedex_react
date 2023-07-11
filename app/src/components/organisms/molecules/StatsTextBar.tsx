import React from "react";
import { Text, Progress, Stack } from '@chakra-ui/react'
import { maxstats } from "./atoms/maxstats";

type StatsTextBarProps = {
  base_stats: number;
  name: keyof typeof maxstats
}

const StatsTextBar: React.FC<StatsTextBarProps> = (props) => {
  const { base_stats, name } = props;
  return (
    <Stack>
      <Text color='blackAlpha.800' fontSize='xl'>
        {`${name}: ${base_stats}`}
      </Text>
      <Progress value={base_stats * 100 / maxstats[name]} />
    </Stack>
  );
};

export { StatsTextBar }