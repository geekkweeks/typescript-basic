const place = '{"lat": 34, "lng":20}';
const placeToJson = JSON.parse(place);
// with any type, error doesnt appear,
// it should be error because prop name doesnt exist 
placeToJson.Name

console.log(placeToJson);

const temp = JSON.parse('4')

// avoi any type
const place2 = '{"lat": 34, "lng":20}';
const place2ToJson: { lat: number, lng: number } = JSON.parse(place2)
console.log(place2ToJson);