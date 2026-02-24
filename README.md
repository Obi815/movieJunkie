🎬 Movie Junkie

Movie Junkie is a web application that lets users search for movies using the TMDB API and dynamically displays the corresponding movie posters on the page. It showcases API integration, asynchronous JavaScript, and DOM manipulation in a clean frontend interface.

🔗 Live Project: Movie Junkie￼

📸 Preview:

![alt tag](/extras/Screenshot%202026-02-13%20at%204.49.46 PM.png)

⸻

🛠 How It’s Made

Tech Used:
HTML • CSS • JavaScript • Fetch API • The Movie Database

Movie Junkie was built to explore clean API integration and dynamic UI rendering in a practical, real-world context.

The application uses a structured HTML layout with a search input and a dedicated results container. When a user submits a query, an event listener triggers a request to The Movie Database search endpoint using the Fetch API. The response is parsed as JSON, and relevant movie data is extracted from the results array.

From there, the application dynamically generates image elements for each movie poster and appends them to the DOM. Before rendering new results, existing content is cleared to ensure a predictable and clean user experience.

The core logic is separated into focused functions to keep responsibilities clear — handling user input, fetching data, and rendering results are managed independently. This structure makes the project easier to extend and maintain.

🔎 Key Implementation Details
	•	Asynchronous data fetching using async/await
	•	JSON parsing and response validation
	•	Conditional handling for missing poster data
	•	Basic error handling for failed network requests
	•	DOM manipulation through controlled rendering

Throughout the build, I focused on writing readable, maintainable JavaScript and thinking through how data flows from an external API to the UI. The structure allows for straightforward feature expansion such as pagination, additional movie metadata, or state management enhancements.

⸻

🚀 Optimizations

Coming Soon
