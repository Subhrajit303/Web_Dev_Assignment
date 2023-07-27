import React, { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file (you can replace 'data.json' with your actual file path or API endpoint)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setSearchResults(jsonData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle the search button click
  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ paddingTop: "2rem" }}>
        <div class="container">
          <a class="navbar-brand" href="#" style={{ marginLeft: "3rem" }}>User</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ padding: "2rem" }}>Campaign</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ padding: "2rem" }}>Tables</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" style={{ padding: "2rem" }}>List</a>
              </li>
            </ul>
            <form class="d-flex " role="search" style={{ marginRight: "10rem" }}>
              <input class="form-control me-2" type="search" placeholder="Enter name to search" aria-label="Search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
              <button class="btn btn-outline-success search-bar" onClick={handleSearch}>Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container card">
        <table className="table textcentre">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
