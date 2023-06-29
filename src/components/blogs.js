import React from 'react'

const blogs = () => {
  return (
   <>
   
      <h1 className="head-title" >Read my <span className="head-focus">Blogs</span></h1>
      <div className="container-front">
        <section className="section ow">
          <div className="container-center">
            <h1>Dummy Blogs</h1>
            <small>June 2022</small>
            <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
            <a className="link link-primary" href="dummyblog.html">Read more</a>
            </div>
          </section>
        </div>
        <div className="container-front">
          <section className="section ow">
            <div className="container-center">
              <h1>Dummy Blogs</h1>
              <small>June 2022</small>
              <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
              <a className="link link-primary" href="dummyblog.html">Read more</a>
              </div>
            </section>
          </div>
        <footer className="footer">
            <div className="footer-title">Scoial media presence</div>
            <ul className="link non-bullet">
              <li className="inline">
                <a className="link" href="https://github.com/pratikshelar546">GitHub</a>
              </li>
              <li className="inline">
                <a className="link" href="https://twitter.com/pratikshelar03">twitter</a>
              </li>
              <li className="inline">
                <a className="link" href="https://www.linkedin.com/in/pratik-shelar-885017222/">Linkdin</a>
              </li>
            </ul>
        </footer>

   </>
  )
}

export default blogs

   