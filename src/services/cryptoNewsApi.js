import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': '6b44359cabmshd964584d8692d8fp1b1038jsn9d3788424cc6',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
});

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
