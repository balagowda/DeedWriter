import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Consent = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Consent Deed" : "ಒಪ್ಪಿಗೆ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A Consent Deed is a legal document that formalizes the agreement or consent of one party to a particular action or decision made by another party. Consent deeds are often used in various contexts, and their content depends on the specific circumstances of the situation they address."
            : "ಒಪ್ಪಂದ ಪತ್ರವು ಒಂದು ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದ್ದು, ಒಂದು ಪಕ್ಷದ ನಿರ್ದಿಷ್ಟ ಕ್ರಮ ಅಥವಾ ಇನ್ನೊಂದು ಪಕ್ಷದ ನಿರ್ಧಾರಕ್ಕೆ ಒಪ್ಪಂದ ಅಥವಾ ಒಪ್ಪಿಗೆಯನ್ನು ಅಧಿಕೃತಗೊಳಿಸುತ್ತದೆ. ಒಪ್ಪಂದ ಪತ್ರಗಳನ್ನು ವಿವಿಧ ಸಂದರ್ಭಗಳಲ್ಲಿ ಹೆಚ್ಚಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ, ಮತ್ತು ಅವುಗಳ ವಿಷಯವು ಅವುಗಳು ಪರಿಹರಿಸುವ ಪರಿಸ್ಥಿತಿಯ ನಿರ್ದಿಷ್ಟ ಸಂದರ್ಭಗಳನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Family Matters:</b>
                  In family law, a consent deed could be used when family
                  members agree to certain arrangements or settlements. This
                  might include consent to a property division, custody
                  arrangement, or financial settlement.
                </>
              ) : (
                <>
                  <b className="bold">ಕುಟುಂಬ ವಿಷಯಗಳು:</b> ಕುಟುಂಬ ಕಾನೂನಿನಲ್ಲಿ,
                  ಕುಟುಂಬದ ಸದಸ್ಯರು ನಿರ್ದಿಷ್ಟ ವ್ಯವಸ್ಥೆಗಳ ಅಥವಾ ಒಪ್ಪಂದಗಳಿಗೆ
                  ಒಪ್ಪಿಕೊಳ್ಳುವಾಗ ಒಪ್ಪಂದ ಪತ್ರವನ್ನು ಬಳಸಬಹುದು. ಇದರಲ್ಲಿ ಆಸ್ತಿ
                  ವಿಭಜನೆ, ಮಕ್ಕಳ ಪೋಷಣೆ ವ್ಯವಸ್ಥೆ ಅಥವಾ ಆರ್ಥಿಕ ಒಪ್ಪಂದಕ್ಕೆ ಒಪ್ಪಿಗೆ
                  ಸೇರಿರಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Debt Settlements:</b>
                  In financial transactions, a consent deed might be used when a
                  creditor agrees to a debt settlement proposal put forth by a
                  debtor. The document would outline the terms and conditions of
                  the settlement and the creditor's consent to it.
                </>
              ) : (
                <>
                  <b className="bold">ಸಾಲದ ಪರಿಹಾರಗಳು:</b>
                  ಹಣಕಾಸು ವ್ಯವಹಾರಗಳಲ್ಲಿ, ಒಪ್ಪಂದ ಪತ್ರವನ್ನು ಬಳಸಬಹುದು, ಸಾಲದಾರರು
                  ಸಾಲಕೊಡುವವರು ಮುಂದಿಟ್ಟ ಒಪ್ಪಂದದ ಪ್ರಸ್ತಾಪಕ್ಕೆ ಒಪ್ಪಿಗೆ ನೀಡುತ್ತಾರೆ.
                  ಈ ದಾಖಲೆಯು ಒಪ್ಪಂದದ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಮತ್ತು ಸಾಲದಾರರ
                  ಒಪ್ಪಿಗೆಯನ್ನು ರೂಪರೇಖೆ ಒಳಗೊಂಡಿರುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Property Transactions:</b>
                  In real estate, a consent deed might be used when one party,
                  such as a co-owner or a lender, grants consent for a specific
                  action. For example, it could involve obtaining consent for a
                  property transfer, mortgage, or lease.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿ ವ್ಯವಹಾರಗಳು:</b> ರಿಯಲ್ ಎಸ್ಟೇಟ್‌ನಲ್ಲಿ,
                  ಸಹ-ಒಡೆಯ ಅಥವಾ ಸಾಲದಾತನಂತಹ ಒಂದು ಪಕ್ಷವು ನಿರ್ದಿಷ್ಟ ಕ್ರಮಕ್ಕೆ ಒಪ್ಪಿಗೆ
                  ನೀಡಿದಾಗ ಒಪ್ಪಂದ ಪತ್ರವನ್ನು ಬಳಸಬಹುದು. ಉದಾಹರಣೆಗೆ, ಆಸ್ತಿ ವರ್ಗಾವಣೆ,
                  ಅಡಮಾನ ಅಥವಾ ಗುತ್ತಿಗೆಗೆ ಒಪ್ಪಿಗೆ ಪಡೆಯುವುದು ಇದರಲ್ಲಿ ಸೇರಿರಬಹುದು.
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
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Required Documents" : "ಒಪ್ಪಿಗೆ ಕೊಡುವವರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>Family Tree</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "Required Documents" : "ಒಪ್ಪಿಗೆ ಪಡೆವವರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>Registered Document (xerox)</li>
              <li>RTC (in case of Full Estant)</li><br />
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

export default Consent;
