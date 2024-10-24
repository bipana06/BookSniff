📚BookSniff

This application retrieves best seller categories from teh New York TImes Books API and when the user clicks any of the categories, it displays books with its few details under the selected category. 

## Problem

Finding a book to read can be overwhelming given the number of options available. New York Times publishes a list of best sellers in various categories, however, there is not an easy and interactive way to explore the books. I personally need quiet a bit of time to decide on a book and when a book is found, I want to look at some of the details including the discription of the book. Additionally,we have to visit a different browser to get to the purchase link and this process is fragmented. Hence, **BookSniff** is here as the solution. 

## Overview

**BookSniff** does the following:

- Fetches `bestseller categories` from the New York Times API, allowing users to easily browse through different book categories. 

- It displays the `bestselling books` for each selected category in an organized grid with the author of the book and hte discription. 

- It also offers users a one-click option to direct to `purchasing the on amazon` from the app. 

## Installation and Setup

#### Prerequisites:
- Node.js and npm
- An API key from the New York Times Book API. 

1. Clone the repository and navigate to the directory.

```
https://github.com/bipana06/BookSniff.git
cd book-search-app
```

2. Install Dependencies:

```
npm install
```

3. Set Up your API Key
- create a .env file in the root directly of the project. 
- Add the following to the .env file
```
REACT_APP_NY_TIMES_API_KEY=your_api_key_here
```

4. Start the application. 

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Usage

Once the app is running, 
1. A list of book categories will be displayed on the homepage. 
2. Click on any category to see the best-seeling books in that category. 
3. Each book will display:
- The book cover image
- The title
- The author
- A short description
- A link to purchase the book on Amazon
4. You can click on any other category to see the list under that category. 

## Credits

The project was developed with the assistance of ChatGPT. Most of the inline styling used in the project was done by ChatGPT. Learned about and integrated the `useEffect()` function solely with the help of AI. Not any code portion was entirely genereted by any AIs. Finally, professor's video resource was referenced frequently. 
