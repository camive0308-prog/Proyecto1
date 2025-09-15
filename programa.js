// crear un objeto mapa desde la clase

// L-represenmta  a la biblioteca leaflet
// El punto (.) se denomina operador de acceso 
// Por ejemplo L.map(.) permite llamar a la funcion map () para crear mapas

var map = L.map('map');

//Objeto: un ejemplar de calse que tiene atributos y comportamiento definido 
// definir los valores iniciales para el objeto map
//.setview (arreglo con la lat, longitud del centro del mapa, entero que indica la zona)

map.setView([4.628040187640121, -74.0658435767757], 16);
// crear un objeto capa de teselas ( mapa base)
// L-tilelayer(url de donde voy a "estraer" el mapa, un JSON con los valores de config)


var urlMap ='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
var config = {
    maxZoom: 19 
};

var layer= L.tileLayer(urlMap, config);

// Agregar la capa del mapa 
layer.Addto(map);

// Cargar a un archivo Geojson 

//l. Abrir el archivo . En js hay que tener cuidado con procesos que sean demorados
//porque js no es un sincrono. 

// 2. Convertir el contenido de este archivo a formato json 
async function leerGeoJson(url) {
    const response = await fetch(url);
    return await response.json();
}

var myFile=leerGeoJson("map.geojson");
console.log(myFile);

//3. Agregar el geojson al mapa 
const geoLayer=L.geoJSON(myFile) 

geoLayer.addTO(map);
