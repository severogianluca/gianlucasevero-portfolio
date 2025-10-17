'use client';
import React from 'react';

function DownloadCV(){
    return (
        <>
            <section id="cv">
                <div className="cv-split">
                    <div className="cv-split-left">
                        <div className="cv-split-left-content">
                            <div className="document-icon">📄</div>
                            <h3>Curriculum Vitae</h3>
                        </div>
                    </div>
                    <div className="cv-split-right">
                        <div className="cv-split-content">
                            <h2>Scarica il mio CV</h2>
                            <p>Documento professionale completo con tutta la mia esperienza lavorativa, competenze tecniche e formazione accademica.</p>
                            <ul className="cv-features">
                                <li>Esperienza professionale</li>
                                <li>Competenze tecniche e soft skills</li>
                                <li>Formazione e certificazioni</li>
                                <li>Portfolio progetti principali</li>
                            </ul>
                            <a href="/Gianluca-Severo-CV.pdf" download="Gianluca_Severo_CV.pdf" className="btn-download-split">
                                Scarica CV →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                #cv {
                    width: 100%;
                }

                .cv-split {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    min-height: 500px;
                }

                .cv-split-left {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 60px;
                }

                .cv-split-left-content {
                    color: white;
                    text-align: center;
                }

                .cv-split-left-content .document-icon {
                    font-size: 120px;
                    margin-bottom: 20px;
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .cv-split-left-content h3 {
                    font-size: 1.5rem;
                    font-weight: 300;
                    opacity: 0.95;
                }

                .cv-split-right {
                    background: white;
                    display: flex;
                    align-items: center;
                    padding: 60px;
                }

                .cv-split-content {
                    max-width: 500px;
                }

                .cv-split-content h2 {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 20px;
                    font-weight: 600;
                }

                .cv-split-content > p {
                    color: #666;
                    margin-bottom: 15px;
                    line-height: 1.7;
                    font-size: 1.05rem;
                }

                .cv-features {
                    list-style: none;
                    margin: 30px 0;
                }

                .cv-features li {
                    padding: 12px 0;
                    color: #555;
                    font-size: 1rem;
                    transition: transform 0.2s ease;
                }

                .cv-features li:hover {
                    transform: translateX(5px);
                }

                .cv-features li::before {
                    content: "✓ ";
                    color: #667eea;
                    font-weight: bold;
                    margin-right: 10px;
                    font-size: 1.2rem;
                }

                .btn-download-split {
                    display: inline-block;
                    padding: 18px 45px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    text-decoration: none;
                    border-radius: 50px;
                    font-weight: bold;
                    font-size: 1.1rem;
                    transition: all 0.3s ease;
                    margin-top: 20px;
                }

                .btn-download-split:hover {
                    transform: translateX(8px);
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .cv-split {
                        grid-template-columns: 1fr;
                    }

                    .cv-split-left {
                        padding: 40px;
                        min-height: 300px;
                    }

                    .cv-split-left-content .document-icon {
                        font-size: 80px;
                    }

                    .cv-split-right {
                        padding: 40px 30px;
                    }

                    .cv-split-content h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </>
    );
};

export default DownloadCV;