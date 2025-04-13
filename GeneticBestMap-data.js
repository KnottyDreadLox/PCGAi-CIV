/*
--	FILE:	 GeneticBestMap
--  made by Civ7MapUser
*/

console.log("loading GeneticBestMap-map.js");

export function GetMap() {

    let MapToConvert = [];
    for (let i = 0; i < 10; i++) {
        MapToConvert[i] = [];
    }

    // Map Data (Civ7)
    // MapToConvert = { civ7TerrainType, civ7BiomeType, civ7FeatureType, civ7ResourceType }

    MapToConvert[0][0]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][0]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[2][0]=["TERRAIN_HILL", "BIOME_PLAINS", -1, -1];
    MapToConvert[3][0]=["TERRAIN_HILL", "BIOME_PLAINS", -1, -1];
    MapToConvert[4][0]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][0]=["TERRAIN_OCEAN", "BIOME_MARINE", -1, -1];
    MapToConvert[6][0]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[7][0]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[8][0]=["TERRAIN_HILL", "BIOME_DESERT", -1, -1];
    MapToConvert[9][0]=["TERRAIN_MOUNTAIN", "BIOME_DESERT", -1, -1];
    MapToConvert[0][1]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][1]=["TERRAIN_HILL", "BIOME_PLAINS", -1, -1];
    MapToConvert[2][1]=["TERRAIN_MOUNTAIN", "BIOME_PLAINS", -1, -1];
    MapToConvert[3][1]=["TERRAIN_MOUNTAIN", "BIOME_PLAINS", -1, -1];
    MapToConvert[4][1]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][1]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][1]=["TERRAIN_OCEAN", "BIOME_MARINE", -1, -1];
    MapToConvert[7][1]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[8][1]=["TERRAIN_MOUNTAIN", "BIOME_DESERT", -1, -1];
    MapToConvert[9][1]=["TERRAIN_MOUNTAIN", "BIOME_DESERT", -1, -1];
    MapToConvert[0][2]=["TERRAIN_HILL", "BIOME_PLAINS", -1, -1];
    MapToConvert[1][2]=["TERRAIN_FLAT", "BIOME_PLAINS", -1, -1];
    MapToConvert[2][2]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[3][2]=["TERRAIN_FLAT", "BIOME_PLAINS", -1, -1];
    MapToConvert[4][2]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][2]=["TERRAIN_OCEAN", "BIOME_MARINE", -1, -1];
    MapToConvert[6][2]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[7][2]=["TERRAIN_OCEAN", "BIOME_MARINE", -1, -1];
    MapToConvert[8][2]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[9][2]=["TERRAIN_MOUNTAIN", "BIOME_DESERT", -1, -1];
    MapToConvert[0][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][3]=["TERRAIN_MOUNTAIN", "BIOME_PLAINS", -1, -1];
    MapToConvert[2][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[3][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[4][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[7][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[8][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[9][3]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[0][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[2][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[3][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[4][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][4]=["TERRAIN_HILL", "BIOME_PLAINS", -1, -1];
    MapToConvert[6][4]=["TERRAIN_FLAT", "BIOME_GRASSLAND", FEATURE_SPAWN, -1];
    MapToConvert[7][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[8][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[9][4]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[0][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[2][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[3][5]=["TERRAIN_MOUNTAIN", "BIOME_TUNDRA", -1, -1];
    MapToConvert[4][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[7][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[8][5]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[9][5]=["TERRAIN_HILL", "BIOME_DESERT", -1, -1];
    MapToConvert[0][6]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][6]=["TERRAIN_MOUNTAIN", "BIOME_TUNDRA", -1, -1];
    MapToConvert[2][6]=["TERRAIN_MOUNTAIN", "BIOME_TUNDRA", -1, -1];
    MapToConvert[3][6]=["TERRAIN_HILL", "BIOME_TUNDRA", -1, -1];
    MapToConvert[4][6]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][6]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][6]=["TERRAIN_MOUNTAIN", "BIOME_TROPICAL", -1, -1];
    MapToConvert[7][6]=["TERRAIN_MOUNTAIN", "BIOME_TROPICAL", -1, -1];
    MapToConvert[8][6]=["TERRAIN_HILL", "BIOME_DESERT", -1, -1];
    MapToConvert[9][6]=["TERRAIN_FLAT", "BIOME_DESERT", -1, -1];
    MapToConvert[0][7]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[1][7]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[2][7]=["TERRAIN_MOUNTAIN", "BIOME_TUNDRA", -1, -1];
    MapToConvert[3][7]=["TERRAIN_HILL", "BIOME_TUNDRA", -1, -1];
    MapToConvert[4][7]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][7]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][7]=["TERRAIN_MOUNTAIN", "BIOME_TROPICAL", -1, -1];
    MapToConvert[7][7]=["TERRAIN_FLAT", "BIOME_TROPICAL", -1, -1];
    MapToConvert[8][7]=["TERRAIN_FLAT", "BIOME_DESERT", -1, -1];
    MapToConvert[9][7]=["TERRAIN_HILL", "BIOME_DESERT", -1, -1];
    MapToConvert[0][8]=["TERRAIN_MOUNTAIN", "BIOME_GRASSLAND", -1, -1];
    MapToConvert[1][8]=["TERRAIN_FLAT", "BIOME_GRASSLAND", -1, -1];
    MapToConvert[2][8]=["TERRAIN_FLAT", "BIOME_TUNDRA", -1, -1];
    MapToConvert[3][8]=["TERRAIN_HILL", "BIOME_TUNDRA", -1, -1];
    MapToConvert[4][8]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][8]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][8]=["TERRAIN_FLAT", "BIOME_TROPICAL", -1, -1];
    MapToConvert[7][8]=["TERRAIN_MOUNTAIN", "BIOME_TROPICAL", -1, -1];
    MapToConvert[8][8]=["TERRAIN_FLAT", "BIOME_DESERT", -1, -1];
    MapToConvert[9][8]=["TERRAIN_FLAT", "BIOME_DESERT", -1, -1];
    MapToConvert[0][9]=["TERRAIN_FLAT", "BIOME_GRASSLAND", -1, -1];
    MapToConvert[1][9]=["TERRAIN_HILL", "BIOME_GRASSLAND", -1, -1];
    MapToConvert[2][9]=["TERRAIN_HILL", "BIOME_TUNDRA", -1, -1];
    MapToConvert[3][9]=["TERRAIN_HILL", "BIOME_TUNDRA", -1, -1];
    MapToConvert[4][9]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[5][9]=["TERRAIN_COAST", "BIOME_MARINE", -1, -1];
    MapToConvert[6][9]=["TERRAIN_FLAT", "BIOME_TROPICAL", -1, -1];
    MapToConvert[7][9]=["TERRAIN_HILL", "BIOME_TROPICAL", -1, -1];
    MapToConvert[8][9]=["TERRAIN_FLAT", "BIOME_DESERT", -1, -1];
    MapToConvert[9][9]=["TERRAIN_HILL", "BIOME_DESERT", -1, -1];

    return MapToConvert;
}
console.log("loaded GeneticBestMap-data.js");
