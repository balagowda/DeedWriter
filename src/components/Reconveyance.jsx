import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Reconveyance = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Reconveyance Deed" : "ಬಿಡುಗಡೆ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A reconveyance deed is a legal document used in real estate to transfer the title of a property from a trustee back to the borrower (trustor) once a mortgage or deed of trust has been paid off. It is commonly used in situations where a borrower has taken out a loan, and as security for that loan, a trustee holds the title to the property until the borrower repays the debt in full."
            : "ಬಿಡುಗಡೆ ಪತ್ರವು ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದ್ದು, ಅಡಮಾನ ಅಥವಾ ಒಪ್ಪಂದದ ದಾಖಲೆ ಪೂರ್ಣವಾಗಿ ಪಾವತಿಸಿದ ನಂತರ ಒಬ್ಬ ವಿಶ್ವಾಸಿಯಿಂದ ಆಸ್ತಿಯ ಟೈಟಲ್‌ನ್ನು ಸಾಲಗಾರ (ವಿಶ್ವಾಸಿ)ಗೆ ಹಿಂತಿರುಗಿಸುತ್ತದೆ. ಸಾಲಗಾರರು ಸಾಲ ತೆಗೆದುಕೊಂಡ ಸಂದರ್ಭಗಳಲ್ಲಿ ಮತ್ತು ಆ ಸಾಲದ ಭದ್ರತೆಯಾಗಿ, ಸಾಲಗಾರರು ಸಾಲವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಮರುಪಾವತಿ ಮಾಡುವವರೆಗೆ ಒಬ್ಬ ವಿಶ್ವಾಸಿ ಆಸ್ತಿಯ ಹಿಡಿದಿಟ್ಟಿರುವ ಸಂದರ್ಭಗಳಲ್ಲಿ ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Reconveyance Process:</b>
                  Once the borrower has repaid the loan, the lender or trustee
                  is obligated to release the property title back to the
                  borrower. This release is accomplished through the use of a
                  reconveyance deed.
                </>
              ) : (
                <>
                  <b className="bold">ಪುನಃ ವರ್ಗಾವಣೆ ಪ್ರಕ್ರಿಯೆ:</b> ಸಾಲಗಾರರು ಸಾಲವನ್ನು
                  ಮರುಪಾವತಿ ಮಾಡಿದ ನಂತರ, ಸಾಲದಾತ ಅಥವಾ ವಿಶ್ವಾಸಿ ಆಸ್ತಿಯ ಟೈಟಲ್ ಅನ್ನು
                  ಸಾಲಗಾರರಿಗೆ ಮರುಪಡೆಯಲು ಬದ್ಧವಾಗಿರುತ್ತಾರೆ. ಈ ಬಿಡುಗಡೆಯನ್ನು ಪುನಃ
                  ವರ್ಗಾವಣೆ ಪತ್ರದ ಬಳಕೆಯ ಮೂಲಕ ಸಾಧಿಸಲಾಗುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Trustee's Role: </b>
                  In a deed of trust arrangement, the trustee holds the legal
                  title to the property on behalf of the lender until the
                  borrower fulfills the loan terms. Once the borrower repays the
                  loan, the trustee's role is to reconvey or release the title
                  back to the borrower.
                </>
              ) : (
                <>
                  <b className="bold">ವಿಶ್ವಾಸಿಯ ಪಾತ್ರ:</b>ಒಪ್ಪಂದದ ಪತ್ರದ
                  ವ್ಯವಸ್ಥೆಯಲ್ಲಿ, ಸಾಲಗಾರನು ಸಾಲದ ನಿಯಮಗಳನ್ನು ಪೂರೈಸುವವರೆಗೆ
                  ವಿಶ್ವಾಸಿಯು ಸಾಲದಾತನ ಪರವಾಗಿ ಆಸ್ತಿಯ ಕಾನೂನುಬದ್ಧ ಟೈಟಲ್ ಅನ್ನು
                  ಹೊಂದಿರುತ್ತಾನೆ. ಸಾಲಗಾರರು ಸಾಲವನ್ನು ಮರುಪಾವತಿಸಿದ ನಂತರ, ವಿಶ್ವಾಸಿಯ
                  ಪಾತ್ರವು ಟೈಟಲ್ ಅನ್ನು ಸಾಲಗಾರನಿಗೆ ಮತ್ತೆ ವರ್ಗಾಯಿಸುವುದು ಅಥವಾ
                  ಬಿಡುಗಡೆ ಮಾಡುವುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Signatures and Witnesses:</b> It may also
                  require the presence of witnesses, whose signatures attest to
                  the authenticity of the transaction.
                </>
              ) : (
                <>
                  <b className="bold">ಸಹಿಗಳು ಮತ್ತು ಸಾಕ್ಷಿಗಳು:</b> ಈ ಪತ್ರಕ್ಕೆ
                  ಸಾಕ್ಷಿಗಳ ಉಪಸ್ಥಿತಿಯೂ ಅಗತ್ಯವಾಗಿರಬಹುದು, ಅವರ ಸಹಿಗಳು ವಹಿವಾಟಿನ
                  ಸತ್ಯತೆಯನ್ನು ದೃಢೀಕರಿಸುತ್ತವೆ.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="sale_docs">
          <h4 className="sale_subheader">{language==='eng'?"Required Documents":"ಅಗತ್ಯ ದಾಖಲೆಗಳು"}</h4>
          <details>
            <summary style={{ cursor: "pointer" }}>{language==='eng'?"Documents":"ದಾಖಲೆಗಳು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC</li>
              <li>Registered Document (xerox)</li><br />
              <h4>For site and house</h4>
              <li>9 & 11A /11B (for Rural)</li>
              <li>Form No-3 (for Town)</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Reconveyance;
