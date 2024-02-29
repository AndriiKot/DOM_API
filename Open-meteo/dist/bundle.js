(()=>{"use strict";var e,t,i,s,r={978:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Aggregation=void 0,function(e){e[e.none=0]="none",e[e.minimum=1]="minimum",e[e.maximum=2]="maximum",e[e.mean=3]="mean",e[e.p10=4]="p10",e[e.p25=5]="p25",e[e.median=6]="median",e[e.p75=7]="p75",e[e.p90=8]="p90",e[e.dominant=9]="dominant",e[e.sum=10]="sum"}(i||(t.Aggregation=i={}))},289:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Model=void 0,function(e){e[e[void 0]=0]="undefined",e[e.best_match=1]="best_match",e[e.gfs_seamless=2]="gfs_seamless",e[e.gfs_global=3]="gfs_global",e[e.gfs_hrrr=4]="gfs_hrrr",e[e.meteofrance_seamless=5]="meteofrance_seamless",e[e.meteofrance_arpege_seamless=6]="meteofrance_arpege_seamless",e[e.meteofrance_arpege_world=7]="meteofrance_arpege_world",e[e.meteofrance_arpege_europe=8]="meteofrance_arpege_europe",e[e.meteofrance_arome_seamless=9]="meteofrance_arome_seamless",e[e.meteofrance_arome_france=10]="meteofrance_arome_france",e[e.meteofrance_arome_france_hd=11]="meteofrance_arome_france_hd",e[e.jma_seamless=12]="jma_seamless",e[e.jma_msm=13]="jma_msm",e[e.jms_gsm=14]="jms_gsm",e[e.jma_gsm=15]="jma_gsm",e[e.gem_seamless=16]="gem_seamless",e[e.gem_global=17]="gem_global",e[e.gem_regional=18]="gem_regional",e[e.gem_hrdps_continental=19]="gem_hrdps_continental",e[e.icon_seamless=20]="icon_seamless",e[e.icon_global=21]="icon_global",e[e.icon_eu=22]="icon_eu",e[e.icon_d2=23]="icon_d2",e[e.ecmwf_ifs04=24]="ecmwf_ifs04",e[e.metno_nordic=25]="metno_nordic",e[e.era5_seamless=26]="era5_seamless",e[e.era5=27]="era5",e[e.cerra=28]="cerra",e[e.era5_land=29]="era5_land",e[e.ecmwf_ifs=30]="ecmwf_ifs",e[e.gwam=31]="gwam",e[e.ewam=32]="ewam",e[e.glofas_seamless_v3=33]="glofas_seamless_v3",e[e.glofas_forecast_v3=34]="glofas_forecast_v3",e[e.glofas_consolidated_v3=35]="glofas_consolidated_v3",e[e.glofas_seamless_v4=36]="glofas_seamless_v4",e[e.glofas_forecast_v4=37]="glofas_forecast_v4",e[e.glofas_consolidated_v4=38]="glofas_consolidated_v4",e[e.gfs025=39]="gfs025",e[e.gfs05=40]="gfs05",e[e.CMCC_CM2_VHR4=41]="CMCC_CM2_VHR4",e[e.FGOALS_f3_H_highresSST=42]="FGOALS_f3_H_highresSST",e[e.FGOALS_f3_H=43]="FGOALS_f3_H",e[e.HiRAM_SIT_HR=44]="HiRAM_SIT_HR",e[e.MRI_AGCM3_2_S=45]="MRI_AGCM3_2_S",e[e.EC_Earth3P_HR=46]="EC_Earth3P_HR",e[e.MPI_ESM1_2_XR=47]="MPI_ESM1_2_XR",e[e.NICAM16_8S=48]="NICAM16_8S",e[e.cams_europe=49]="cams_europe",e[e.cams_global=50]="cams_global",e[e.cfsv2=51]="cfsv2",e[e.era5_ocean=52]="era5_ocean",e[e.cma_grapes_global=53]="cma_grapes_global",e[e.bom_access_global=54]="bom_access_global",e[e.bom_access_global_ensemble=55]="bom_access_global_ensemble",e[e.arpae_cosmo_seamless=56]="arpae_cosmo_seamless",e[e.arpae_cosmo_2i=57]="arpae_cosmo_2i",e[e.arpae_cosmo_2i_ruc=58]="arpae_cosmo_2i_ruc",e[e.arpae_cosmo_5m=59]="arpae_cosmo_5m",e[e.ecmwf_ifs025=60]="ecmwf_ifs025"}(i||(t.Model=i={}))},56:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Unit=void 0,function(e){e[e[void 0]=0]="undefined",e[e.celsius=1]="celsius",e[e.centimetre=2]="centimetre",e[e.cubic_metre_per_cubic_metre=3]="cubic_metre_per_cubic_metre",e[e.cubic_metre_per_second=4]="cubic_metre_per_second",e[e.degree_direction=5]="degree_direction",e[e.dimensionless_integer=6]="dimensionless_integer",e[e.dimensionless=7]="dimensionless",e[e.european_air_quality_index=8]="european_air_quality_index",e[e.fahrenheit=9]="fahrenheit",e[e.feet=10]="feet",e[e.fraction=11]="fraction",e[e.gdd_celsius=12]="gdd_celsius",e[e.geopotential_metre=13]="geopotential_metre",e[e.grains_per_cubic_metre=14]="grains_per_cubic_metre",e[e.gram_per_kilogram=15]="gram_per_kilogram",e[e.hectopascal=16]="hectopascal",e[e.hours=17]="hours",e[e.inch=18]="inch",e[e.iso8601=19]="iso8601",e[e.joule_per_kilogram=20]="joule_per_kilogram",e[e.kelvin=21]="kelvin",e[e.kilopascal=22]="kilopascal",e[e.kilogram_per_square_metre=23]="kilogram_per_square_metre",e[e.kilometres_per_hour=24]="kilometres_per_hour",e[e.knots=25]="knots",e[e.megajoule_per_square_metre=26]="megajoule_per_square_metre",e[e.metre_per_second_not_unit_converted=27]="metre_per_second_not_unit_converted",e[e.metre_per_second=28]="metre_per_second",e[e.metre=29]="metre",e[e.micrograms_per_cubic_metre=30]="micrograms_per_cubic_metre",e[e.miles_per_hour=31]="miles_per_hour",e[e.millimetre=32]="millimetre",e[e.pascal=33]="pascal",e[e.per_second=34]="per_second",e[e.percentage=35]="percentage",e[e.seconds=36]="seconds",e[e.unix_time=37]="unix_time",e[e.us_air_quality_index=38]="us_air_quality_index",e[e.watt_per_square_metre=39]="watt_per_square_metre",e[e.wmo_code=40]="wmo_code"}(i||(t.Unit=i={}))},666:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,r)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VariableWithValues=void 0;const a=n(i(162)),o=i(978),_=i(56),l=i(458);class b{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsVariableWithValues(e,t){return(t||new b).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsVariableWithValues(e,t){return e.setPosition(e.position()+a.SIZE_PREFIX_LENGTH),(t||new b).__init(e.readInt32(e.position())+e.position(),e)}variable(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint8(this.bb_pos+e):l.Variable.undefined}unit(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):_.Unit.undefined}value(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb_pos+e):0}values(e){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readFloat32(this.bb.__vector(this.bb_pos+t)+4*e):0}valuesLength(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}valuesArray(){const e=this.bb.__offset(this.bb_pos,10);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}valuesInt64(e){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+8*e):BigInt(0)}valuesInt64Length(){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}altitude(){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt16(this.bb_pos+e):0}aggregation(){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint8(this.bb_pos+e):o.Aggregation.none}pressureLevel(){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readInt16(this.bb_pos+e):0}depth(){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.readInt16(this.bb_pos+e):0}depthTo(){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.readInt16(this.bb_pos+e):0}ensembleMember(){const e=this.bb.__offset(this.bb_pos,24);return e?this.bb.readInt16(this.bb_pos+e):0}previousDay(){const e=this.bb.__offset(this.bb_pos,26);return e?this.bb.readInt16(this.bb_pos+e):0}}t.VariableWithValues=b},458:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.Variable=void 0,function(e){e[e[void 0]=0]="undefined",e[e.apparent_temperature=1]="apparent_temperature",e[e.cape=2]="cape",e[e.cloud_cover=3]="cloud_cover",e[e.cloud_cover_high=4]="cloud_cover_high",e[e.cloud_cover_low=5]="cloud_cover_low",e[e.cloud_cover_mid=6]="cloud_cover_mid",e[e.daylight_duration=7]="daylight_duration",e[e.dew_point=8]="dew_point",e[e.diffuse_radiation=9]="diffuse_radiation",e[e.diffuse_radiation_instant=10]="diffuse_radiation_instant",e[e.direct_normal_irradiance=11]="direct_normal_irradiance",e[e.direct_normal_irradiance_instant=12]="direct_normal_irradiance_instant",e[e.direct_radiation=13]="direct_radiation",e[e.direct_radiation_instant=14]="direct_radiation_instant",e[e.et0_fao_evapotranspiration=15]="et0_fao_evapotranspiration",e[e.evapotranspiration=16]="evapotranspiration",e[e.freezing_level_height=17]="freezing_level_height",e[e.growing_degree_days=18]="growing_degree_days",e[e.is_day=19]="is_day",e[e.latent_heat_flux=20]="latent_heat_flux",e[e.leaf_wetness_probability=21]="leaf_wetness_probability",e[e.lifted_index=22]="lifted_index",e[e.lightning_potential=23]="lightning_potential",e[e.precipitation=24]="precipitation",e[e.precipitation_hours=25]="precipitation_hours",e[e.precipitation_probability=26]="precipitation_probability",e[e.pressure_msl=27]="pressure_msl",e[e.rain=28]="rain",e[e.relative_humidity=29]="relative_humidity",e[e.runoff=30]="runoff",e[e.sensible_heat_flux=31]="sensible_heat_flux",e[e.shortwave_radiation=32]="shortwave_radiation",e[e.shortwave_radiation_instant=33]="shortwave_radiation_instant",e[e.showers=34]="showers",e[e.snow_depth=35]="snow_depth",e[e.snow_height=36]="snow_height",e[e.snowfall=37]="snowfall",e[e.snowfall_height=38]="snowfall_height",e[e.snowfall_water_equivalent=39]="snowfall_water_equivalent",e[e.sunrise=40]="sunrise",e[e.sunset=41]="sunset",e[e.soil_moisture=42]="soil_moisture",e[e.soil_moisture_index=43]="soil_moisture_index",e[e.soil_temperature=44]="soil_temperature",e[e.surface_pressure=45]="surface_pressure",e[e.surface_temperature=46]="surface_temperature",e[e.temperature=47]="temperature",e[e.terrestrial_radiation=48]="terrestrial_radiation",e[e.terrestrial_radiation_instant=49]="terrestrial_radiation_instant",e[e.total_column_integrated_water_vapour=50]="total_column_integrated_water_vapour",e[e.updraft=51]="updraft",e[e.uv_index=52]="uv_index",e[e.uv_index_clear_sky=53]="uv_index_clear_sky",e[e.vapour_pressure_deficit=54]="vapour_pressure_deficit",e[e.visibility=55]="visibility",e[e.weather_code=56]="weather_code",e[e.wind_direction=57]="wind_direction",e[e.wind_gusts=58]="wind_gusts",e[e.wind_speed=59]="wind_speed",e[e.vertical_velocity=60]="vertical_velocity",e[e.geopotential_height=61]="geopotential_height",e[e.wet_bulb_temperature=62]="wet_bulb_temperature",e[e.river_discharge=63]="river_discharge",e[e.wave_height=64]="wave_height",e[e.wave_period=65]="wave_period",e[e.wave_direction=66]="wave_direction",e[e.wind_wave_height=67]="wind_wave_height",e[e.wind_wave_period=68]="wind_wave_period",e[e.wind_wave_peak_period=69]="wind_wave_peak_period",e[e.wind_wave_direction=70]="wind_wave_direction",e[e.swell_wave_height=71]="swell_wave_height",e[e.swell_wave_period=72]="swell_wave_period",e[e.swell_wave_peak_period=73]="swell_wave_peak_period",e[e.swell_wave_direction=74]="swell_wave_direction",e[e.pm10=75]="pm10",e[e.pm2p5=76]="pm2p5",e[e.dust=77]="dust",e[e.aerosol_optical_depth=78]="aerosol_optical_depth",e[e.carbon_monoxide=79]="carbon_monoxide",e[e.nitrogen_dioxide=80]="nitrogen_dioxide",e[e.ammonia=81]="ammonia",e[e.ozone=82]="ozone",e[e.sulphur_dioxide=83]="sulphur_dioxide",e[e.alder_pollen=84]="alder_pollen",e[e.birch_pollen=85]="birch_pollen",e[e.grass_pollen=86]="grass_pollen",e[e.mugwort_pollen=87]="mugwort_pollen",e[e.olive_pollen=88]="olive_pollen",e[e.ragweed_pollen=89]="ragweed_pollen",e[e.european_aqi=90]="european_aqi",e[e.european_aqi_pm2p5=91]="european_aqi_pm2p5",e[e.european_aqi_pm10=92]="european_aqi_pm10",e[e.european_aqi_nitrogen_dioxide=93]="european_aqi_nitrogen_dioxide",e[e.european_aqi_ozone=94]="european_aqi_ozone",e[e.european_aqi_sulphur_dioxide=95]="european_aqi_sulphur_dioxide",e[e.us_aqi=96]="us_aqi",e[e.us_aqi_pm2p5=97]="us_aqi_pm2p5",e[e.us_aqi_pm10=98]="us_aqi_pm10",e[e.us_aqi_nitrogen_dioxide=99]="us_aqi_nitrogen_dioxide",e[e.us_aqi_ozone=100]="us_aqi_ozone",e[e.us_aqi_sulphur_dioxide=101]="us_aqi_sulphur_dioxide",e[e.us_aqi_carbon_monoxide=102]="us_aqi_carbon_monoxide",e[e.sunshine_duration=103]="sunshine_duration",e[e.convective_inhibition=104]="convective_inhibition",e[e.shortwave_radiation_clear_sky=105]="shortwave_radiation_clear_sky",e[e.global_tilted_irradiance=106]="global_tilted_irradiance",e[e.global_tilted_irradiance_instant=107]="global_tilted_irradiance_instant"}(i||(t.Variable=i={}))},714:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,r)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.VariablesWithTime=void 0;const a=n(i(162)),o=i(666);class _{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsVariablesWithTime(e,t){return(t||new _).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsVariablesWithTime(e,t){return e.setPosition(e.position()+a.SIZE_PREFIX_LENGTH),(t||new _).__init(e.readInt32(e.position())+e.position(),e)}time(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}timeEnd(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}interval(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):0}variables(e,t){const i=this.bb.__offset(this.bb_pos,10);return i?(t||new o.VariableWithValues).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*e),this.bb):null}variablesLength(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}}t.VariablesWithTime=_},513:function(e,t,i){var s=this&&this.__createBinding||(Object.create?function(e,t,i,s){void 0===s&&(s=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,s,r)}:function(e,t,i,s){void 0===s&&(s=i),e[s]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&s(t,e,i);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WeatherApiResponse=void 0;const a=n(i(162)),o=i(289),_=i(714);class l{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsWeatherApiResponse(e,t){return(t||new l).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsWeatherApiResponse(e,t){return e.setPosition(e.position()+a.SIZE_PREFIX_LENGTH),(t||new l).__init(e.readInt32(e.position())+e.position(),e)}latitude(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb_pos+e):0}longitude(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb_pos+e):0}elevation(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb_pos+e):0}generationTimeMilliseconds(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}locationId(){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}model(){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint8(this.bb_pos+e):o.Model.undefined}utcOffsetSeconds(){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):0}timezone(e){const t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__string(this.bb_pos+t,e):null}timezoneAbbreviation(e){const t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb_pos+t,e):null}current(e){const t=this.bb.__offset(this.bb_pos,22);return t?(e||new _.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}daily(e){const t=this.bb.__offset(this.bb_pos,24);return t?(e||new _.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}hourly(e){const t=this.bb.__offset(this.bb_pos,26);return t?(e||new _.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}minutely15(e){const t=this.bb.__offset(this.bb_pos,28);return t?(e||new _.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}sixHourly(e){const t=this.bb.__offset(this.bb_pos,30);return t?(e||new _.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}}t.WeatherApiResponse=l},694:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var s=i(354),r=e([s]);s=(r.then?(await r)():r)[0],console.log(s.P.current);const n=Array.from(document.querySelector(".tab-list__app-open-meteo").children),a=Array.from(document.querySelector(".content-list__app-open-meteo").children),o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-active";e.find((e=>e.classList.remove(`${t}`)))},_=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";e[t].classList.add(`${i}`)},l=(e,t)=>{e.addEventListener("click",(()=>{e.classList.contains("is-active")||(o(n),o(a),_(n,t),_(a,t))}))};Array.from(n).forEach(l),t()}catch(e){t(e)}}))},354:(e,t,i)=>{i.a(e,(async(e,s)=>{try{i.d(t,{P:()=>u});var r=i(133);const e={latitude:51.5085,longitude:-.1257,current:["temperature_2m","relative_humidity_2m","apparent_temperature","is_day","precipitation","rain","snowfall"],minutely_15:["temperature_2m","relative_humidity_2m","apparent_temperature"],hourly:["temperature_2m","apparent_temperature","is_day"],daily:["weather_code","temperature_2m_max","temperature_2m_min","sunrise","sunset"],timezone:"Europe/London",past_hours:24,past_minutely_15:24,forecast_hours:24,forecast_minutely_15:96},n="https://api.open-meteo.com/v1/forecast",a=await(0,r.fetchWeatherApi)(n,e),o=(e,t,i)=>Array.from({length:(t-e)/i},((t,s)=>e+s*i)),_=a[0],l=_.utcOffsetSeconds(),b=(_.timezone(),_.timezoneAbbreviation(),_.latitude(),_.longitude(),_.current()),h=_.minutely15(),c=_.hourly(),u={current:{time:new Date(1e3*(Number(b.time())+l)),temperature2m:b.variables(0).value(),relativeHumidity2m:b.variables(1).value(),apparentTemperature:b.variables(2).value(),isDay:b.variables(3).value(),precipitation:b.variables(4).value(),rain:b.variables(5).value(),snowfall:b.variables(6).value()},minutely15:{time:o(Number(h.time()),Number(h.timeEnd()),h.interval()).map((e=>new Date(1e3*(e+l)))),temperature2m:h.variables(0).valuesArray(),relativeHumidity2m:h.variables(1).valuesArray(),apparentTemperature:h.variables(2).valuesArray()},hourly:{time:o(Number(c.time()),Number(c.timeEnd()),c.interval()).map((e=>new Date(1e3*(e+l)))),temperature2m:c.variables(0).valuesArray(),apparentTemperature:c.variables(1).valuesArray(),isDay:c.variables(2).valuesArray()}};s()}catch(e){s(e)}}),1)},162:(e,t,i)=>{i.r(t),i.d(t,{Builder:()=>u,ByteBuffer:()=>c,Encoding:()=>h,FILE_IDENTIFIER_LENGTH:()=>n,SIZEOF_INT:()=>r,SIZEOF_SHORT:()=>s,SIZE_PREFIX_LENGTH:()=>a,float32:()=>_,float64:()=>l,int32:()=>o,isLittleEndian:()=>b});const s=2,r=4,n=4,a=4,o=new Int32Array(2),_=new Float32Array(o.buffer),l=new Float64Array(o.buffer),b=1===new Uint16Array(new Uint8Array([1,0]).buffer)[0];var h;!function(e){e[e.UTF8_BYTES=1]="UTF8_BYTES",e[e.UTF16_STRING=2]="UTF16_STRING"}(h||(h={}));class c{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(e){return new c(new Uint8Array(e))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return o[0]=this.readInt32(e),_[0]}readFloat64(e){return o[b?0:1]=this.readInt32(e),o[b?1:0]=this.readInt32(e+4),l[0]}writeInt8(e,t){this.bytes_[e]=t}writeUint8(e,t){this.bytes_[e]=t}writeInt16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeUint16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeInt32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeUint32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeInt64(e,t){this.writeInt32(e,Number(BigInt.asIntN(32,t))),this.writeInt32(e+4,Number(BigInt.asIntN(32,t>>BigInt(32))))}writeUint64(e,t){this.writeUint32(e,Number(BigInt.asUintN(32,t))),this.writeUint32(e+4,Number(BigInt.asUintN(32,t>>BigInt(32))))}writeFloat32(e,t){_[0]=t,this.writeInt32(e,o[0])}writeFloat64(e,t){l[0]=t,this.writeInt32(e,o[b?0:1]),this.writeInt32(e+4,o[b?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+r+n)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let e="";for(let t=0;t<n;t++)e+=String.fromCharCode(this.readInt8(this.position_+r+t));return e}__offset(e,t){const i=e-this.readInt32(e);return t<this.readInt16(i)?this.readInt16(i+t):0}__union(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e}__string(e,t){e+=this.readInt32(e);const i=this.readInt32(e);e+=r;const s=this.bytes_.subarray(e,e+i);return t===h.UTF8_BYTES?s:this.text_decoder_.decode(s)}__union_with_string(e,t){return"string"==typeof e?this.__string(t):this.__union(e,t)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+r}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=n)throw new Error("FlatBuffers: file identifier must be length "+n);for(let t=0;t<n;t++)if(e.charCodeAt(t)!=this.readInt8(this.position()+r+t))return!1;return!0}createScalarList(e,t){const i=[];for(let s=0;s<t;++s){const t=e(s);null!==t&&i.push(t)}return i}createObjList(e,t){const i=[];for(let s=0;s<t;++s){const t=e(s);null!==t&&i.push(t.unpack())}return i}}class u{constructor(e){let t;this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder,t=e||1024,this.bb=c.allocate(t),this.space=t}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(e,t){e>this.minalign&&(this.minalign=e);const i=1+~(this.bb.capacity()-this.space+t)&e-1;for(;this.space<i+e+t;){const e=this.bb.capacity();this.bb=u.growByteBuffer(this.bb),this.space+=this.bb.capacity()-e}this.pad(i)}pad(e){for(let t=0;t<e;t++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(this.space-=1,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,t,i){(this.force_defaults||t!=i)&&(this.addInt8(t),this.slot(e))}addFieldInt16(e,t,i){(this.force_defaults||t!=i)&&(this.addInt16(t),this.slot(e))}addFieldInt32(e,t,i){(this.force_defaults||t!=i)&&(this.addInt32(t),this.slot(e))}addFieldInt64(e,t,i){(this.force_defaults||t!==i)&&(this.addInt64(t),this.slot(e))}addFieldFloat32(e,t,i){(this.force_defaults||t!=i)&&(this.addFloat32(t),this.slot(e))}addFieldFloat64(e,t,i){(this.force_defaults||t!=i)&&(this.addFloat64(t),this.slot(e))}addFieldOffset(e,t,i){(this.force_defaults||t!=i)&&(this.addOffset(t),this.slot(e))}addFieldStruct(e,t,i){t!=i&&(this.nested(t),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){null!==this.vtable&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){const t=e.capacity();if(3221225472&t)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=t<<1,s=c.allocate(i);return s.setPosition(i-t),s.bytes().set(e.bytes(),i-t),s}addOffset(e){this.prep(r,0),this.writeInt32(this.offset()-e+r)}startObject(e){this.notNested(),null==this.vtable&&(this.vtable=[]),this.vtable_in_use=e;for(let t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(null==this.vtable||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const e=this.offset();let t=this.vtable_in_use-1;for(;t>=0&&0==this.vtable[t];t--);const i=t+1;for(;t>=0;t--)this.addInt16(0!=this.vtable[t]?e-this.vtable[t]:0);this.addInt16(e-this.object_start);const r=(i+2)*s;this.addInt16(r);let n=0;const a=this.space;e:for(t=0;t<this.vtables.length;t++){const e=this.bb.capacity()-this.vtables[t];if(r==this.bb.readInt16(e)){for(let t=s;t<r;t+=s)if(this.bb.readInt16(a+t)!=this.bb.readInt16(e+t))continue e;n=this.vtables[t];break}}return n?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,n-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,t,i){const s=i?a:0;if(t){const e=t;if(this.prep(this.minalign,r+n+s),e.length!=n)throw new TypeError("FlatBuffers: file identifier must be length "+n);for(let t=n-1;t>=0;t--)this.writeInt8(e.charCodeAt(t))}this.prep(this.minalign,r+s),this.addOffset(e),s&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,t){this.finish(e,t,!0)}requiredField(e,t){const i=this.bb.capacity()-e,s=i-this.bb.readInt32(i);if(!(t<this.bb.readInt16(s)&&0!=this.bb.readInt16(s+t)))throw new TypeError("FlatBuffers: field "+t+" must be set")}startVector(e,t,i){this.notNested(),this.vector_num_elems=t,this.prep(r,e*t),this.prep(i,e*t)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);const t=this.createString(e);return this.string_maps.set(e,t),t}createString(e){if(null==e)return 0;let t;t=e instanceof Uint8Array?e:this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length);for(let e=0,i=this.space,s=this.bb.bytes();e<t.length;e++)s[i++]=t[e];return this.endVector()}createObjectOffset(e){return null===e?0:"string"==typeof e?this.createString(e):e.pack(this)}createObjectOffsetList(e){const t=[];for(let i=0;i<e.length;++i){const s=e[i];if(null===s)throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");t.push(this.createObjectOffset(s))}return t}createStructOffsetList(e,t){return t(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}}},133:function(e,t,i){var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(r,n){function a(e){try{_(s.next(e))}catch(e){n(e)}}function o(e){try{_(s.throw(e))}catch(e){n(e)}}function _(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,o)}_((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.fetchWeatherApi=void 0;const r=i(162),n=i(513),a=e=>new Promise((t=>setTimeout(t,e)));t.fetchWeatherApi=function(e,t,i=3,o=.2,_=2){return s(this,void 0,void 0,(function*(){const l=new URLSearchParams(t);l.set("format","flatbuffers");const b=yield function(e,t=3,i=.5,r=2){return s(this,void 0,void 0,(function*(){const s=[500,502,504];let n=0,o=yield fetch(e);for(;s.includes(o.status);){if(n++,n>=t)throw new Error(o.statusText);const s=1e3*Math.min(i*Math.pow(2,n),r);yield a(s),o=yield fetch(e)}if([400,429].includes(o.status)){const e=yield o.json();if("reason"in e)throw new Error(e.reason);throw new Error(o.statusText)}return o}))}(`${e}?${l.toString()}`,i,o,_),h=new r.ByteBuffer(new Uint8Array(yield b.arrayBuffer())),c=[];let u=0;for(;u<h.capacity();){h.setPosition(u);const e=h.readInt32(h.position());c.push(n.WeatherApiResponse.getSizePrefixedRootAsWeatherApiResponse(h)),u+=e+4}return c}))}}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e].call(i.exports,i,i.exports,a),i.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",i="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",s=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(r,n,a)=>{var o;a&&((o=[]).d=-1);var _,l,b,h=new Set,c=r.exports,u=new Promise(((e,t)=>{b=t,l=e}));u[t]=c,u[e]=e=>(o&&e(o),h.forEach(e),u.catch((e=>{}))),r.exports=u,n((r=>{var n;_=(r=>r.map((r=>{if(null!==r&&"object"==typeof r){if(r[e])return r;if(r.then){var n=[];n.d=0,r.then((e=>{a[t]=e,s(n)}),(e=>{a[i]=e,s(n)}));var a={};return a[e]=e=>e(n),a}}var o={};return o[e]=e=>{},o[t]=r,o})))(r);var a=()=>_.map((e=>{if(e[i])throw e[i];return e[t]})),l=new Promise((t=>{(n=()=>t(a)).r=0;var i=e=>e!==o&&!h.has(e)&&(h.add(e),e&&!e.d&&(n.r++,e.push(n)));_.map((t=>t[e](i)))}));return n.r?l:a()}),(e=>(e?b(u[i]=e):l(c),s(o)))),o&&o.d<0&&(o.d=0)},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(694)})();
//# sourceMappingURL=bundle.js.map