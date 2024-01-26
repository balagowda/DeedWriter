import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Cancel = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Cancellation Deed" : "ರದ್ದಾಯತಿ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A cancellation deed, is a legal document used to revoke or cancel a previously executed deed. It is often employed when parties want to nullify the effects of a previously recorded deed, typically due to errors, changes in circumstances, or the need to rectify legal issues associated with the original deed."
            : "ರದ್ದಾಯತಿ ಪತ್ರವು, ಹಿಂದಿನ ದಾಖಲೆಯ ಪ್ರಭಾವವನ್ನು ರದ್ದುಗೊಳಿಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಪಕ್ಷಗಳು ಹಿಂದಿನ ದಾಖಲೆಯ ದಾಖಲಿತ ಪರಿಣಾಮಗಳನ್ನು ನಿರಾಕರಿಸಲು ಬಯಸಿದಾಗ, ಸಾಮಾನ್ಯವಾಗಿ ದೋಷಗಳು, ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿನ ಬದಲಾವಣೆಗಳು ಅಥವಾ ಮೂಲ ದಾಖಲೆಯೊಂದಿಗೆ ಸಂಬಂಧಿತ ಕಾನೂನುಬದ್ಧ ಸಮಸ್ಯೆಗಳನ್ನು ಸರಿಪಡಿಸುವ ಅಗತ್ಯತೆಯಿಂದಾಗಿ ಇದನ್ನು ಹೆಚ್ಚಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Revoking a Previous Deed:</b>
                  The primary purpose of a cancellation deed is to revoke the
                  legal effect of a previously executed deed. This could be a
                  sale deed, gift deed, mortgage deed, or any other type of
                  deed.
                </>
              ) : (
                <>
                  <b class="bold">ಹಿಂದಿನ ದಾಖಲೆಯನ್ನು ರದ್ದುಗೊಳಿಸುವುದು:</b> ರದ್ದು
                  ಪತ್ರದ ಮುಖ್ಯ ಉದ್ದೇಶವು ಹಿಂದಿನ ದಾಖಲೆಯ ಕಾನೂನುಬದ್ಧ ಪರಿಣಾಮವನ್ನು
                  ರದ್ದುಗೊಳಿಸುವುದು. ಇದು ಮಾರಾಟ ಪತ್ರ, ಉಡುಗೊರೆ ಪತ್ರ, ಅಡಮಾನ ಪತ್ರ ಅಥವಾ
                  ಇನ್ನಾವುದೇ ರೀತಿಯ ದಾಖಲೆಯಾಗಿರಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> The names,
                  addresses, and other identifying information of the parties
                  involved in both the original deed and the cancellation deed
                  are specified.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ಮೂಲ ದಾಖಲೆ ಮತ್ತು ರದ್ದು
                  ಪತ್ರದಲ್ಲಿ ಒಳಗೊಂಡಿರುವ ಪಕ್ಷಗಳ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ
                  ಗುರುತಿಸುವ ಮಾಹಿತಿಯನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Reasons for Cancellation:</b>
                  The document may include reasons for the cancellation, such as
                  errors in the original deed, changes in circumstances, or any
                  other legal justification.
                </>
              ) : (
                <>
                  <b className="bold">ರದ್ದೀಕರಣದ ಕಾರಣಗಳು:</b> ಮೂಲ ದಾಖಲೆಯಲ್ಲಿನ ದೋಷಗಳು,
                  ಪರಿಸ್ಥಿತಿಗಳಲ್ಲಿನ ಬದಲಾವಣೆಗಳು ಅಥವಾ ಇನ್ನಾವುದೇ ಕಾನೂನುಬದ್ಧ
                  ಸಮರ್ಥನೆಗಳಂತಹ ರದ್ದೀಕರಣಕ್ಕೆ ಕಾರಣಗಳನ್ನು ದಾಖಲೆಯಲ್ಲಿ ಒಳಗೊಳ್ಳಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Release of Liabilities:</b>
                  In some cases, a cancellation deed may include clauses
                  releasing the parties from any liabilities or obligations
                  associated with the original deed.
                </>
              ) : (
                <>
                  <b className="bold">ಬಾಧ್ಯತೆಗಳ ಬಿಡುಗಡೆ:</b> ಕೆಲವು ಸಂದರ್ಭಗಳಲ್ಲಿ,
                  ರದ್ದು ಪತ್ರವು ಮೂಲ ದಾಖಲೆಯೊಂದಿಗೆ ಸಂಬಂಧಿತ ಯಾವುದೇ ಬಾಧ್ಯತೆಗಳು ಅಥವಾ
                  ಬಾಧ್ಯತೆಗಳಿಂದ ಪಕ್ಷಗಳನ್ನು ಬಿಡುಗಡೆಗೊಳಿಸುವ ನಿಬಂಧನೆಗಳನ್ನು
                  ಒಳಗೊಂಡಿರಬಹುದು.
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
            <summary style={{ cursor: "pointer" }}>{language==='eng'?"Documents":"ದಾಖಲೆಗಳು"}</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC</li>
              <li>Registered Document (xerox)</li><br />
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

export default Cancel;
