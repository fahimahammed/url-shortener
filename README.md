# URL Shortener Microservice

Build a full stack JavaScript application that shortens URLs and redirects users based on the shortened URLs, similar to the FreeCodeCamp URL Shortener Microservice project.

## Features

- **URL Shortening:**
  - Shorten long URLs into unique, shortened URLs.
  
- **URL Redirection:**
  - Redirect users to the original URL when they visit the shortened URL.
  
- **Validation:**
  - Validate submitted URLs using the `dns.lookup(host, cb)` function from the DNS core module.
  
- **UI/UX:**
  - Design a user-friendly interface for inputting URLs and displaying shortened URLs.

## Tech Stack

- **Frontend:** HTML, CSS (Bootstrap recommended), JavaScript (React or plain JS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (for storing shortened URLs and their mappings)

## Data Structures

### URL Entry

```json
{
  "original_url": "https://www.example.com",
  "short_url": "https://url-shortener-microservice.freecodecamp.rocks/shorturl"
}
```

## Usage

- Input a long URL in the provided form to get a shortened URL.
- Visit the shortened URL to be redirected to the original long URL.

## Acknowledgements

- Built with guidance from the FreeCodeCamp URL Shortener Microservice project.
- Inspiration and learning resources from the FreeCodeCamp community.

---
This is the project code for the URL Shortener Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.
