import { failure, success } from './libs/response-lib';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.newsApiKey);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// receive POST from client and make GET call from back-end to 3rd party api
// return result to client side's redux cycle
export async function main(event, context) {
    const queryData = JSON.parse(event.body);
    const { sources, q, category, language, country } = queryData;
    
    try {
       const response = await newsapi.v2.topHeadlines({
            // sources: 'bbc-news,the-verge',
            // q: 'bitcoin',
            // category: 'business',
            // language: 'en',
            // country: 'us'
            sources: sources,
            q: q,
            category: category,
            language: language,
            country: country
          });
        console.log('response', response);
          
    } catch (e) {
        console.log("ERROR:::", e);
        return failure({ message: e.message});
    }
  

}