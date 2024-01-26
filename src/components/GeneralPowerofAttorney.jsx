import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const GeneralPowerofAttorney = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>
          {language === "eng"
            ? "General Power Attorney"
            : "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಪತ್ರ"}
        </h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A General Power of Attorney (GPA) is a legal document that grants broad powers to an individual (the agent or attorney-in-fact) to act on behalf of another person (the principal). The General Power of Attorney gives the agent the authority to make decisions and take actions on various matters, including financial, legal, and business affairs, on behalf of the principal."
            : "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಪತ್ರ (ಜಿಪಿಎ) ಎಂಬುದು ಇನ್ನೊಬ್ಬ ವ್ಯಕ್ತಿ (ಮುಖ್ಯಸ್ಥ) ಪರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ (ಏಜೆಂಟ್ ಅಥವಾ ಅಟಾರ್ನಿ-ಇನ್-ಫ್ಯಾಕ್ಟ್) ವಿಶಾಲವಾದ ಅಧಿಕಾರಗಳನ್ನು ನೀಡುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಸಾಮಾನ್ಯ ವಕಾಲತ್ತು ನಾಮೆ ಏಜೆಂಟ್‌ಗೆ ಹಣಕಾಸು, ಕಾನೂನು ಮತ್ತು ವ್ಯಾಪಾರ ವ್ಯವಹಾರಗಳು ಸೇರಿದಂತೆ ವಿವಿಧ ವಿಷಯಗಳ ಬಗ್ಗೆ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಮತ್ತು ಮುಖ್ಯಸ್ಥರ ಪರವಾಗಿ ಕ್ರಮಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಅಧಿಕಾರ ನೀಡುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Scope of Authority:</b>A General Power of
                  Attorney provides the agent with a broad range of powers to
                  handle the principal's affairs. This can include managing
                  financial accounts, signing documents, entering into
                  contracts, buying or selling property, and other legal and
                  financial matters.
                </>
              ) : (
                <>
                  <b className="bold">ಅಧಿಕಾರದ ವ್ಯಾಪ್ತಿ:</b> ಸಾಮಾನ್ಯ ವಕಾಲತ್ತು
                  ನಾಮೆ ಏಜೆಂಟ್‌ಗೆ ಮುಖ್ಯಸ್ಥರ ವ್ಯವಹಾರಗಳನ್ನು ನಿರ್ವಹಿಸಲು ವಿಶಾಲವಾದ
                  ಅಧಿಕಾರಗಳನ್ನು ನೀಡುತ್ತದೆ. ಇದರಲ್ಲಿ ಹಣಕಾಸು ಖಾತೆಗಳನ್ನು
                  ನಿರ್ವಹಿಸುವುದು, ದಾಖಲೆಗಳಿಗೆ ಸಹಿ ಹಾಕುವುದು, ಒಪ್ಪಂದಗಳಿಗೆ
                  ಪ್ರವೇಶಿಸುವುದು, ಆಸ್ತಿಯನ್ನು ಖರೀದಿಸುವುದು ಅಥವಾ ಮಾರಾಟ ಮಾಡುವುದು
                  ಮತ್ತು ಇತರ ಕಾನೂನು ಮತ್ತು ಹಣಕಾಸಿನ ವಿಷಯಗಳು ಸೇರಿವೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Flexibility:</b>
                  The powers granted in a General Power of Attorney can be
                  flexible and tailored to the specific needs of the principal.
                  The document can be drafted to cover a wide range of
                  activities or limited to specific actions.
                </>
              ) : (
                <>
                  <b className="bold">ಬಳಕುಬದ್ಧತೆ:</b> ಸಾಮಾನ್ಯ ವಕಾಲತ್ತು ನಾಮೆಯಲ್ಲಿ
                  ನೀಡಿದ ಅಧಿಕಾರಗಳು ಹೊಂದಿಕೊಳ್ಳಬಹುದಾದ ಮತ್ತು ಮುಖ್ಯಸ್ಥರ ನಿರ್ದಿಷ್ಟ
                  ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಿಸಬಹುದಾದವು. ದಾಖಲೆಯನ್ನು ವಿವಿಧ
                  ಕ್ರಿಯೆಗಳನ್ನು ಒಳಗೊಳ್ಳಲು ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಕ್ರಮಗಳಿಗೆ ಸೀಮಿತಗೊಳಿಸಲು
                  ರೂಪಿಸಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Duration:</b>
                  The General Power of Attorney may specify a duration for which
                  the powers are effective. It can be for a specific period,
                  indefinitely until revoked, or contingent on a specific event.
                </>
              ) : (
                <>
                  <b className="bold">ಕಾಲಮಿತಿ:</b> ಸಾಮಾನ್ಯ ವಕಾಲತ್ತು ನಾಮೆ
                  ಅಧಿಕಾರಗಳು ಪರಿಣಾಮಕಾರಿಯಾಗಿರುವ ಅವಧಿಯನ್ನು ನಿರ್ಧರಿಸಬಹುದು. ಇದು
                  ನಿರ್ದಿಷ್ಟ ಅವಧಿಗೆ, ರದ್ದುಗೊಳಿಸುವವರೆಗೆ ಅನಿರ್ದಿಷ್ಟವಾಗಿ ಅಥವಾ
                  ನಿರ್ದಿಷ್ಟ ಘಟನೆಯ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರಬಹುದು.
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
            <summary style={{ cursor: "pointer" }}>
              {language === "eng"
                ? "Required Documents"
                : "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಪಡೆವವರು"}
            </summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng"
                ? "Required Documents"
                : "ಸಾಮಾನ್ಯ ಅಧಿಕಾರ ಕೊಡುವವರು"}
            </summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC (in case of Full Estant)</li>
              <li>MR</li>
              <li>RR 5 & 6</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li>
              <br />
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

export default GeneralPowerofAttorney;
