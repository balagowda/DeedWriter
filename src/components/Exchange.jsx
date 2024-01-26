import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Exchange = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Exchange of Deed" : "ಅದಲು-ಬದಲು"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "An exchange deed refers to a legal document that facilitates the transfer of property between two parties through an exchange rather than a traditional purchase or sale. In this transaction, each party typically gives up ownership of one property and acquires ownership of another property in return. This process is sometimes used when two parties mutually agree to swap properties, and it can involve residential, commercial, or other types of real estate."
            : "ಅದಲು-ಬದಲು ಪತ್ರವು, ಒಂದು ಸಾಂಪ್ರದಾಯಿಕ ಖರೀದಿ ಅಥವಾ ಮಾರಾಟದ ಬದಲಿಗೆ, ಎರಡು ಪಕ್ಷಗಳ ನಡುವಿನ ಆಸ್ತಿ ವರ್ಗಾವಣೆಯನ್ನು ಸುಗಮಗೊಳಿಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಈ ವಹಿವಾಟಿನಲ್ಲಿ, ಪ್ರತಿಯೊಬ್ಬ ಪಕ್ಷದವರು ಸಾಮಾನ್ಯವಾಗಿ ಒಂದು ಆಸ್ತಿಯ ಮಾಲೀಕತ್ವವನ್ನು ತ್ಯಜಿಸುತ್ತಾರೆ ಮತ್ತು ಬದಲಿಗೆ ಇನ್ನೊಂದು ಆಸ್ತಿಯ ಮಾಲೀಕತ್ವವನ್ನು ಪಡೆದುಕೊಳ್ಳುತ್ತಾರೆ. ಎರಡು ಪಕ್ಷಗಳು ಪರಸ್ಪರ ಒಪ್ಪಂದದ ಮೂಲಕ ಆಸ್ತಿಗಳನ್ನು ಬದಲಾಯಿಸಲು ಅವಶ್ಯವೆಂದು ಒಪ್ಪಿಕೊಂಡಾಗ ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಕೆಲವೊಮ್ಮೆ ಬಳಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಇದು ವಸತಿ, ವಾಣಿಜ್ಯ ಅಥವಾ ಇತರ ರೀತಿಯ ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನ್ನು ಒಳಗೊಂಡಿರಬಹುದು."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Property Description:</b>
                  The deed of exchange includes detailed descriptions of both
                  properties involved in the exchange. This ensures clarity and
                  helps identify the specific assets being transferred.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿಯ ವಿವರಣೆ:</b>ಬದಲಾಯಿ ಪತ್ರವು ಬದಲಾವಣೆಯಲ್ಲಿ
                  ಒಳಗೊಂಡಿರುವ ಎರಡೂ ಆಸ್ತಿಗಳ ವಿವರವಾದ ವಿವರಣೆಯನ್ನು ಒಳಗೊಂಡಿದೆ. ಇದು
                  ಸ್ಪಷ್ಟತೆಯನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ ಮತ್ತು ವರ್ಗಾಯಿಸಲಾಗುತ್ತಿರುವ
                  ನಿರ್ದಿಷ್ಟ ಆಸ್ತಿಗಳನ್ನು ಗುರುತಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> The names,
                  addresses, and other identifying information of both parties
                  (the ones exchanging properties) are included in the document.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ಎರಡೂ ಪಕ್ಷಗಳ (ಆಸ್ತಿಗಳನ್ನು
                  ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುವವರು) ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ ಗುರುತಿಸುವ
                  ಮಾಹಿತಿಯನ್ನು ದಾಖಲೆಯಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Transfer of Ownership:</b>
                  The exchange deed serves as a legal instrument to effect the
                  transfer of ownership from one party to another for the
                  properties involved in the exchange.
                </>
              ) : (
                <>
                  <b className="bold">ಮಾಲೀಕತ್ವದ ವರ್ಗಾವಣೆ:</b>ಬದಲಾಯಿ ಪತ್ರವು
                  ಬದಲಾವಣೆಯಲ್ಲಿ ಒಳಗೊಂಡಿರುವ ಆಸ್ತಿಗಳಿಗೆ ಒಂದು ಪಕ್ಷದಿಂದ ಇನ್ನೊಂದು
                  ಪಕ್ಷಕ್ಕೆ ಮಾಲೀಕತ್ವವನ್ನು ವರ್ಗಾಯಿಸಲು ಕಾನೂನು ಸಾಧನವಾಗಿ
                  ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
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
          <h4 className="sale_subheader">
            {language === "eng" ? "Required Documents" : "ಅಗತ್ಯ ದಾಖಲೆಗಳು"}
          </h4>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Documents" : "ದಾಖಲೆಗಳು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC (in case of Full Estant)</li>
              <li>11E Plan (in case of Part Estant only)</li>
              <li>MR</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li><br />
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

export default Exchange;
