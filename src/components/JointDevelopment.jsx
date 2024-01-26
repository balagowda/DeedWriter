import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const JointDevelopment = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>
          {language === "eng"
            ? "Joint Development Agreement"
            : "ಜಂಟಿ ಅಭಿವೃದ್ಧಿ ಕರಾರು"}
        </h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A Joint Development Agreement (JDA) is a legal contract between two or more parties that outlines the terms and conditions for jointly developing a property. where multiple parties collaborate to develop a piece of land or a real estate project. The parties involved typically include landowners and developers."
            : "ಜಂಟಿ ಅಭಿವೃದ್ಧಿ ಕರಾರು (ಜೆಡಿಎ) ಎಂದರೆ, ಆಸ್ತಿಯನ್ನು ಜಂಟಿಯಾಗಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ರೂಪರೇಖೆ ಒಳಗೊಂಡಿರುವ, ಎರಡು ಅಥವಾ ಹೆಚ್ಚಿನ ಪಕ್ಷಗಳ ನಡುವಿನ ಕಾನೂನುಬದ್ಧ ಒಪ್ಪಂದವಾಗಿದೆ. ಇದು ಒಂದು ಭೂಮಿಯ ಭಾಗ ಅಥವಾ ರಿಯಲ್ ಎಸ್ಟೇಟ್ ಯೋಜನೆಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಬಹು ಪಕ್ಷಗಳು ಸಹಕರಿಸುವ ಸಂದರ್ಭದಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಸಾಮಾನ್ಯವಾಗಿ ಭೂಮಾಲೀಕರು ಮತ್ತು ಡೆವಲಪರ್‌ಗಳು ಒಳಗೊಂಡಿರುವ ಪಕ್ಷಗಳಾಗಿರುತ್ತವೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Parties Involved:</b>
                  The agreement identifies the parties involved, which may
                  include landowners, developers, and any other relevant
                  stakeholders.
                </>
              ) : (
                <>
                  <b className="bold">ಒಳಗೊಂಡಿರುವ ಪಕ್ಷಗಳು:</b>ಒಪ್ಪಂದವು ಒಳಗೊಂಡಿರುವ
                  ಪಕ್ಷಗಳನ್ನು ಗುರುತಿಸುತ್ತದೆ. ಇದರಲ್ಲಿ ಭೂಮಾಲೀಕರು, ಡೆವಲಪರ್‌ಗಳು ಮತ್ತು
                  ಇತರ ಯಾವುದೇ ಸಂಬಂಧಿತ ಪಾಲುದಾರರು ಸೇರಿರಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Description of the Property:</b>
                  The JDA provides a detailed description of the property or
                  land that is the subject of the joint development. This
                  includes the location, size, and any specific details about
                  the property.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿ ವಿವರಣೆ:</b> ಜೆಡಿಎ ಜಂಟಿ ಅಭಿವೃದ್ಧಿಯ
                  ವಿಷಯವಾಗಿರುವ ಆಸ್ತಿ ಅಥವಾ ಭೂಮಿಯ ವಿವರವಾದ ವಿವರಣೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.
                  ಇದರಲ್ಲಿ ಸ್ಥಳ, ಗಾತ್ರ ಮತ್ತು ಆಸ್ತಿಯ ಬಗ್ಗೆ ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ
                  ವಿವರಗಳು ಸೇರಿವೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Financial Arrangements:</b>
                  The JDA includes details about the financial arrangements
                  between the parties. This may include the sharing of costs,
                  profits, and losses associated with the development.
                </>
              ) : (
                <>
                  <b className="bold">ಆರ್ಥಿಕ ವ್ಯವಸ್ಥೆಗಳು:</b> ಪಕ್ಷಗಳ ನಡುವಿನ ಆರ್ಥಿಕ
                  ವ್ಯವಸ್ಥೆಗಳ ಬಗ್ಗೆ ವಿವರಗಳನ್ನು ಜೆಡಿಎ ಒಳಗೊಂಡಿದೆ. ಇದರಲ್ಲಿ
                  ಅಭಿವೃದ್ಧಿಗೆ ಸಂಬಂಧಿಸಿದ ವೆಚ್ಚಗಳು, ಲಾಭಗಳು ಮತ್ತು ನಷ್ಟಗಳ ಹಂಚಿಕೆ
                  ಸೇರಿರಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Signatures and Witnesses:</b> The Joint
                  development agreement is signed by both the parties. It may
                  also require the presence of witnesses, whose signatures
                  attest to the authenticity of the transaction.
                </>
              ) : (
                <>
                  <b className="bold">ಸಹಿಗಳು ಮತ್ತು ಸಾಕ್ಷಿಗಳು:</b> ಜಂಟಿ ಅಭಿವೃದ್ಧಿ
                  ಒಪ್ಪಂದಕ್ಕೆ ಎರಡೂ ಪಕ್ಷಗಳು ಸಹಿ ಹಾಕುತ್ತವೆ. ಇದಕ್ಕೆ ಸಾಕ್ಷಿಗಳ
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
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Developers" : "ಡೆವಲಪರ್‌ಗಳು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Land owners" : "ಭೂಮಾಲೀಕರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC (in case of Full Estant)</li>
              <li>MR</li>
              <li>PAN Card</li>
              <li>RR 5 & 6</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default JointDevelopment;
