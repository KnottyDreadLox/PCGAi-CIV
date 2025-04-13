// GeneticBestMap-map.js
/**
* GeneticBestMap
* 
*/
console.log("loading script GeneticBestMap-map.js");
import { generateYnAMP } from '/ged-ynamp/maps/ynamp-map-loading.js';
import { GetMap } from '/Civ7MapUser-GeneticBestMap/maps/GeneticBestMap-data.js';

function requestMapData(initParams) {
    initParams.width = 10;
    initParams.height = 10;
    console.log(initParams.width);
    console.log(initParams.height);
    console.log(initParams.topLatitude);
    console.log(initParams.bottomLatitude);
    console.log(initParams.wrapX);
    console.log(initParams.wrapY);
    console.log(initParams.mapSize);
    engine.call("SetMapInitData", initParams);
}

function generateMap() {
    const mapName = 'GeneticBestMap';
    let genParameters = {
        westStart: 1,
        westEnd: 4,
        eastStart: 6,
        eastEnd: 9
    };
    let importedMap = GetMap();
    generateYnAMP(mapName, importedMap, genParameters);
}

// Register listeners.
engine.on('RequestMapInitData', requestMapData);
engine.on('GenerateMap', generateMap);

console.log("Loaded GeneticBestMap-map.js");
