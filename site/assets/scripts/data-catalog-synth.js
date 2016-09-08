module.exports = {
source : 'Synthea',
demographics : {
"pop" : {
  "name":"Population",
  "description":"Number of Residents",
  "data_set_name" : "stats",
  "data_source_name" : "Synthetic data generated from Synthea",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "pop",
  "value_key" : "pop",
  "legend" : "Population",
  "legend_title" : "Population",
  "legend_label" : "Population",
  "palette" : "PuRd",
  "format_specifier" : ",.0f",
  "value_format_specifier" : ",.0f",
  "active" : true
},
"pop_sm" : {
  "name":"Population Density",
  "description":"Number of residents per square mile",
  "data_set_name" : "stats",
  "data_source_name" : "Computed from Synthea synthetic data",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "pop_sm",
  "value_key" : "pop_sm",
  "legend" : "Pop. Density",
  "legend_title" : "Population Density",
  "legend_label" : "Pop. Density",
  "palette" : "PuRd",
  "format_specifier" : ".1f",
  "unit_label" : " (per mi²)",
  "active" : true
},
"sq_mi" : {
  "name":"Square Miles",
  "description":"Area of region in square miles",
  "data_set_name" : "stats",
  "data_source_name" : "Computed from Synthea synthetic data",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "sq_mi",
  "value_key" : "sq_mi",
  "legend" : "Area",
  "legend_title" : "Area",
  "legend_label" : "Area (sq mi)",
  "palette" : "PuRd",
  "format_specifier" : ",f",
  "unit_label" : " sq. mi.",
  "active" : false
},
"pct_female" : {
  "name":"Female Population",
  "description":"Percentage of the population that is female",
  "data_set_name" : "stats",
  "data_source_name" : "Synthetic data generated from Synthea",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "pct_female",
  "value_key" : "pct_female",
  "legend" : "Pct. Female",
  "legend_title" : "Female Population",
  "legend_label" : "Female",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
},
"pct_male" : {
  "name":"Male Population",
  "description":"Percentage of the population that is male",
  "data_set_name" : "stats",
  "data_source_name" : "Synthetic data generated from Synthea",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "pct_male",
  "value_key" : "pct_male",
  "legend" : "Pct. Male",
  "legend_title" : "Male Population",
  "legend_label" : "Male",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
},
"chr_hs_grad" : {
  "name":"High School Graduates",
  "description":"Percentage of the population with a high school degree or GED ",
  "data_set_name" : "stats",
  "data_source_name" : "CHR",
  "data_source_url" : "http://www2.census.gov/acs2012_5yr/summaryfile/",
  "key" : "chr_hs_grad",
  "value_key" : "chr_hs_grad",
  "legend" : "Pct. HS Graduates",
  "legend_title":"Population of High School Graduates",
  "legend_label" : "HS",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
},
"chr_college" : {
  "name":"College Graduates",
  "description":"Percentage of the population with a 4-year college degree",
  "data_set_name" : "stats",
  "data_source_name" : "US Census American Community Survey (ACS) Data",
  "data_source_url" : "http://www2.census.gov/acs2012_5yr/summaryfile/",
  "key" : "chr_college",
  "value_key" : "chr_college",
  "legend" : "Pct. College Graduates",
  "legend_title":"Population of College Graduates",
  "legend_label" : "College",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
},
"chr_unemployed" : {
  "name":"Unemployed Population",
  "description":"Percentage of the population that is unemployed",
  "data_set_name" : "stats",
  "data_source_name" : "US Census American Community Survey (ACS) Data",
  "data_source_url" : "http://www2.census.gov/acs2012_5yr/summaryfile/",
  "key" : "chr_unemployed",
  "value_key" : "chr_unemployed",
  "legend" : "Pct. Unemployed",
  "legend_title":"Unemployed Population",
  "legend_label" : "Unemployed",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
},
"pct_diabetes" : {
  "name":"Diabetes Prevalence",
  "description":"Percentage of the population with diabetes",
  "data_set_name" : "stats",
  "data_source_name" : "Synthetic data generated from Synthea",
  "data_source_url" : "https://github.com/synthetichealth/synthea",
  "key" : "pct_diabetes",
  "value_key" : "pct_diabetes",
  "legend" : "Diabetes %",
  "legend_title":"Diabetes Prevalence",
  "legend_label" : "Diabetes",
  "palette" : "PuRd",
  "format_specifier" : ".1%",
  "active" : true
}
},

geoLayers : {
"county" :{
  id:"county",
  name:"County GeoJSON",
  url:`${API_HOST}/api/v1/synth/counties`,
  primary_key: "ct_fips",
  parent_key: null,
  name_key: "ct_name",
  geometry:"county",
  geometry_label: "County",
  parent_geometry:"region",
  parent_geometry_label: "Region",
  properties : [
    {key:"sq_mi",name:"Area",unit:"Sq. Miles"},
    {key:"pop",name:"Population",unit:""},
    {key:"pop_sm",name:"Pop. Density",unit:"people per sq. mi."}]
},
"cousub":{
  id:"cousub",
  name:"Census County Division GeoJSON",
  url: `${API_HOST}/api/v1/synth/cousubs`,
  primary_key: "cs_fips",
  parent_key: "ct_fips",
  name_key: "cs_name",
  geometry:"cousub",
  geometry_label: "Census County Division",
  parent_geometry:"county",
  parent_geometry_label: "County",
  properties: [
    {key:"sq_mi",name:"Area",unit:"Sq. Miles"},
    {key:"pop",name:"Population",unit:""},
    {key:"pop_sm",name:"Pop. Density",unit:"people per sq. mi."}]
},
"county_geoms":{
  id:"county_geoms",
  name:"County GeoJSON, geometry only",
  url: `${API_HOST}/api/v1/synth/counties/geoms`,
  primary_key: "ct_fips",
  parent_key: null,
  name_key: "ct_name",
  geometry:"county",
  geometry_label: "County",
  properties : []
},
"cousub_geoms" : {
  id:"cousub_geoms",
  name:"Census County Division GeoJSON, geometry only",
  url: `${API_HOST}/api/v1/synth/cousubs`,
  primary_key: "cs_fips",
  parent_key: "ct_fips",
  name_key: "cs_name",
  geometry:"cousub",
  geometry_label: "Census County Division",
  parent_geometry:"county",
  parent_geometry_label: "County",
  properties: []
}
},

valueSets : {
"county_stats" :{
  id:"county_stats",
  data_name:'stats',
  name:"County Statistics",
  url: `${API_HOST}/api/v1/synth/counties/stats`,
  geometry:"county",
  geometry_label: "County",
  geo_layer_id: "county",
  primary_key:"ct_fips",
  parent_key: null,
  name_key: "ct_name",
  demographics :[
    "pop",
    "pop_sm",
    "pct_female",
    "pct_male",
    "pct_diabetes"
  ], 
  properties : [
    {key:"pct_female",name:"Female Population"},
    {key:"pct_male",name:"Male Population"},
    {key:"pop",name:"Population",unit:""},
    {key:"pop_sm",name:"Pop. Density",unit:"people per sq. mi."},
    {key:"sq_mi",name:"Area",unit:"Sq. Miles"}
  ]
},
"cousub_stats" : {
  id:"cousub_stats",
  data_name:'stats',
  name:"Census County Division Statistics",
  url: `${API_HOST}/api/v1/synth/cousubs/stats`,
  geometry:"cousub",
  geometry_label: "Minor Civil Division",
  geo_layer_id: "cousub",
  primary_key:"cs_fips",
  parent_key: "ct_fips",
  parent_name_key: "ct_name",
  name_key: "cs_name",
  demographics :[
    "pop",
    "pop_sm",
    "pct_female",
    "pct_male",
    "pct_diabetes"
  ], 
  properties : [
    {key:"pct_female",name:"Female Population"},
    {key:"pct_male",name:"Male Population"},
    {key:"pop",name:"Population",unit:""},
    {key:"pop_sm",name:"Pop. Density",unit:"people per sq. mi."},
    {key:"sq_mi",name:"Area",unit:"Sq. Miles"}
  ]
}
}

}