import React, { useState } from "react";

const DisplayPdf = () => {
  const [loading, setLoading] = useState(false);
  const [pdfLinkVisible, setPdfLinkVisible] = useState(false);

  function generatePDF() {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      setPdfLinkVisible(true);
    }, 3000);
  }

  return (
    <div>
      <p>Testing pdf display</p>
      <button onClick={generatePDF}>Generate Btn</button>

      <div id="pdfLink" className={`${pdfLinkVisible ? "" : "hidden"}`}></div>
      <div id="pdfDisplayArea" className={`${pdfLinkVisible ? "" : "hidden"}`}>
        {pdfLinkVisible && (
          <div style={{ textAlign: "center" }}>
            <object
              data="./dummy.pdf"
              type="application/pdf"
              width="100%"
              height="900px"
            >
              <p>
                Oops! Your browser doesn't support PDFs.{" "}
                <a href="./dummy.pdf" target="_blank" rel="noopener noreferrer">
                  Download instead
                </a>
              </p>
            </object>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayPdf;
