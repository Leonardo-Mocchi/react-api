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
      <header>
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
        <h2 className="my-5 d-flex justify-content-center align-items-center">
          A
          <div className="d-flex flex-column justify-content-center align-items-center">

            <i class="bi bi-arrow-down text_highlight"></i>
            <span className="fs-6 mx-2">short</span>
            <i class="bi bi-arrow-up text_highlight"></i>

          </div>
          list of my
          <span className="text_highlight mx-2">most successful</span>
          recipes :3
        </h2>

        <div className="card-container">
          {todos.map((post, index) => (
            <div key={post.id} className="card mb-5 text-light border-2" style={{ maxWidth: "100%", backgroundColor: "#27391C", borderColor: "#255F38" }}>
              <div className={`row g-0 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                <div className="col-3">
                  <img src={post.image} alt={post.title} className="img-fluid rounded-start" />
                </div>
                <div className="col-9">
                  <div className="card-body">
                    <h4 className={`card-title text-white ${index % 2 === 0 ? "" : "text-end me-3"}`}>{post.title}</h4>
                    <p className={`card-text fs-5 ${index % 2 === 0 ? "" : "text-end"}`}>{post.content}</p>
                    <div className={`card-tags ${index % 2 === 0 ? "" : "text-end"}`}>
                      {post.tags.map((tag, index) => (
                        <span key={index} className="badge me-1 ">
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

      </main >

      <footer className="text-light py-3" style={{ backgroundColor: "#27391C" }}>
        <div className="container text-center">
          <p className="m-0">© {new Date().getFullYear()} LeoLeo's cooking blog&tm; All rights reserved.</p>
        </div>
      </footer>
    </>

  )
}