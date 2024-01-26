import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Gift = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Gift Deed" : "ದಾನ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A gift deed is a legal document used to transfer ownership of a property, asset, or certain rights from one person (the donor or giver) to another (the donee or recipient) without the exchange of money. In essence, it represents a voluntary transfer of property as a gift."
            : "ದಾನ ಪತ್ರವು ಆಸ್ತಿ, ಸ್ವತ್ತು ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಹಕ್ಕುಗಳ ಮಾಲೀಕತ್ವವನ್ನು ಒಬ್ಬ ವ್ಯಕ್ತಿಯಿಂದ (ದಾನಿ ಅಥವಾ ಕೊಡುಗೆದಾರ) ಇನ್ನೊಬ್ಬರಿಗೆ (ಸ್ವೀಕೃತದಾರ) ಹಣದ ವಿನಿಮಯವಿಲ್ಲದೆ ವರ್ಗಾಯಿಸಲು ಬಳಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಮೂಲತಃ, ಇದು ಉಡುಗೊರೆಯಾಗಿ ಆಸ್ತಿಯ ಸ್ವಯಂಪ್ರೇರಿತ ವರ್ಗಾವಣೆಯನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Voluntary Transfer:</b>
                  Unlike a sale deed where the transfer involves a consideration
                  (money or something else of value), a gift deed is a voluntary
                  and gratuitous transfer. The donor willingly gives up their
                  ownership rights without expecting anything in return.
                </>
              ) : (
                <>
                  <b className="bold">ಸ್ವಯಂಪ್ರೇರಿತ ವರ್ಗಾವಣೆ:</b> ವರ್ಗಾವಣೆಯು
                  ಪರಿಗಣನೆಯನ್ನು ಒಳಗೊಂಡಿರುವ ಮಾರಾಟ ಪತ್ರದಂತಲ್ಲದೆ, ದಾನ ಪತ್ರವು
                  ಸ್ವಯಂಪ್ರೇರಿತ ಮತ್ತು ಉచిತವಾಗಿ ನೀಡುವ ವರ್ಗಾವಣೆಯಾಗಿದೆ. ದಾನಿ ಬದಲಿಗೆ
                  ಏನನ್ನೂ ನಿರೀಕ್ಷಿಸದೆ ತಮ್ಮ ಮಾಲೀಕತ್ವದ ಹಕ್ಕುಗಳನ್ನು ಸಂತೋಷದಿಂದ
                  ತ್ಯಜಿಸುತ್ತಾರೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> It contains
                  the names, addresses, and other identifying information of
                  both the donor and the donee.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ಇದು ದಾನಿ ಮತ್ತು
                  ದಾನವಸ್ತು ಇಬ್ಬರ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ ಗುರುತಿಸುವ
                  ಮಾಹಿತಿಯನ್ನು ಒಳಗೊಂಡಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Tax Implications:</b>
                  Depending on the jurisdiction, there may be tax implications
                  for both the donor and the donee. In some cases, the recipient
                  may need to pay taxes on the value of the gift.
                </>
              ) : (
                <>
                  <b className="bold">ತೆರಿಗೆ ಪರಿಣಾಮಗಳು:</b>ಅಧಿಕಾರ ವ್ಯಾಪ್ತಿಯನ್ನು
                  ಅವಲಂಬಿಸಿ, ದಾನಿ ಮತ್ತು ದಾನವಸ್ತು ಇಬ್ಬರಿಗೂ ತೆರಿಗೆ ಪರಿಣಾಮಗಳು
                  ಇರಬಹುದು. ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ, ಸ್ವೀಕೃತದಾರ ಉಡುಗೊರೆಯ ಮೌಲ್ಯದ ಮೇಲೆ
                  ತೆರಿಗೆಗಳನ್ನು ಪಾವತಿಸಬೇಕಾಗಬಹುದು ಮತ್ತು ಕುಟುಂಬ ಹೊರಗಿನವರಿಗೆ
                  ಮರುಕಟ್ಟೆ ಮೌಲ್ಯ ಪಾವತಿಸುವುದು.
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
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Donee or Recipient" : "ಸ್ವೀಕೃತದಾರ"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Donor or Giver" : "ಕೊಡುಗೆದಾರ"}</summary>
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

export default Gift;
