import { failure, success } from './libs/response-lib';
import NewsAPI from 'newsapi';
// initialize and configure Newsapi instance
const newsApiKey = process.env.newsApiKey;
const newsapi = new NewsAPI(newsApiKey);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

export async function main(event, context) {
  console.log('event:::', event);
  console.log('context:::', context);
  // parse and store object sent from client
  // const queryData = JSON.parse(event);
  const queryData = event.queryStringParameters;
  const queryPathData = event.pathParameters;

  if(queryData !== null) {
    const { sources, q, category, language, country } = queryData;

    console.log('queryData:::', queryData);
    console.log('query path parameters', queryPathData);


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




















// // receive POST from client and make GET call from back-end to 3rd party api
// // return result to client side's redux cycle
// export function main(event, context) {
//   console.log('event:::', event);
//   console.log('context:::', context);
//     // parse and store object sent from client
//     // const queryData = JSON.parse(event.body);
//     // const { sources, q, category, language, country } = queryData;
//     // make asynchronous api call to Newsapi.org for headlines
//     // try {
//       const q = '';
//       newsapi.v2.topHeadlines({
//         // sources: 'bbc-news,the-verge',
//         // q: 'bitcoin',
//         // category: 'business',
//         language: 'es',
//         // country: 'us'
//         // sources: sources,
//         // q: q,
//         // category: category,
//         // language: language,
//         // country: country
//       })
//       .then(res => {
//         var res = res
        
//         console.log('res:::', success({ status: true, res: res }));
//         return success({ status: true, res: res });
//       })
//       .catch(e => {
//         console.log("ERROR:::", e);
//         return failure({ message: e.message });
//       })
        
//     // } catch (e) {
//         // logging output during development
//         // console.log("ERROR:::", e);
//         // return failure({ message: e.message });
//     // }
//     // return success({ status: true });
   
// }