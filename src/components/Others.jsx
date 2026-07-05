import React from "react";
import "../Styles/sale.css";
import "../Styles/others.css";
import { useLanguage } from "../context/LanguageContext";

const Others = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Other Documents" : "ಇತರ ದಾಖಲೆಗಳು"}</h3>
      </div>

      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "Apart from property deeds, various government and non-government documents are required for legal, personal, and administrative purposes. These documents are drafted with utmost accuracy to ensure compliance with applicable laws and regulations."
            : "ಆಸ್ತಿ ಪತ್ರಗಳ ಹೊರತಾಗಿ, ಕಾನೂನು, ವೈಯಕ್ತಿಕ ಮತ್ತು ಆಡಳಿತಾತ್ಮಕ ಉದ್ದೇಶಗಳಿಗಾಗಿ ವಿವಿಧ ಸರ್ಕಾರಿ ಮತ್ತು ಅಸರ್ಕಾರಿ ದಾಖಲೆಗಳ ಅಗತ್ಯವಿದೆ. ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳು ಮತ್ತು ನಿಯಮಗಳ ಅನುಸಾರ ಸರಿಯಾಗಿ ಮತ್ತು ನಿಖರವಾಗಿ ಈ ದಾಖಲೆಗಳನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ."}
        </p>

        {/* ── GOVERNMENT DOCUMENTS ── */}
        <div className="others-section-label">
          <span className="others-badge">
            {language === "eng" ? "🏛️ Government Registration Documents" : "🏛️ ಸರ್ಕಾರಿ ನೋಂದಣಿ ದಾಖಲೆಗಳು"}
          </span>
        </div>

        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Affidavit (Sworn Statement):</b>
                  A written sworn statement of facts voluntarily made before an authorized officer or notary. Used for name changes, income declarations, residence proof, and various legal proceedings.
                </>
              ) : (
                <>
                  <b className="bold">ಅಫಿಡವಿಟ್ (ಪ್ರಮಾಣಪತ್ರ):</b>
                  ಅಧಿಕೃತ ಅಧಿಕಾರಿ ಅಥವಾ ನೋಟರಿ ಮುಂದೆ ಸ್ವಯಂಪ್ರೇರಿತವಾಗಿ ಮಾಡಿದ ಲಿಖಿತ ಪ್ರಮಾಣ ಹೇಳಿಕೆ. ಹೆಸರು ಬದಲಾವಣೆ, ಆದಾಯ ಘೋಷಣೆ, ನಿವಾಸ ಪುರಾವೆ ಮತ್ತು ವಿವಿಧ ಕಾನೂನು ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Encumbrance Certificate (EC):</b>
                  An official document issued by the Sub-Registrar's office confirming that a property is free from monetary and legal liabilities. Essential for property purchase and obtaining loans.
                </>
              ) : (
                <>
                  <b className="bold">ಅಡಚಣೆ ಪ್ರಮಾಣಪತ್ರ (EC):</b>
                  ಉಪ-ನೋಂದಣಾಧಿಕಾರಿ ಕಚೇರಿಯಿಂದ ನೀಡಲಾಗುವ ಅಧಿಕೃತ ದಾಖಲೆ, ಆಸ್ತಿ ಹಣಕಾಸು ಮತ್ತು ಕಾನೂನು ಬಾಧ್ಯತೆಗಳಿಂದ ಮುಕ್ತವಾಗಿದೆ ಎಂದು ದೃಢೀಕರಿಸುತ್ತದೆ. ಆಸ್ತಿ ಖರೀದಿ ಮತ್ತು ಸಾಲ ಪಡೆಯಲು ಅತ್ಯಗತ್ಯ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Khata Transfer & Registration:</b>
                  Khata is an account maintained by the local municipality or gram panchayat for each property. Khata transfer is required when ownership of a property changes hands through sale, gift, inheritance or partition.
                </>
              ) : (
                <>
                  <b className="bold">ಖಾತಾ ವರ್ಗಾವಣೆ & ನೋಂದಣಿ:</b>
                  ಖಾತಾ ಎಂಬುದು ಸ್ಥಳೀಯ ಮುನ್ಸಿಪಾಲಿಟಿ ಅಥವಾ ಗ್ರಾಮ ಪಂಚಾಯತ್‌ನಿಂದ ಪ್ರತಿ ಆಸ್ತಿಗೆ ನಿರ್ವಹಿಸಲಾಗುವ ಖಾತೆ. ಮಾರಾಟ, ದಾನ, ಉತ್ತರಾಧಿಕಾರ ಅಥವಾ ವಿಭಾಗದ ಮೂಲಕ ಆಸ್ತಿಯ ಮಾಲೀಕತ್ವ ಬದಲಾದಾಗ ಖಾತಾ ವರ್ಗಾವಣೆ ಅಗತ್ಯ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Mutation (RTC / Phodi):</b>
                  Mutation is the process of updating land records in the revenue department when property ownership is transferred. Also called Phodi in Karnataka. Required after every property transaction.
                </>
              ) : (
                <>
                  <b className="bold">ಮ್ಯುಟೇಶನ್ (ಆರ್‌ಟಿಸಿ / ಫೋಡಿ):</b>
                  ಆಸ್ತಿಯ ಮಾಲೀಕತ್ವ ವರ್ಗಾವಣೆ ಆದಾಗ ಕಂದಾಯ ಇಲಾಖೆಯಲ್ಲಿ ಭೂ ದಾಖಲೆಗಳನ್ನು ನವೀಕರಿಸುವ ಪ್ರಕ್ರಿಯೆಯೇ ಮ್ಯುಟೇಶನ್. ಕರ್ನಾಟಕದಲ್ಲಿ ಇದನ್ನು ಫೋಡಿ ಎಂದೂ ಕರೆಯುತ್ತಾರೆ. ಪ್ರತಿಯೊಂದು ಆಸ್ತಿ ವ್ಯವಹಾರದ ನಂತರ ಅಗತ್ಯ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Succession Certificate:</b>
                  A certificate issued by a civil court that establishes the legal heirs of a deceased person and authorises them to inherit debts, securities, and movable property.
                </>
              ) : (
                <>
                  <b className="bold">ಉತ್ತರಾಧಿಕಾರ ಪ್ರಮಾಣಪತ್ರ:</b>
                  ಮೃತ ವ್ಯಕ್ತಿಯ ಕಾನೂನು ವಾರಸುದಾರರನ್ನು ಸ್ಥಾಪಿಸುವ ಮತ್ತು ಸಾಲಗಳು, ಭದ್ರತೆಗಳು ಮತ್ತು ಚರ ಆಸ್ತಿಯನ್ನು ಉತ್ತರಾಧಿಕಾರ ಪಡೆಯಲು ಅಧಿಕಾರ ನೀಡುವ ದೇವಾನಿ ನ್ಯಾಯಾಲಯ ನೀಡುವ ಪ್ರಮಾಣಪತ್ರ.
                </>
              )}
            </li>
          </ul>
        </div>

        {/* ── NON-GOVERNMENT DOCUMENTS ── */}
        <div className="others-section-label" style={{ marginTop: "2rem" }}>
          <span className="others-badge others-badge--alt">
            {language === "eng" ? "📋 Non-Government Documents" : "📋 ಅಸರ್ಕಾರಿ ದಾಖಲೆಗಳು"}
          </span>
        </div>

        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Agreement Letter:</b>
                  A written document between two or more parties outlining the terms and conditions of a mutual understanding. Includes loan agreements, service agreements, partnership agreements and memorandums of understanding (MoU).
                </>
              ) : (
                <>
                  <b className="bold">ಒಪ್ಪಂದ ಪತ್ರ:</b>
                  ಎರಡು ಅಥವಾ ಹೆಚ್ಚು ಪಕ್ಷಗಳ ನಡುವಿನ ಪರಸ್ಪರ ತಿಳುವಳಿಕೆಯ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ವಿವರಿಸುವ ಲಿಖಿತ ದಾಖಲೆ. ಸಾಲ ಒಪ್ಪಂದ, ಸೇವಾ ಒಪ್ಪಂದ, ಪಾಲುದಾರಿಕೆ ಒಪ್ಪಂದ ಮತ್ತು ಪರಸ್ಪರ ತಿಳುವಳಿಕೆ ಪತ್ರ (MoU) ಸೇರಿವೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Undertaking / Declaration:</b>
                  A written promise or commitment made by an individual or organisation to perform or refrain from a specific action. Commonly required for school admissions, employment, bank accounts and government schemes.
                </>
              ) : (
                <>
                  <b className="bold">ಉಪಕ್ರಮ / ಘೋಷಣೆ:</b>
                  ಒಂದು ನಿರ್ದಿಷ್ಟ ಕ್ರಿಯೆಯನ್ನು ಮಾಡಲು ಅಥವಾ ಮಾಡದಿರಲು ಒಬ್ಬ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆ ಮಾಡಿದ ಲಿಖಿತ ವಾಗ್ದಾನ. ಶಾಲೆಗೆ ಪ್ರವೇಶ, ಉದ್ಯೋಗ, ಬ್ಯಾಂಕ್ ಖಾತೆ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳಿಗಾಗಿ ಸಾಮಾನ್ಯವಾಗಿ ಅಗತ್ಯ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Family Tree / Legal Heir Certificate:</b>
                  A document that identifies all legal heirs of a deceased person in their family hierarchy. Required for property inheritance, bank account succession, insurance claims and pension benefits.
                </>
              ) : (
                <>
                  <b className="bold">ಕುಟುಂಬ ವೃಕ್ಷ / ಕಾನೂನು ವಾರಸು ಪ್ರಮಾಣಪತ್ರ:</b>
                  ಮೃತ ವ್ಯಕ್ತಿಯ ಕುಟುಂಬ ಶ್ರೇಣಿಯಲ್ಲಿ ಎಲ್ಲಾ ಕಾನೂನು ವಾರಸುದಾರರನ್ನು ಗುರುತಿಸುವ ದಾಖಲೆ. ಆಸ್ತಿ ಉತ್ತರಾಧಿಕಾರ, ಬ್ಯಾಂಕ್ ಖಾತೆ ಉತ್ತರಾಧಿಕಾರ, ವಿಮೆ ಹಕ್ಕುದಾರಿಕೆ ಮತ್ತು ಪಿಂಚಣಿ ಸೌಲಭ್ಯಗಳಿಗೆ ಅಗತ್ಯ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Special Power of Attorney (SPA):</b>
                  An authorisation document that grants a specific person limited authority to act on behalf of another for a particular transaction or set of tasks — such as managing property, filing documents, or representing in court.
                </>
              ) : (
                <>
                  <b className="bold">ವಿಶೇಷ ಅಧಿಕಾರ ಪತ್ರ (SPA):</b>
                  ಒಂದು ನಿರ್ದಿಷ್ಟ ವ್ಯವಹಾರ ಅಥವಾ ಕಾರ್ಯಗಳ ಸಮೂಹಕ್ಕಾಗಿ ಒಬ್ಬ ನಿರ್ದಿಷ್ಟ ವ್ಯಕ್ತಿಗೆ ಇನ್ನೊಬ್ಬರ ಪರವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಸೀಮಿತ ಅಧಿಕಾರ ನೀಡುವ ದಾಖಲೆ — ಆಸ್ತಿ ನಿರ್ವಹಣೆ, ದಾಖಲೆ ಸಲ್ಲಿಕೆ ಅಥವಾ ನ್ಯಾಯಾಲಯದಲ್ಲಿ ಪ್ರತಿನಿಧಿಸುವುದು.
                </>
              )}
            </li>
          </ul>
        </div>

        {/* ── REQUIRED DOCUMENTS ── */}
        <div className="sale_docs">
          <h4 className="sale_subheader">
            {language === "eng" ? "Required Documents" : "ಅಗತ್ಯ ದಾಖಲೆಗಳು"}
          </h4>

          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "For Affidavit / Undertaking / Declaration" : "ಅಫಿಡವಿಟ್ / ಉಪಕ್ರಮ / ಘೋಷಣೆಗಾಗಿ"}
            </summary>
            <ul>
              <li>Adhar Card (Any address proof)</li>
              <li>Details of the statement / purpose of affidavit</li>
              <li>Two passport-size photographs</li>
            </ul>
          </details>

          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "For Khata Transfer" : "ಖಾತಾ ವರ್ಗಾವಣೆಗಾಗಿ"}
            </summary>
            <ul>
              <li>Original Sale / Gift / Partition deed</li>
              <li>Adhar Card of new owner</li>
              <li>Latest tax paid receipt</li>
              <li>RTC / Property sketch</li>
              <li>Death certificate (if transfer by inheritance)</li>
            </ul>
          </details>

          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "For Mutation (Phodi)" : "ಮ್ಯುಟೇಶನ್ (ಫೋಡಿ) ಗಾಗಿ"}
            </summary>
            <ul>
              <li>Registered Sale / Gift / Partition deed copy</li>
              <li>RTC of the property</li>
              <li>Adhar Card of new owner</li>
              <li>Application to the Tahsildar / Revenue department</li>
            </ul>
          </details>

          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "For Family Tree / Legal Heir Certificate" : "ಕುಟುಂಬ ವೃಕ್ಷ / ಕಾನೂನು ವಾರಸು ಪ್ರಮಾಣಪತ್ರಕ್ಕಾಗಿ"}
            </summary>
            <ul>
              <li>Death certificate of the deceased</li>
              <li>Adhar Cards of all legal heirs</li>
              <li>Ration card / any family document</li>
              <li>Details of all family members (names, relation, age)</li>
            </ul>
          </details>

          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "For Agreement / SPA" : "ಒಪ್ಪಂದ / SPA ಗಾಗಿ"}
            </summary>
            <ul>
              <li>Adhar Card of all parties involved</li>
              <li>Details of the agreement / purpose and scope</li>
              <li>Property or asset details (if applicable)</li>
              <li>Two passport-size photographs (for SPA)</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Others;
