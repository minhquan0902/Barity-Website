/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10">
                {AboutUs1Date.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {AboutUs1Date.title}
              </h3>
              <p>{AboutUs1Date.content}</p>
              <Link href="/about">
                <a className="butn bord curve mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={AboutUs1Date.image} alt="" />
            <div className="stauts" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px' }}>
              <a
                href="https://www.binance.com/copy-trading/lead-details/4737679173868543744"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)',
                  borderRadius: '12px',
                  padding: '20px 25px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                <h5 style={{ color: '#fff', marginBottom: '8px', fontSize: '1.2rem' }}>
                  Low-Mid Frequency Trading
                </h5>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0' }}>
                  Professional copy trading portfolio
                </p>
              </a>

              <a
                href="https://www.binance.com/en/copy-trading/lead-details/4737680483063456256?timeRange=180D&isPrivate=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #1e1e2e 0%, #2a2a3e 100%)',
                  borderRadius: '12px',
                  padding: '20px 25px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                }}
              >
                <h5 style={{ color: '#fff', marginBottom: '8px', fontSize: '1.2rem' }}>
                  High Frequency Trading
                </h5>
                <p style={{ color: '#999', fontSize: '0.9rem', marginBottom: '0' }}>
                  180-day performance tracking
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
