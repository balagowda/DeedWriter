import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Rent = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Rental Agreement" : "ಬಾಡಿಗೆ ಕರಾರು"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A rental agreement, also known as a lease agreement, is a legal contract between a landlord (property owner) and a tenant (individual or business) outlining the terms and conditions of renting a property. This document establishes the rights, responsibilities, and obligations of both parties during the rental period. Rental agreements are commonly used for residential and commercial properties and help provide a clear understanding of the expectations and rules governing the landlord-tenant relationship."
            : "ಬಾಡಿಗೆ ಕರಾರು, ಅಥವಾ ಲೀಸ್ ಒಪ್ಪಂದವೆಂದು ಕರೆಯಲಾಗುವ, ಆಸ್ತಿಯನ್ನು ಬಾಡಿಗೆಗೆ ನೀಡುವ ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ರೂಪರೇಖೆ ಒಳಗೊಂಡಿರುವ ಒಬ್ಬ ಭೂಮಾಲೀಕ (ಆಸ್ತಿ ಮಾಲೀಕ) ಮತ್ತು ಒಬ್ಬ ಬಾಡಿಗೆದಾರ (ವ್ಯಕ್ತಿ ಅಥವಾ ವ್ಯಾಪಾರ) ನಡುವಿನ ಕಾನೂನುಬದ್ಧ ಒಪ್ಪಂದವಾಗಿದೆ. ಈ ದಾಖಲೆಯು ಬಾಡಿಗೆ ಅವಧಿಯಲ್ಲಿ ಎರಡೂ ಪಕ್ಷಗಳ ಹಕ್ಕುಗಳು, ಜವಾಬ್ದಾರಿಗಳು ಮತ್ತು ಬಾಧ್ಯತೆಗಳನ್ನು ಸ್ಥಾಪಿಸುತ್ತದೆ. ಬಾಡಿಗೆ ಒಪ್ಪಂದಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ವಸತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ಆಸ್ತಿಗಳಿಗೆ ಬಳಸಲಾಗುತ್ತದೆ ಮತ್ತು ಭೂಮಾಲೀಕ-ಬಾಡಿಗೆದಾರ ಸಂಬಂಧವನ್ನು ನಿಯಂತ್ರಿಸುವ ನಿರೀಕ್ಷೆಗಳು ಮತ್ತು ನಿಯಮಗಳ ಬಗ್ಗೆ ಸ್ಪಷ್ಟ ಅರ್ಥವನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Rent Details:</b>
                  The agreement specifies the amount of rent to be paid, the due
                  date, and the acceptable methods of payment. It may also
                  outline any late fees or penalties for delayed payments.
                </>
              ) : (
                <>
                  <b className="bold">ಬಾಡಿಗೆ ವಿವರಗಳು:</b> ಒಪ್ಪಂದವು ಪಾವತಿಸಬೇಕಾದ
                  ಬಾಡಿಗೆಯ ಮೊತ್ತ, ಕೊನೆಯ ದಿನಾಂಕ ಮತ್ತು ಪಾವತಿಯ ಸ್ವೀಕಾರಾರ್ಹ
                  ವಿಧಾನಗಳನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ. ಇದು ವಿಳಂಬಿತ ಪಾವತಿಗಳಿಗೆ ಯಾವುದೇ
                  ವಿಳಂಬ ಶುಲ್ಕಗಳು ಅಥವಾ ದಂಡಗಳನ್ನು ಸಹ ರೂಪರೇಖೆ ಮಾಡಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Rules and Regulations:</b>
                  The document may include rules and regulations governing the
                  use of the property, such as restrictions on making
                  alterations, subletting, or keeping pets.
                </>
              ) : (
                <>
                  <b className="bold">ನಿಯಮಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳು:</b> ಈ ದಾಖಲೆಯು ಆಸ್ತಿಯ
                  ಬಳಕೆಯನ್ನು ನಿಯಂತ್ರಿಸುವ ನಿಯಮಗಳು ಮತ್ತು ನಿಬಂಧನೆಗಳನ್ನು
                  ಒಳಗೊಂಡಿರಬಹುದು, ಉದಾಹರಣೆಗೆ ಬದಲಾವಣೆಗಳನ್ನು ಮಾಡುವುದು, ಒಳಬಾಡಿಗೆ
                  ನೀಡುವುದು ಅಥವಾ ಸಾಕುಪ್ರಾಣಿಗಳನ್ನು ಸಾಕುವುದು ಮುಂತಾದ ನಿರ್ಬಂಧಗಳು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Security Deposit: </b>
                  The rental agreement typically includes information about the
                  security deposit, including the amount, conditions for its
                  refund, and any deductions that may be made.
                </>
              ) : (
                <>
                  <b className="bold">ಭದ್ರತಾ ಠೇವಣಿ:</b> ಬಾಡಿಗೆ ಒಪ್ಪಂದವು ಸಾಮಾನ್ಯವಾಗಿ
                  ಭದ್ರತಾ ಠೇವಣಿಯ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ, ಮೊತ್ತ, ಅದರ
                  ಮರುಪಾವತಿಗಾಗಿ ಷರತ್ತುಗಳು ಮತ್ತು ಮಾಡಬಹುದಾದ ಯಾವುದೇ ಕಡಿತಗಳು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Terms of Tenancy:</b>
                  This section outlines the duration of the lease, including the
                  start and end dates. It specifies whether the lease is for a
                  fixed term (e.g., one year) or on a month-to-month basis.
                </>
              ) : (
                <>
                  <b className="bold">ಕರಾರುದಾರಿಕೆಯ ನಿಯಮಗಳು:</b> ಈ ವಿಭಾಗವು ಬಾಡಿಗೆ
                  ಅವಧಿಯನ್ನು ರೂಪರೇಖೆ ಮಾಡುತ್ತದೆ, ಪ್ರಾರಂಭ ಮತ್ತು ಮುಕ್ತಾಯ
                  ದಿನಾಂಕಗಳನ್ನು ಒಳಗೊಂಡಂತೆ. ಬಾಡಿಗೆ ಒಂದು ನಿಗದಿತ ಅವಧಿಗೆ
                  (ಉದಾಹರಣೆಗೆ, ಒಂದು ವರ್ಷ) ಅಥವಾ ತಿಂಗಳಿಂದ ತಿಂಗಳ ಆಧಾರದ ಮೇಲೆ ಎಂದು ಇದು
                  ನಿರ್ದಿಷ್ಟಪಡಿಸುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Termination and Renewal:</b>
                  The terms for terminating the lease are outlined, including
                  notice periods for both the landlord and the tenant. If there
                  are options for lease renewal, those terms may also be
                  included.
                </>
              ) : (
                <>
                  <b className="bold">ಮುಕ್ತಾಯ ಮತ್ತು ನವೀಕರಣ:</b> ಬಾಡಿಗೆ
                  ಮುಕ್ತಾಯಗೊಳಿಸುವ ನಿಯಮಗಳನ್ನು ರೂಪರೇಖೆ ಮಾಡಲಾಗಿದೆ, ಭೂಮಾಲೀಕ ಮತ್ತು
                  ಬಾಡಿಗೆದಾರ ಇಬ್ಬರಿಗೂ ಸೂಚನೆ ಅವಧಿಗಳು ಸೇರಿದಂತೆ. ಬಾಡಿಗೆ ನವೀಕರಣಕ್ಕೆ
                  ಆಯ್ಕೆಗಳಿದ್ದರೆ, ಆ ನಿಯಮಗಳನ್ನು ಸಹ ಸೇರಿಸಬಹುದು.
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
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "tenant" : "ಬಾಡಿಗೆದಾರರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>{language === "eng" ? "landlord" : "ಮಾಲೀಕರು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>9 & 11A /11B (for Rural)</li>
              <li>Form No-3 (for Town)</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Rent;
