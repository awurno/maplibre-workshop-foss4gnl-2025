import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json',
    center: [52.3405372,4,943809], // starting position [lng, lat]
    zoom: 13 // starting zoom
});