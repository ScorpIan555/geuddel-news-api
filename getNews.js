import { failure, success } from './libs/response-lib';
import NewsAPI from 'newsapi';
// initialize and configure Newsapi instance
const newsApiKey = process.env.newsApiKey;
const newsapi = new NewsAPI(newsApiKey);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// receive POST from client and make GET call from back-end to 3rd party api
// return result to client side's redux cycle
export async function main(event, context) {
    // parse and store object sent from client
    const queryData = JSON.parse(event.body);
    const { sources, q, category, language, country } = queryData;
    // make asynchronous api call to Newsapi.org for headlines
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
        // logging output during development
        console.log('response', response);
          
    } catch (e) {
        // logging output during development
        console.log("ERROR:::", e);
        return failure({ message: e.message});
    }
  

}