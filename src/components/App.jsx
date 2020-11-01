import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
const api_url = 'https://disease.sh/v3/covid-19/all';

const  App = () => {
  const [cases, setCases] = useState({});
  let [isLoaded, setIsLoaded] = useState(false);
  let [err, setErr] = useState(null);

  useEffect(() => {
    const getCases = () => {
        fetch(api_url)
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Server responds with error!")
            }
            return res.json()
        })
        .then(cases => {
            setCases(cases)
            setIsLoaded(true)
        },
        err => {
            setErr(err)
            setIsLoaded(true)
        })
    };
    getCases()
}, [])

  return (
              <div>
                <Header />
                <Content data={cases} isLoaded={isLoaded} isError={err}/>
              </div>
                );
}

export default App;
