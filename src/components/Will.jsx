import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Will = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Will" : "ಇಚ್ಛಾಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A will is a legal document that outlines a person's wishes regarding the distribution of their assets, care for their dependents, and the appointment of an executor to manage their estate after their death. A will is an important tool in estate planning, and it provides individuals with the ability to specify how their property should be handled and who should inherit it. "
            : "ಇಚ್ಛಾಪತ್ರ ಅಥವಾ ವಿಲ್ ಎಂಬುದು ವ್ಯಕ್ತಿಯು ತಮ್ಮ ಮರಣದ ನಂತರ ತಮ್ಮ ಆಸ್ತಿಯ ವಿತರಣೆ, ತಮ್ಮ ಅವಲಂಬಿತರ ಆರೈಕೆ ಮತ್ತು ತಮ್ಮ ಆಸ್ತಿಯನ್ನು ನಿರ್ವಹಿಸಲು ನಿರ್ವಾಹಕರ ನೇಮಕಾತಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ತಮ್ಮ ಇಚ್ಛೆಗಳನ್ನು ವಿವರಿಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ವಿಲ್ ಆಸ್ತಿ ಯೋಜನೆಯಲ್ಲಿ ಒಂದು ಪ್ರಮುಖ ಸಾಧನವಾಗಿದ್ದು, ವ್ಯಕ್ತಿಗಳಿಗೆ ತಮ್ಮ ಆಸ್ತಿಯನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕು ಮತ್ತು ಯಾರು ಪಡೆಯಬೇಕು ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುವ ಸಾಮರ್ಥ್ಯವನ್ನು ನೀಡುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Identification:</b>
                  The will typically begins with the identification of the
                  person making the will, known as the testator or testatrix.
                  This section may include personal details such as the
                  individual's name, address, and other identifying information.
                </>
              ) : (
                <>
                  <b>
                    <span className="bold">ಗುರುತು:</span>
                  </b>
                  ವಿಲ್ ಸಾಮಾನ್ಯವಾಗಿ ವಿಲ್ ಮಾಡುತ್ತಿರುವ ವ್ಯಕ್ತಿಯ, ಅಂದರೆ ಪರೀಕ್ಷಕ ಅಥವಾ
                  ಪರೀಕ್ಷಕಿಯ, ಗುರುತಿಸುವಿಕೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ. ಈ ವಿಭಾಗದಲ್ಲಿ
                  ವ್ಯಕ್ತಿಯ ಹೆಸರು, ವಿಳಾಸ ಮತ್ತು ಇತರ ಗುರುತಿಸುವಿಕೆ ಮಾಹಿತಿಯಂತಹ
                  ವೈಯಕ್ತಿಕ ವಿವರಗಳು ಸೇರಿರಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Disposition of Assets:</b>
                  The will specifies how the testator's assets, including real
                  estate, money, investments, and personal belongings, should be
                  distributed among the beneficiaries. Beneficiaries can include
                  family members, friends, charities, or other entities.
                </>
              ) : (
                <>
                  <b>
                    <span className="bold">ಆಸ್ತಿಯ ವಿತರಣೆ:</span>
                  </b>
                  ವಿಲ್ ಮಾಡುವವರ ಆಸ್ತಿಯನ್ನು ಹೇಗೆ ವಿತರಣೆ ಮಾಡಬೇಕು ಎಂಬುದನ್ನು
                  ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ, ಅದರಲ್ಲಿ ರಿಯಲ್ ಎಸ್ಟೇಟ್, ಹಣ, ಹೂಡಿಕೆಗಳು
                  ಮತ್ತು ವೈಯಕ್ತಿಕ ವಸ್ತುಗಳು ಸೇರಿವೆ. ಫಲಾನುಭವಿಗಳು ಕುಟುಂಬದ ಸದಸ್ಯರು,
                  ಸ್ನೇಹಿತರು, ದತ್ತಿಗಳು ಅಥವಾ ಇತರ ಘಟಕಗಳನ್ನು ಒಳಗೊಳ್ಳಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Guardianship:</b>
                  If the testator has minor children, the will may appoint a
                  guardian who will be responsible for the care and upbringing
                  of the children in the event of the testator's death.
                </>
              ) : (
                <>
                  <b>
                    <span className="bold">ರಕ್ಷಣಕರ್ತೃತ್ವ:</span>
                  </b>
                  ವಿಲ್ ಮಾಡುವವರು ಅಪ್ರಾಯ ವಯಸ್ಸಿನ ಮಕ್ಕಳನ್ನು ಹೊಂದಿದ್ದರೆ, ವಿಲ್
                  ಮಾಡುವವರ ಮರಣದ ಸಂದರ್ಭದಲ್ಲಿ ಮಕ್ಕಳ ಆರೈಕೆ ಮತ್ತು ಪೋಷಣೆಗಾಗಿ ಹೊಣೆಯನ್ನು
                  ಹೊರುವ ರಕ್ಷಕನನ್ನು ನೇಮಿಸಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Witnesses and Notarization:</b>
                  Wills typically require the signatures of witnesses who can
                  attest to the testator's capacity and the absence of undue
                  influence. In some jurisdictions, notarization may also be
                  required.
                </>
              ) : (
                <>
                  <b className="bold">ಸಾಕ್ಷಿಗಳು ಮತ್ತು ನೋಟರಿ:</b>
                  ವಿಲ್ಗಳು ಸಾಮಾನ್ಯವಾಗಿ ವಿಲ್ ಮಾಡುವವರ ಸಹಿ ಮತ್ತು ಸಾಕ್ಷಿಗಳ ಸಹಿಗಳನ್ನು
                  ಒಳಗೊಂಡಿರುತ್ತದೆ. ಕೆಲವು ನ್ಯಾಯವ್ಯಾಧಿಕಾರಗಳಲ್ಲಿ, ನೋಟರಿ ಪರಿಶೀಲನವೂ
                  ಅಗತ್ಯವಾಗಿರಬಹುದು.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="sale_docs">
          <h4 className="sale_subheader">{language==='eng'?"Required Documents":"ಅಗತ್ಯ ದಾಖಲೆಗಳು"}</h4>
          <details>
            <summary style={{ cursor: "pointer" }}>{language==='eng'?"will writer":"ವಿಲ್ ಮಾಡುವವರು"}</summary>
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
              <li>Bank Deposite Details</li><br />
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

export default Will;
