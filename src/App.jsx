import { useState, useEffect } from "react";

const api_endpoint = "http://localhost:3000/posts"


export default function App() {
  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch(api_endpoint)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(setTodos)
      .catch((error) => console.error("Error fetching todos:", error));
  }

  // Solo al primo rendering
  useEffect(fetchTodos, []);

  return (
    <>
      <header className="bg-success">
        <div id="site_title" className="mx-5 d-flex flex-column justify-content-center">
          <h1 className="p-0 m-0">LeoLeo's cooking blog</h1>
          <p className="text-secondary-subtle fst-italic ps-5 m-0">- a window to my disatrous kitchen endeavors</p>
        </div>
        <div id="header_complexity_1"></div>
        <div id="header_complexity_2">
          <div className="d-flex justify-content-end align-items-center mt-2 me-5">
            <a href="" className="nav-link">Home</a>
            <a href="" className="mx-1 nav-link active ">My best successes</a>
            <a href="" className="nav-link">My worst disasters</a>
          </div>
        </div>

      </header >

      <main className="m-5">
        <h3 className="my-4">Here's my most successful recipes :3</h3>

        <div className="card-container">
          {todos.map((post) => (
            <div key={post.id} className="card mb-3 bg-dark text-light" style={{ maxWidth: "100%" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={post.image} alt={post.title} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-white">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <div className="card-tags">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <p className="m-0">© {new Date().getFullYear()} LeoLeo's cooking blog&tm; All rights reserved.</p>
        </div>
      </footer>
    </>

  )
}