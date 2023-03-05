import { createContext, useContext, useEffect, useState } from "react";


const RepositoriesContext = createContext();

export const RepositoriesProvider = ({ children }) => {
  const [repo, setRepo] = useState(
    [
      {
        name: "Mehmetalitortumlu",
        uptade: "Uptade yesterday",
        public: "public",
        tecnology: "html"
      },
      {
        name: "Bootstrap-5-Spotify-clone",
        uptade: "Uptade yesterday",
        public: "public",
        tecnology: "Html"
      }
    ]
  )

  useEffect(() => {
    let repos = localStorage.getItem('repos')
    setRepo((pre) => JSON.parse(repos) || pre)
  }, [])

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repo))
  }, [repo])


  const values = {
    repo,
    setRepo
  }
  return <RepositoriesContext.Provider value={values}>
    {children}
  </RepositoriesContext.Provider>
}


export const useRepo = () => useContext(RepositoriesContext)