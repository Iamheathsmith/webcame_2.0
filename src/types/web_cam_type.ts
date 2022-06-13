export interface WebCam {
	id: string;
	status: string;
	title: string;
	image: WebCamImage;
	location: WebCamLocation;
	player: WebCamPlayer;
}

interface WebCamImageUrls {
	icon: string;
	preview: string;
	thumbnail: string;
	toenail: string;
}

interface WebCamImageSize {
	[key: string]: { width: number; height: number };
}

export interface WebCamImage {
	current: WebCamImageUrls;
	daylight: WebCamImageUrls;
	size: WebCamImageSize;
	update: number;
}

interface WebCamPlayerData {
	available: boolean;
	embed: string;
	link?: string;
}

export interface WebCamPlayer {
	day: WebCamPlayerData;
	lifetime: WebCamPlayerData;
	live: WebCamPlayerData;
	month: WebCamPlayerData;
	year: WebCamPlayerData;
	status: string;
	title: string;
}

interface WebCamLocation {
	city: string;
	continent: string;
	continent_code: string;
	country: string;
	country_code: string;
	latitude: number;
	longitude: number;
	region: string;
	region_code: string;
	timezone: string;
	wikipedia: string;
}
