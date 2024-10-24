import React,{useState, useEffect} from "react";

// Getting the API key from .env file
const API_KEY = process.env.REACT_APP_NY_TIMES_API_KEY;

// url to Get Best Sellers list names.
const category_url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`;

const App = ()=>{
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [books, setBooks] = useState([]);

  // retrieving the best seller categories from teh API
  useEffect(() => {
    const fetchCategories = async () => { 
      const cat_response = await fetch(category_url);  // retrieving data from API
      if (cat_response.ok) {
        const cat_data = await cat_response.json(); //json parsing
        setCategories(cat_data.results);  // setting the categories to state 
      } else {
        console.log("Error Fetching the categories");
      }
    };

    fetchCategories();  // Fetch categories when the component mounts
  }, []);  // to run only once
  
  //url to get the books under a selected category
  const book_url = `https://api.nytimes.com/svc/books/v3/lists/current/${selectedCategory}.json?api-key=${API_KEY}`

  // retrieving the books under a selected category from the API
  useEffect(()=>{
      const fetchBooks = async()=>{
        if (!selectedCategory){ // checking if the user has clicked any categories
          return;
        }
        const book_response = await fetch(book_url); // retrieving book data from the API
        if (book_response.ok){
          const book_data = await book_response.json(); //jscon parsing
          //console.log(book_data)
          setBooks(book_data.results.books) // setting the books to state -- results.books has book data
        }
        else{
          console.log("error fetching books")
        }
      };
      fetchBooks();
    },[selectedCategory])
    
    
    return(
      <div>
        <h1 style={{ textAlign: 'center',color: "navy", fontWeight:'bold',fontSize:'30px' }}>📚📚 Select a Book Category Below 📚📚</h1>
        
        {/* styling the container for categories */}
        <div style={{display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'40px', marginBottom:'40px', justifyContent:'center'}}>
        
        {/* displaying the category names */}
        {categories.map((category)=>(
          <span
          key= {category.list_name}
          
          //styling each category item 
          style={{padding: '10px',backgroundColor: '#f0f0f0', border: '2px solid black',borderRadius: '5px',cursor: 'pointer' }}
          onClick={()=> setSelectedCategory(category.list_name_encoded)}> {/*setting the selectedCategory when user clicks a category*/}
            {category.list_name}
          </span>
        ))} 
        </div>
        <BookGrid books={books}/>
      </div>
    )
  
  };

 
  const BookGrid = ({ books }) => {
    
    if (books.length === 0) { // when no category is selected 
      return <p style={{ textAlign: 'center',color: "navy", fontWeight:'bold',fontSize:'30px'}}> 📚📚 Select one of the categories above! 📚📚 </p>; 
    } else {
      return (
        <div>
          {/* text styling */}
          <h2 style={{ textAlign: 'center',color: "navy", fontWeight:'bold',fontSize:'30px' }}>📚Bestsellers under the Category📚</h2>
          
          {/* grid styling */}
          <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'center', gap: '30px', marginBottom:'40px' }}>
            {books.map((book) => (
              <div 
                key={book.primary_isbn13}  // unique identifier for the book
                style={{width: '300px', border: '2px solid', padding: '10px'}}>
                <img src={book.book_image} alt={book.title} width={300} height={400} /> {/* retrieving the image of teh book*/}
                
                {/* other book details */}
                <h3>{book.title}</h3>
                <p><i>By</i> {book.author}</p>
                <p><strong><i>Description: </i></strong>{book.description}</p>
                
                <a href={book.amazon_product_url} target="_blank" rel="noopener noreferrer"> {/* opening the link in a new windwo*/}
                  Buy it on Amazon
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  
export default App;
