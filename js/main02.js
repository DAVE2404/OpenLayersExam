

var iconFeature = new ol.Feature({
  geometry: new ol.geom.Point([0, 0]),
});

var vectorSource = new ol.source.VectorSource({
  features: [iconFeature],
});

var vectorLayer = new ol.layer.VectorLayer({
  source: vectorSource,
});

var rasterLayer = new ol.layer.TileLayer({
  source: new ol.source.Stamen({
    layer: 'toner',
  }),
});

var map = new ol.Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

var gifUrl = 'data/globe.gif';
var gif = gifler(gifUrl);
gif.frames(
  document.createElement('canvas'),
  function (ctx, frame) {
    if (!iconFeature.getStyle()) {
      iconFeature.setStyle(
        new ol.Style({
          image: new ol.Icon({
            img: ctx.canvas,
            imgSize: [frame.width, frame.height],
            opacity: 0.8,
          }),
        })
      );
    }
    ctx.clearRect(0, 0, frame.width, frame.height);
    ctx.drawImage(frame.buffer, frame.x, frame.y);
    map.render();
  },
  true
);

// change mouse cursor when over icon
map.on('pointermove', function (e) {
  var pixel = map.getEventPixel(e.originalEvent);
  var hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});
