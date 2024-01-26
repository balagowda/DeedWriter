import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Partition = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Partition Deed" : "ವಿಭಾಗ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A partition deed is a legal document used to divide and distribute the joint ownership of a property among its co-owners. This typically occurs when multiple individuals own a property together, and they decide to separate their respective shares in a specific and legally documented manner."
            : "ವಿಭಾಗ ಪತ್ರವು, ಜಂಟಿ ಮಾಲೀಕತ್ವದ ಆಸ್ತಿಯನ್ನು ಅದರ ಸಹ-ಮಾಲೀಕರ ನಡುವೆ ವಿಭಜಿಸಲು ಮತ್ತು ವಿತರಿಸಲು ಬಳಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಇದು ಸಾಮಾನ್ಯವಾಗಿ ಹಲವಾರು ವ್ಯಕ್ತಿಗಳು ಒಟ್ಟಿಗೆ ಆಸ್ತಿಯನ್ನು ಹೊಂದಿರುವಾಗ ಮತ್ತು ಅವರು ತಮ್ಮ ಪಾಲುಗಳನ್ನು ನಿರ್ದಿಷ್ಟ ಮತ್ತು ಕಾನೂನುಬದ್ಧವಾಗಿ ದಾಖಲೆ ಮಾಡುವ ರೀತಿಯಲ್ಲಿ ಪ್ರತ್ಯೇಕಿಸಲು ನಿರ್ಧರಿಸಿದಾಗ ಸಂಭವಿಸುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Division of Property:</b>
                  The primary purpose of a partition deed is to specify how a
                  property will be divided among its co-owners. It outlines the
                  proportion of shares each co-owner will receive after the
                  partition.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿಯ ವಿಭಜನೆ:</b>ವಿಭಾಗ ಪತ್ರದ ಪ್ರಾಥಮಿಕ
                  ಉದ್ದೇಶವು ಒಂದು ಆಸ್ತಿಯನ್ನು ಅದರ ಸಹ-ಮಾಲೀಕರ ನಡುವೆ ಹೇಗೆ
                  ವಿಭಜಿಸಲಾಗುವುದು ಎಂಬುದನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುವುದು. ವಿಭಜನೆಯ ನಂತರ
                  ಪ್ರತಿ ಸಹ-ಮಾಲೀಕರಿಗೆ ಸಿಗುವ ಪಾಲುಗಳ ಪ್ರಮಾಣವನ್ನು ಇದು ವಿವರಿಸುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> The names,
                  addresses, and other identifying information of all co-owners
                  involved in the partition are included in the deed.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ವಿಭಜನೆಯಲ್ಲಿ ಒಳಗೊಂಡಿರುವ
                  ಎಲ್ಲಾ ಸಹ-ಮಾಲೀಕರ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ ಗುರುತಿಸುವ
                  ಮಾಹಿತಿಯನ್ನು ಪತ್ರದಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Consideration:</b>
                  Unlike a sale deed, where money is exchanged, a partition deed
                  may not involve a monetary consideration. Instead, it
                  specifies the share of each co-owner in the property.
                </>
              ) : (
                <>
                  <b className="bold">ಪರಿಗಣನೆ:</b> ಹಣವನ್ನು ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುವ ಮಾರಾಟ
                  ಪತ್ರದಂತಲ್ಲದೆ, ವಿಭಾಗ ಪತ್ರವು ಹಣದ ಪರಿಗಣನೆಯನ್ನು ಒಳಗೊಂಡಿರದಿರಬಹುದು.
                  ಬದಲಾಗಿ, ಇದು ಆಸ್ತಿಯಲ್ಲಿ ಪ್ರತಿ ಸಹ-ಮಾಲೀಕರ ಪಾಲನ್ನು
                  ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Settlement of Disputes:</b>
                  Partition deeds are often used to settle disputes among
                  co-owners regarding the use, possession, and ownership of the
                  jointly held property. By formalizing the partition through a
                  legal document, potential conflicts can be resolved.
                </>
              ) : (
                <>
                  <b className="bold">ವಿವಾದಗಳ ಇತ್ಯರ್ಥ:</b> ಜಂಟಿಯಾಗಿ ಹೊಂದಿರುವ ಆಸ್ತಿಯ
                  ಬಳಕೆ, ಸ್ವಾಧೀನ ಮತ್ತು ಮಾಲೀಕತ್ವಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ ಸಹ-ಮಾಲೀಕರ ನಡುವಿನ
                  ವಿವಾದಗಳನ್ನು ಇತ್ಯರ್ಥಗೊಳಿಸಲು ವಿಭಾಗ ಪತ್ರಗಳನ್ನು ಹೆಚ್ಚಾಗಿ
                  ಬಳಸಲಾಗುತ್ತದೆ. ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯ ಮೂಲಕ ವಿಭಜನೆಯನ್ನು
                  ಔಪಚಾರಿಕಗೊಳಿಸುವ ಮೂಲಕ, ಸಂಭಾವ್ಯ ಸಂಘರ್ಷಗಳನ್ನು ಪರಿಹರಿಸಬಹುದು.
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
            <summary style={{ cursor: "pointer" }}>{language==='eng'?"All Co-owners":"ಎಲ್ಲಾ ಸಹ-ಮಾಲೀಕರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC (in case of Full Estant)</li>
              <li>11E Plan (in case of Part Estant only)</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li>
              <li>MR</li>
              <li>Family Tree</li><br />
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

export default Partition;
