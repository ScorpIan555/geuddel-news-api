import { failure, success } from './libs/response-lib';
import NewsAPI from 'newsapi';
// initialize and configure Newsapi instance
const newsApiKey = process.env.newsApiKeyAlt;
const newsapi = new NewsAPI(newsApiKey);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

export async function main(event, context) {
  console.log('event:::', event);
  console.log('context:::', context);
  // parse and store object sent from client
  const reqQuery = event.queryStringParameters;
  // const queryPathData = event.pathParameters;

  if(reqQuery !== null) {
    const { sources, q, category, language, country } = reqQuery;

    console.log('reqQuery:::', reqQuery);
    // console.log('query path parameters', queryPathData);

      // make asynchronous api call to Newsapi.org for headlines
    try {
      
      const news = await newsapi.v2.topHeadlines({
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
        console.log("news api call result :::", news);
        return success({ status: true, data: news });
    } catch (e) {
        // logging output during development
        console.log("ERROR:::", e);
        return failure({ message: e.message});
    }
  }
}