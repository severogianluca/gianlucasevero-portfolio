
'use client';

import React from 'react';

function DownloadCV(){
    return (
        <>
            <section id="cv">
                <div className="cv-card-section">
                    <div className="cv-card">
                        <div className="cv-icon">📋</div>
                        <h2>Curriculum Vitae</h2>
                        <p>Scopri la mia esperienza professionale, competenze e formazione</p>
                        
                        <div className="cv-details">
                            <span>📄 Formato: PDF</span>
                            <span>📊 Dimensione: 614KB</span>
                            <span>🔄 Ultimo aggiornamento: Ottobre 2025</span>
                        </div>
                        
                        <a href="/Gianluca-Severo-CV.pdf" download="Gianluca_Severo_CV.pdf" className="btn-download-card">
                            ⬇️ Scarica CV
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                #cv {
                    width: 100%;
                    background: transparent;
                }

                .cv-card-section {
                    padding: 80px 40px;
                    background: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .cv-card {
                    background: rgba(30, 27, 75, 0.6);
                    backdrop-filter: blur(10px);
                    padding: 50px;
                    border-radius: 20px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                    max-width: 550px;
                    text-align: center;
                    border: 1px solid rgba(102, 126, 234, 0.2);
                }

                .cv-icon {
                    font-size: 80px;
                    margin-bottom: 25px;
                    animation: float 3s ease-in-out infinite;
                    filter: drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
                }

                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0); 
                    }
                    50% { 
                        transform: translateY(-10px); 
                    }
                }

                .cv-card h2 {
                    font-size: 2.2rem;
                    color: #ededed;
                    margin-bottom: 15px;
                }

                .cv-card > p {
                    color: #d1d5db;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }

                .cv-details {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin: 30px 0;
                    padding: 25px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 12px;
                    font-size: 0.95rem;
                    color: #e5e7eb;
                    border: 1px solid rgba(102, 126, 234, 0.2);
                }

                .btn-download-card {
                    display: inline-block;
                    padding: 18px 50px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: bold;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                }

                .btn-download-card:hover {
                    transform: scale(1.08);
                    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
                }

                @media (max-width: 768px) {
                    .cv-card-section {
                        padding: 60px 20px;
                    }

                    .cv-card {
                        padding: 40px 30px;
                    }

                    .cv-icon {
                        font-size: 60px;
                    }

                    .cv-card h2 {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </>
    );
};

export default DownloadCV;