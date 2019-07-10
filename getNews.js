import { failure, success } from './libs/response-lib';

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('4241ab4846a24b608a14e933dc323eb1');

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

// GET
// export async function main(event, context) {
//     console.log("event:::", event);
//     // const { sources, q, category, language, country } = JSON.parse(event.params);
//     // const { country } = JSON.parse(event.params);
//     const country = event.pathParameters.country
//     // q = 'brexit';

//     console.log("event:::", event);
//     try {
//         await newsapi.v2.topHeadlines({
//             // sources: 'bbc-news,the-verge',
//             // q: 'bitcoin',
//             // category: 'business',
//             // language: 'en',
//             // country: 'us'
//             // sources: sources,
//             // q: q,
//             // category: category,
//             // language: language,
//             country: country
    
//           }).then(response => {
//             console.log('response', response);
//             /*
//               {
//                 status: "ok",
//                 articles: [...]
//               }
//             */
//            return response;
//           });
          
//     } catch (e) {
//         console.log("ERROR:::", e)
//         return failure({ message: e.message});
//     }
// }


// POST
export async function main(event, context) {
    console.log("event:::", event);
    console.log('context::::', context);
    // const { sources, q, category, language, country } = JSON.parse(event.params);
    // const { country } = JSON.parse(event.params);
    const queryData = JSON.parse(event.body);
    const { sources, q, category, language, country } = queryData
    
    console.log("event:::", event);
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
          })
        console.log('response', response);
          
    } catch (e) {
        console.log("ERROR:::", e)
        return failure({ message: e.message});
    }
  

}