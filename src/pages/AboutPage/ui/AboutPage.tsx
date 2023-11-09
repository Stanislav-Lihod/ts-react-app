import { useEffect, useState } from "react";

const AboutPage = () => {

  const [hasError, setHasError] = useState(false)

  const createError = ()=>{
    setHasError(true)
  }

  useEffect(()=>{
    if (hasError) {
      throw new Error()
    }
  }, [hasError])
  
  return(
    <div>
      <h1>About page</h1>
      <button onClick={createError}> Error</button>
    </div>
  )
};

export default AboutPage