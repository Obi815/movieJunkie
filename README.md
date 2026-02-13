# Movie Junkie
Movie Junkie is a web application that lets users search for movies using the TMDB API and dynamically displays the corresponding movie posters on the page. It showcases API integration, asynchronous JavaScript, and DOM manipulation in a clean frontend interface.

**Link to project:** Comming Soon

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Fetch API, The Movie Database

Movie Junkie was built to explore clean API integration and dynamic UI rendering in a practical, real-world context.

The application uses a structured HTML layout with a search input and a dedicated results container. When a user submits a query, an event listener triggers a request to the The Movie Database search endpoint using the Fetch API. The response is parsed as JSON, and relevant movie data is extracted from the results array.

From there, the application dynamically generates image elements for each movie poster and appends them to the DOM. Before rendering new results, existing content is cleared to ensure a predictable and clean user experience.

The core logic is separated into focused functions to keep responsibilities clear — handling user input, fetching data, and rendering results are managed independently. This structure makes the project easier to extend and maintain.

Key implementation details include:
	•	Asynchronous data fetching using async/await
	•	JSON parsing and response validation
	•	Conditional handling for missing poster data
	•	Basic error handling for failed network requests
	•	DOM manipulation through element creation and controlled rendering

Throughout the build, I focused on writing readable, maintainable JavaScript and thinking through how the data flows from an external API to the UI. The structure allows for straightforward feature expansion such as pagination, additional movie metadata, or state management enhancements.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *wow I actually did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel