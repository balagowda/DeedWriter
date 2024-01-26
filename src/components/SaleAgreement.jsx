import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const SaleAgreement = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Sale Agreement" : "ಕ್ರಯದ ಕರಾರು"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A sale agreement, is a legally binding document that outlines the terms and conditions agreed upon by a buyer and a seller for the sale of land. The sale agreement serves as a written record of the agreement reached between the parties."
            : "ಒಂದು ಮಾರಾಟ ಒಪ್ಪಂದವು, ಭೂಮಿಯ ಮಾರಾಟಕ್ಕಾಗಿ ಖರೀದಿದಾರ ಮತ್ತು ಮಾರಾಟಗಾರರು ಒಪ್ಪಿಕೊಂಡ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ರೂಪರೇಖೆ ಒಳಗೊಂಡಿರುವ ಕಾನೂನುಬದ್ಧ, ಬಂಧಕ ದಾಖಲೆಯಾಗಿದೆ. ಮಾರಾಟ ಒಪ್ಪಂದವು ಪಕ್ಷಗಳ ನಡುವಿನ ಒಪ್ಪಂದದ ಬರವಣಿ ದಾಖಲೆಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Parties Involved:</b>
                  The agreement identifies the buyer and the seller by their
                  full names, addresses, and other relevant contact information.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳು ಒಳಗೊಂಡಿವೆ:</b> ಈ ಒಪ್ಪಂದವು ಖರೀದಿದಾರ
                  ಮತ್ತು ಮಾರಾಟಗಾರರನ್ನು ಅವರ ಪೂರ್ಣ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ
                  ಸಂಬಂಧಿತ ಸಂಪರ್ಕ ಮಾಹಿತಿಯೊಂದಿಗೆ ಗುರುತಿಸುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Description of the Property:</b>
                  The agreement includes a detailed description of the property
                  being sold, including its location, boundaries, and any other
                  pertinent details.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿ ವಿವರಣೆ:</b>ಒಪ್ಪಂದವು ಮಾರಾಟವಾಗುತ್ತಿರುವ
                  ಆಸ್ತಿಯ ವಿವರವಾದ ವಿವರಣೆಯನ್ನು ಒಳಗೊಂಡಿದೆ, ಅದರ ಸ್ಥಳ, ಗಡಿಗಳು ಮತ್ತು
                  ಇತರ ಯಾವುದೇ ಸಂಬಂಧಿತ ವಿವರಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Payment Terms: </b>
                  The agreement outlines the payment terms, including the
                  initial deposit, installment payments, and the final payment.
                  It may also specify the method of payment, such as cash,
                  check, or bank transfer.
                </>
              ) : (
                <>
                  <b className="bold">ಪಾವತಿ ಷರತ್ತುಗಳು: </b>ಒಪ್ಪಂದವು ಪಾವತಿ
                  ಷರತ್ತುಗಳನ್ನು ರೂಪರೇಖೆ ಒಳಗೊಂಡಿದೆ, ಅರಂಭಿಕ ಠೇವಣಿ, ಕಂತು ಪಾವತಿಗಳು
                  ಮತ್ತು ಅಂತಿಮ ಪಾವತಿ ಸೇರಿದಂತೆ. ಇದು ಪಾವತಿ ವಿಧಾನವನ್ನು, ನಗದು, ಚೆಕ್
                  ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯನ್ನು ಸಹ ನಿರ್ಧರಿಸಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Closing or Completion Date: </b>
                  For real estate transactions, the agreement often includes a
                  closing or completion date when the final transfer of
                  ownership will occur.
                </>
              ) : (
                <>
                  <b className="bold">ಮುಕ್ತಾಯ ಅಥವಾ ಪೂರ್ಣಗೊಳಿಸುವ ದಿನಾಂಕ:</b> ರಿಯಲ್
                  ಎಸ್ಟೇಟ್ ವಹಿವಾಟುಗಳಿಗಾಗಿ, ಒಪ್ಪಂದವು ಹೆಚ್ಚಾಗಿ ಮಾಲೀಕತ್ವದ ಅಂತಿಮ
                  ವರ್ಗಾವಣೆ ನಡೆಯುವ ಮುಕ್ತಾಯ ಅಥವಾ ಪೂರ್ಣಗೊಳಿಸುವ ದಿನಾಂಕವನ್ನು
                  ಒಳಗೊಂಡಿರುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Signatures and Witnesses:</b> The sale
                  deed is signed by both the buyer and the seller. It may also
                  require the presence of witnesses, whose signatures attest to
                  the authenticity of the transaction.
                </>
              ) : (
                <>
                  <b className="bold">ಸಹಿಗಳು ಮತ್ತು ಸಾಕ್ಷಿಗಳು:</b> ಮಾರಾಟ ಒಪ್ಪಂದಕ್ಕೆ
                  ಖರೀದಿದಾರ ಮತ್ತು ಮಾರಾಟಗಾರ ಇಬ್ಬರೂ ಸಹಿ ಹಾಕುತ್ತಾರೆ. ಇದಕ್ಕೆ ಸಾಕ್ಷಿಗಳ
                  ಉಪಸ್ಥಿತಿಯೂ ಅಗತ್ಯವಾಗಿರಬಹುದು, ಅವರ ಸಹಿಗಳು ವಹಿವಾಟಿನ ಸತ್ಯತೆಯನ್ನು
                  ದೃಢೀಕರಿಸುತ್ತವೆ.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="sale_docs">
          <h4 className="sale_subheader">
            {language === "eng" ? "Required Documents" : "ಅಗತ್ಯ ದಾಖಲೆಗಳು"}
          </h4>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Buyer" : "ಖರೀದಿದಾರ"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Seller" : "ಮಾರಾಟಗಾರ"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC (in case of Full Estant)</li>
              <li>MR</li>
              <li>RR 5 & 6</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li>
              <li>Family Tree</li>
              <li>PAN Card</li><br />
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

export default SaleAgreement;
