states=['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
      'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
      'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
      'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
      'New Jersey', 'New Mexico', 'New york', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
      'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
      'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
sun_needs=['PartialShade', 'Full Sun/PartialShade', 'Full Sun',
       'PartialShade/Full Shade', 'All Sun Types',
       'Full Sun/PartialShade/Full Shade', 'Flexible'];
soil_needs=['Well-drained', 'Well-drained, High fertility', 'Damp',
       'Well-drained, Damp', 'Dry', 'Droughty', 'Flexible'];
plant_types=['Flower', 'Animal Feed', 'Fruit', 'Other', 'Vegetable',
       'Grain/Nut'];
features=['Sun Needs', 'Soil Needs', 'Tolerates heat', 'Tolerates frost',
       'Non-invasive', 'Good for pressed flowers', 'Good for cut flowers',
       'Deer resistant', 'Attracts bees', 'Attracts butterflies',
       'Attracts beneficial insects', 'Attracts hummingbirds'];

// d3.csv('data/machine_learning.csv').then(data=>{
statesSel=d3.select('#statesSelection');
soilNeedsSel=d3.select('#soilNeedsSelection');
sunNeedsSel=d3.select('#sunNeedsSelection');
plantTypesSel=d3.select('#plantTypesSelection');
featuresSel=d3.select('#featuresSelection');
states.forEach(state=>{
	statesSel.append('option')
		.property('value', state)
		.text(state);
});
soil_needs.forEach(soil_need=>{
	soilNeedsSel.append('option')
		.property('value', soil_need)
		.text(soil_need);
});
sun_needs.forEach(sun_need=>{
	sunNeedsSel.append('option')
		.property('value', sun_need)
		.text(sun_need);
});
plant_types.forEach(plant_type=>{
	plantTypesSel.append('option')
		.property('value', plant_type)
		.text(plant_type);
});
features.forEach(feature=>{
	featuresSel.append('option')
		.property('value', feature)
		.text(feature);
});
// });

d3.select('#go').on('click', function() {
	var rec=d3.select('#recommendation')
	rec.html('')
	rec.html(statesSel.property('value')+soilNeedsSel.property('value')+sunNeedsSel.property('value'))
});


// funciton make_prediction(){
// 	# take you to a new page with 
// 	# var stateSelected=d3.select('#stateSelection').property('value')
// 	# var plantSelected=d3.select('#plantTypeSelection')


// 	inputArray=[0, 0, 0 1, ...]
// 	output=model.predict(inputArray)
// 	d3.select('#Recommendation').text(output)
// }

