const apiPath = 'https://api.windy.com/api/webcams/v2/list/webcam=';
const apiKey = 'gXPEoSHLMiQPkBU5ULMYKqVIKzbPQwlp';

export const fetchSingleWebcam = async (webcamId: string) => {
	const url = `${apiPath}${webcamId}?show=webcams:location,image,player`;
	return await fetch(url, {
		headers: {
			'x-windy-key': apiKey,
		},
	})
		.then((response) => response.json())
		.then((data) => data.result.webcams[0]);
};

export const fetchMultiWebcam = (webcamIds: Array<string>) => {
	const listOfCalls = webcamIds.map((camId) => fetchSingleWebcam(camId));
	return Promise.all(listOfCalls).then((data) => data);
};
