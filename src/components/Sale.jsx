import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Sale = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Sale Deed" : "ಕ್ರಯ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A sale deed is a legal document that transfers the ownership of a The sale deed includes important details such as the description of the property, the sale consideration (the amount paid for the property), details of the buyer and seller, and any other terms and conditions agreed upon by both parties."
            : "ಕ್ರಯ ಪತ್ರವು ಆಸ್ತಿಯ ಮಾಲೀಕತ್ವವನ್ನು ವರ್ಗಾಯಿಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಮಾರಾಟ ಪತ್ರವು ಆಸ್ತಿಯ ವಿವರಣೆ, ಮಾರಾಟ ಪರಿಗಣನೆ (ಆಸ್ತಿಗೆ ಪಾವತಿಸಿದ ಮೊತ್ತ), ಖರೀದಿದಾರ ಮತ್ತು ಮಾರಾಟಗಾರರ ವಿವರಗಳು ಮತ್ತು ಎರಡೂ ಪಕ್ಷಗಳು ಒಪ್ಪಿಕೊಂಡಿರುವ ಇತರ ಷರತ್ತುಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳಂತಹ ಪ್ರಮುಖ ವಿವರಗಳನ್ನು ಒಳಗೊಂಡಿದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Property Description:</b> The sale deed
                  contains a detailed description of the property being sold,
                  including its location, boundaries, and any other relevant
                  details.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿಯ ವಿವರಣೆ:</b> ಮಾರಾಟ ಪತ್ರವು ಮಾರಾಟವಾಗುವ
                  ಆಸ್ತಿಯ ವಿವರವಾದ ವಿವರಣೆಯನ್ನು ಒಳಗೊಂಡಿದೆ, ಅದರ ಸ್ಥಳ, ಗಡಿಗಳು ಮತ್ತು
                  ಯಾವುದೇ ಇತರ ಸಂಬಂಧಿತ ವಿವರಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> The names,
                  addresses, and other identifying information of both the buyer
                  and the seller are included in the sale deed.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ಮಾರಾಟ ಪತ್ರದಲ್ಲಿ ಖರೀದಿದಾರ
                  ಮತ್ತು ಮಾರಾಟಗಾರ ಇಬ್ಬರ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ ಗುರುತಿಸುವ
                  ಮಾಹಿತಿಯನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Sale Consideration:</b> This refers to the
                  amount of money or other considerations agreed upon by the
                  parties as the sale price for the property.
                </>
              ) : (
                <>
                  <b className="bold">ಮಾರಾಟ ಪರಿಗಣನೆ:</b> ಇದು ಆಸ್ತಿಗೆ ಮಾರಾಟ ಬೆಲೆಯಾಗಿ
                  ಪಕ್ಷಗಳು ಒಪ್ಪಿಕೊಂಡ ಹಣದ ಮೊತ್ತ ಅಥವಾ ಇತರ ಪರಿಗಣನೆಗಳನ್ನು
                  ಸೂಚಿಸುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Mode of Payment:</b> The mode and schedule
                  of payment, including any advance payments made, are specified
                  in the sale deed.
                </>
              ) : (
                <>
                  <b className="bold">ಪಾವತಿ ವಿಧಾನ:</b> ಯಾವುದೇ ಮುಂಗಡ ಪಾವತಿಗಳನ್ನು
                  ಒಳಗೊಂಡಂತೆ ಪಾವತಿಯ ವಿಧಾನ ಮತ್ತು ವೇಳಾಪಟ್ಟಿಯನ್ನು ಮಾರಾಟ ಪತ್ರದಲ್ಲಿ
                  ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ.
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
                  <b className="bold">ಸಹಿಗಳು ಮತ್ತು ಸಾಕ್ಷಿಗಳು:</b>ಮಾರಾಟ ಪತ್ರಕ್ಕೆ
                  ಖರೀದಿದಾರ ಮತ್ತು ಮಾರಾಟಗಾರ ಇಬ್ಬರೂ ಸಹಿ ಹಾಕುತ್ತಾರೆ. ವಹಿವಾಟಿನ
                  ಸತ್ಯಾಸತ್ಯತೆಯನ್ನು ದೃಢೀಕರಿಸಲು ಸಾಕ್ಷಿಗಳ ಉಪಸ್ಥಿತಿಯೂ ಅಗತ್ಯವಾಗಬಹುದು.
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
              <li>11E Plan (in case of Part Estant only)</li>
              <li>MR</li>
              <li>RR 5 & 6</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li>
              <li>Family Tree</li>
              <li>PAN Card</li>
              <li>Land Settlement Copy</li><br />
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

export default Sale;
