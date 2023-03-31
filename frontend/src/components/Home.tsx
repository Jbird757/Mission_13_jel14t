import React from 'react';
import headshot from './JoelHiltonHeadshot.jpg';

export function Home() {
  return (
    <>
      <div>
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Home</h1>
              <p className="lead fw-normal text-white-50 mb-0">
                Movies Catered for you
              </p>
            </div>
          </div>
        </header>
        <section className="py-4">
          <div className="container px-4 px-lg-4 mt-4">
            <div className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-4">
                <img src={headshot} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
