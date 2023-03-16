let latitude=51.298456, longtitude=-0.774743
mapboxg1.accessToken="pk.eyJ1IjoiaWRhdGV5b3VybXVtIiwiYSI6ImNsZmJnNXV5bTBkNmozcm12eXlpejBzNXEifQ.pr9GcKW6GsEAMuVm_4HjZg"
var map = new mapboxg1.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longtitude,latitude],
    zoom:16,
});
map.addControl(
    new mapboxg1.GeolocateControl({
        positonOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);
map.addControl(
    new Mapboxdirections({
        accessToken:mapboxg1.accessToken
    }),
    "top-left"                                                                                                                      
)