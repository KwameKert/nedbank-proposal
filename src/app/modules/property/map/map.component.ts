import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpEvent, HttpEventType  } from '@angular/common/http';
import { Router } from '@angular/router';



import * as L from 'leaflet';

declare const statesData: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	private map;
	public loading: boolean;
	private initMap(): void {
		this.map = L.map('map', {
			center: [  -34.0446283, 18.6999279 ],
			zoom: 17,
			scrollWheelZoom: false
		});
	}
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
		this.initMap();

		let self = this;

		const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibi1xdWJlIiwiYSI6ImNpbzJya2p3czAwem53ZGx5YmZxZjkxcXMifQ.7U8BvCm75GU1Q4orDPTYwA', {
			maxZoom: 20,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
				'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/light-v9',
			tileSize: 512,
			zoomOffset: -1
		});

		console.log(tiles);

		tiles.addTo(this.map);

		// control that shows state info on hover
		let info = L.control();

		info.onAdd = function (map) {
			this._div = L.DomUtil.create('div', 'map-info');
			this.update();
			return this._div;
		};

		info.update = function (props) {
			this._div.innerHTML = '<h4>Cape Town Data</h4>' +  (props ?
				'Street Name: '+'<b>' + props.STR_NAME + '</b><br />'+ 'Land parcel #: ' + '<b>' + props.SL_LAND_PR + '</b> <br />' + 'Status: ' + '<b>'  + props.LU_LGL_STS + '</b>'
				: 'Hover over a state <br /> Double click to enlarge');
		};

		info.addTo(this.map);

		// get color depending on population density value
		function getColor(d) {
            if(d == "Registered" ){
				return "#b30059";
			}
			if(d == "Confirmed" ){
				return "#5073e6";
			}
			if(d == "SG Approved" ){
				return "#E31A1C";
			}
		}

		function style(feature) {
			return {
				weight: 1,
				opacity: 1,
				//color: 'white',
				color: 'grey',
				dashArray: '3',
				fillOpacity: 0.1,
				fillColor: getColor(feature.properties.LU_LGL_STS)
			};
		}

		function highlightFeature(e) {
			let layer = e.target;

			layer.setStyle({
				weight: 5,
				//color: '#666',
				color: 'grey',
				dashArray: '',
				fillOpacity: 0.1
			});

			if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
				layer.bringToFront();
			}

			info.update(layer.feature.properties);
		}

		let geojson;

		function resetHighlight(e) {
			geojson.resetStyle(e.target);
			info.update();
		}

		function zoomToFeature(e) {
			this.map.fitBounds(e.target.getBounds());
		}

		function goToPropertyDetails(e){
			let layer = e.target;

			//console.log(layer.feature.properties);

      let landParcel = layer.feature.properties.SL_LAND_PR;
      console.log(layer.feature.properties);
			//console.log(landParcel);
		//	self.getErfId(landParcel);
		}

		function onEachFeature(feature, layer) {
			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight,
				//click: zoomToFeature
				click: goToPropertyDetails
			});
		}

		geojson = L.geoJson(statesData, {
			style: style,
			onEachFeature: onEachFeature
		}).addTo(this.map);

		this.map.attributionControl.addAttribution('Map data &copy; <a href="http://seso.global/">Seso Global</a>');


		const legend = L.control({position: 'bottomright'});

		legend.onAdd = function (map) {

			var div = L.DomUtil.create('div', 'map-info map-legend'),
				grades = ['SG Approved', 'Confirmed', 'Registered'],
				labels = [],
				from, to;

			for (var i = 0; i < grades.length; i++) {
				from = grades[i];
				to = grades[i + 1];

				labels.push(
					'<i style="background:' + getColor(from + 1) + '"></i> ' +
					from + (to ? '&ndash;' + to : '+'));
			}

			div.innerHTML = labels.join('<br>');
			return div;
		};

		legend.addTo(this.map);
	}





}
