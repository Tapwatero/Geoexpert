var simplemaps_worldmap_mapdata={

main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		border_color: '#ffffff',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
    state_description: '',
		state_color: '#88A4BC',
		state_hover_color: '#3B729F',
    state_url: '',
		border_size: 1.5,		
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description:  'Add location markers using latitude and longitude!',
    location_color: '#2041D4',
		location_opacity: .8,
		location_hover_opacity: 1,
    location_url: '',
		location_size: 25,
		location_type: 'square', // circle, square, image
		location_image_source: 'frog.png', //name of image in the map_images folder		
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#d5ddec',	
		label_hover_color: '#d5ddec',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
		hide_eastern_labels: 'no',
		
		//Zoom settings
		zoom: 'yes', //use default regions
		back_image: 'no',   //Use image instead of arrow for back zoom				
		arrow_color: '#3B729F',
		arrow_color_border: '#88A4BC',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: 4,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'yes', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
		url_new_tab: 'no', 
		images_directory: 'default', //e.g. 'map_images/'
		fade_time:  .1, //time to fade out		
		link_text: 'View Link'  //Text mobile browsers will see for links	
},
  
state_specific:{ 
	AE: { 
		name: 'United Arab Emirates',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		inactive: 'no',
		url: 'default',
		hide: 'no'
	},

	AF: { 
		name: 'Afghanistan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AL: { 
		name: 'Albania',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AM: { 
		name: 'Armenia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AO: { 
		name: 'Angola',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AR: { 
		name: 'Argentina',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AT: { 
		name: 'Austria',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AU: { 
		name: 'Australia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	AZ: { 
		name: 'Azerbaidjan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BA: { 
		name: 'Bosnia-Herzegovina',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BD: { 
		name: 'Bangladesh',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BE: { 
		name: 'Belgium',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BF: { 
		name: 'Burkina Faso',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BG: { 
		name: 'Bulgaria',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BH: { 
		name: 'Bahrain',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BI: { 
		name: 'Burundi',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BJ: { 
		name: 'Benin',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BN: { 
		name: 'Brunei Darussalam',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BO: { 
		name: 'Bolivia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BR: { 
		name: 'Brazil',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BS: { 
		name: 'Bahamas',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BT: { 
		name: 'Bhutan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BW: { 
		name: 'Botswana',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BY: { 
		name: 'Belarus',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	BZ: { 
		name: 'Belize',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CA: { 
		name: 'Canada',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CD: { 
		name: 'Democratic Republic of the Congo',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CF: { 
		name: 'Central African Republic',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CG: { 
		name: 'Republic of Congo',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CH: { 
		name: 'Switzerland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CI: { 
		name: 'Ivory Coast',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CL: { 
		name: 'Chile',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CM: { 
		name: 'Cameroon',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CN: { 
		name: 'China',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CO: { 
		name: 'Colombia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CR: { 
		name: 'Costa Rica',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CU: { 
		name: 'Cuba',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CV: { 
		name: 'Cape Verde',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CY: { 
		name: 'Cyprus',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	CZ: { 
		name: 'Czech Republic',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	DE: { 
		name: 'Germany',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	DJ: { 
		name: 'Djibouti',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	DK: { 
		name: 'Denmark',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	DO: { 
		name: 'Dominican Republic',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	DZ: { 
		name: 'Algeria',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	EC: { 
		name: 'Ecuador',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	EE: { 
		name: 'Estonia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	EG: { 
		name: 'Egypt',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	EH: { 
		name: 'Western Sahara',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ER: { 
		name: 'Eritrea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ES: { 
		name: 'Spain',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ET: { 
		name: 'Ethiopia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	FI: { 
		name: 'Finland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	FJ: { 
		name: 'Fiji',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	FK: { 
		name: 'Falkland Islands',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	FR: { 
		name: 'France',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GA: { 
		name: 'Gabon',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GB: { 
		name: 'Great Britain',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GE: { 
		name: 'Georgia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GF: { 
		name: 'French Guyana',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GH: { 
		name: 'Ghana',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GL: { 
		name: 'Greenland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GM: { 
		name: 'Gambia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GN: { 
		name: 'Guinea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GQ: { 
		name: 'Equatorial Guinea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GR: { 
		name: 'Greece',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GS: { 
		name: 'S. Georgia & S. Sandwich Isls.',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GT: { 
		name: 'Guatemala',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GW: { 
		name: 'Guinea Bissau',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	GY: { 
		name: 'Guyana',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	HN: { 
		name: 'Honduras',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	HR: { 
		name: 'Croatia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	HT: { 
		name: 'Haiti',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	HU: { 
		name: 'Hungary',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IC: { 
		name: 'Canary Islands',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ID: { 
		name: 'Indonesia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IE: { 
		name: 'Ireland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IL: { 
		name: 'Israel',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IN: { 
		name: 'India',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IQ: { 
		name: 'Iraq',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IR: { 
		name: 'Iran',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IS: { 
		name: 'Iceland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	IT: { 
		name: 'Italy',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	JM: { 
		name: 'Jamaica',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	JO: { 
		name: 'Jordan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	JP: { 
		name: 'Japan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KE: { 
		name: 'Kenya',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KG: { 
		name: 'Kyrgyzstan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KH: { 
		name: 'Cambodia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KP: { 
		name: 'North Korea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KR: { 
		name: 'South Korea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KW: { 
		name: 'Kuwait',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	KZ: { 
		name: 'Kazakhstan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LA: { 
		name: 'Laos',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LK: { 
		name: 'Sri Lanka',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LR: { 
		name: 'Liberia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LS: { 
		name: 'Lesotho',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LT: { 
		name: 'Lithuania',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LU: { 
		name: 'Luxembourg',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LV: { 
		name: 'Latvia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	LY: { 
		name: 'Libya',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MA: { 
		name: 'Morocco',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MD: { 
		name: 'Moldavia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ME: { 
		name: 'Montenegro',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MG: { 
		name: 'Madagascar',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MK: { 
		name: 'Macedonia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ML: { 
		name: 'Mali',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MM: { 
		name: 'Myanmar',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MN: { 
		name: 'Mongolia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MR: { 
		name: 'Mauritania',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MW: { 
		name: 'Malawi',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MX: { 
		name: 'Mexico',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MY: { 
		name: 'Malaysia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	MZ: { 
		name: 'Mozambique',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NA: { 
		name: 'Namibia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NC: { 
		name: 'New Caledonia (French)',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NE: { 
		name: 'Niger',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NG: { 
		name: 'Nigeria',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NI: { 
		name: 'Nicaragua',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NL: { 
		name: 'Netherlands',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NO: { 
		name: 'Norway',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NP: { 
		name: 'Nepal',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	NZ: { 
		name: 'New Zealand',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	OM: { 
		name: 'Oman',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PA: { 
		name: 'Panama',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PE: { 
		name: 'Peru',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PG: { 
		name: 'Papua New Guinea',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PH: { 
		name: 'Philippines',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PK: { 
		name: 'Pakistan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PL: { 
		name: 'Poland',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PR: { 
		name: 'Puerto Rico',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PS: { 
		name: 'Palestine',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PT: { 
		name: 'Portugal',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	PY: { 
		name: 'Paraguay',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	QA: { 
		name: 'Qatar',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	RO: { 
		name: 'Romania',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	RS: { 
		name: 'Serbia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	RU: { 
		name: 'Russia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	RW: { 
		name: 'Rwanda',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SA: { 
		name: 'Saudi Arabia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SB: { 
		name: 'Solomon Islands',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SD: { 
		name: 'Sudan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SE: { 
		name: 'Sweden',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SI: { 
		name: 'Slovenia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SK: { 
		name: 'Slovak Republic',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SL: { 
		name: 'Sierra Leone',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SN: { 
		name: 'Senegal',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SO: { 
		name: 'Somalia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SR: { 
		name: 'Suriname',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SS: { 
		name: 'South Sudan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SV: { 
		name: 'El Salvador',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SY: { 
		name: 'Syria',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	SZ: { 
		name: 'Eswatini',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TD: { 
		name: 'Chad',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TG: { 
		name: 'Togo',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TH: { 
		name: 'Thailand',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TJ: { 
		name: 'Tadjikistan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TL: { 
		name: 'East Timor',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TM: { 
		name: 'Turkmenistan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TN: { 
		name: 'Tunisia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TR: { 
		name: 'Turkey',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TT: { 
		name: 'Trinidad and Tobago',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TW: { 
		name: 'Taiwan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	TZ: { 
		name: 'Tanzania',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	UA: { 
		name: 'Ukraine',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	UG: { 
		name: 'Uganda',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	US: { 
		name: 'United States',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	UY: { 
		name: 'Uruguay',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	UZ: { 
		name: 'Uzbekistan',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	VE: { 
		name: 'Venezuela',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	VN: { 
		name: 'Vietnam',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	VU: { 
		name: 'Vanuatu',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	YE: { 
		name: 'Yemen',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ZA: { 
		name: 'South Africa',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ZM: { 
		name: 'Zambia',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	},

	ZW: { 
		name: 'Zimbabwe',
		description: 'default',
		color: 'default',
		hover_color: 'default',
		url: 'default',
		hide: 'no',
		inactive: 'no'
	}

},

locations:{ 
},

regions:{ 
	0: { 
		name: 'North America',
		states:["MX","CA","US","GL"]
	},

	1: { 
		name: 'South America',
		states:["EC","AR","VE","BR","CO","BO","PE","CL","GT","GY","GF","PY","SR","UY"]
	},

	2: { 
		name: 'Central America',
		states:["PR","JM","HT","BZ","CR","DO","GT","HN","NI","BS","CU","PA","SV"]
	},

	3: { 
		name: 'Europe',
		states:["IT","NL","NO","DK","IE","GB","RO","DE","FR","AL","AM","AT","BY","BE","LU","BG","CZ","EE","GE","GR","HU","IS","LV","LT","MD","PL","PT","RS","SI","HR","BA","ME","MK","SK","ES","FI","SE","CH","TR","CY","UA"]
	},

	4: { 
		name: 'Africa',
		states:["NE","AO","EG","TN","GA","DZ","LY","CG","GQ","BJ","BW","BF","BI","CM","CF","TD","CI","CD","DJ","ET","GH","GN","GW","KE","LS","LR","MG","MW","ML","MA","MR","MZ","NA","NG","ER","RW","SN","SL","SO","ZA","SD","SS","SZ","TZ","TG","UG","EH","ZM","ZW"]
	},

	5: { 
		name: 'Middle East',
		states:["QA","SA","AE","SY","OM","KW","PK","AZ","AF","IR","IQ","IL","PS","JO","LB","YE","TJ","TM","UZ","KG"]
	},

	6: { 
		name: 'South Asia',
		states:["TW","IN","NP","TH","BN","JP","VN","LK","SB","BD","BT","KH","LA","MM","NP","KP","PH","KR","CN"]
	},

	7: { 
		name: 'Oceania',
		states:["ID","AU","MY","PG","FJ","NZ"]
	},

	8: { 
		name: 'North Asia<br /> Hi There',
		states:["MN","RU","KZ"]
	}

},

continent:[

{
x: -56.499999999999716,
y: 107.69999999999987,
width: 841.1999999999995,
height: 403.50000000000017
},

{
x: 309.8999999999999,
y: 525.2999999999998,
width: 319.1999999999998,
height: 425.7
},

{
x: 311.40000000000003,
y: 433.7,
width: 150.20000000000005,
height: 124.10000000000021
},

{
x: 723.1,
y: 119.69999999999999,
width: 343.9999999999997,
height: 263.6000000000001
},

{
x: 727.9999999999999,
y: 366.49999999999983,
width: 383.3,
height: 458.6000000000002
},

{
x: 1008.6999999999998,
y: 314.4999999999999,
width: 227.20000000000041,
height: 210.60000000000002
},

{
x: 1198.7,
y: 265.50000000000017,
width: 555.2000000000002,
height: 413.4999999999997
},

{
x: 1359.2000000000007,
y: 556.9999999999999,
width: 465.7999999999993,
height: 345.90000000000026
},

{
x: 917.3999999999993,
y: 114.69999999999999,
width: 699.1,
height: 230.00000000000009
}

]
}
