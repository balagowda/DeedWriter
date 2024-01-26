import React from "react";
import "../Styles/sale.css";
import { useLanguage } from "../context/LanguageContext";

const Release = () => {
  const { language } = useLanguage();

  return (
    <div className="sale-container">
      <div className="sale_header">
        <h3>{language === "eng" ? "Release Deed" : "ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರ"}</h3>
      </div>
      <div className="sale_body">
        <p className="sale_body_details">
          {language === "eng"
            ? "A release deed is a legal document used to transfer the ownership interest or rights in a property from one party to another. It is commonly employed when the original owner (releasor) wishes to release their rights, interests, or claims in favor of another party (releasee). Unlike a sale deed or a gift deed, a release deed is often used to formalize the surrender or abandonment of certain rights without the exchange of money or other consideration."
            : "ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರವು, ಆಸ್ತಿಯಲ್ಲಿನ ಮಾಲೀಕತ್ವದ/ ಜಂಟಿ ಮಾಲೀಕತ್ವದ ಆಸಕ್ತಿ ಅಥವಾ ಹಕ್ಕುಗಳನ್ನು ತ್ಯಜಿಸಲು ಬಳಸುವ ಕಾನೂನುಬದ್ಧ ದಾಖಲೆಯಾಗಿದೆ. ಮಾಲೀಕ (ಹಕ್ಕು ಪಡೆವವರು) ತಮ್ಮ ಹಕ್ಕುಗಳು, ಆಸಕ್ತಿಗಳು ಅಥವಾ ಹಕ್ಕುಗಳನ್ನು ಇನ್ನೊಂದು ಪಕ್ಷದ (ಹಕ್ಕು ಕೊಡುವವರು) ಪರವಾಗಿ ಬಿಡುಗಡೆಗೊಳಿಸಲು ಬಯಸಿದಾಗ ಇದನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ. ಮಾರಾಟ ಪತ್ರ ಅಥವಾ ಉಡುಗೊರೆ ಪತ್ರದಂತಲ್ಲದೆ, ನಿರ್ದಿಷ್ಟ ಹಕ್ಕುಗಳನ್ನು ಹಣ ಅಥವಾ ಇತರ ಪರಿಗಣನೆಯ ವಿನಿಮಯವಿಲ್ಲದೆ ತ್ಯಜಿಸುವುದು ಅಥವಾ ತ್ಯಜಿಸುವುದನ್ನು ಅಧಿಕೃತಗೊಳಿಸಲು ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರವನ್ನು ಹೆಚ್ಚಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ."}
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold"> Use in Family Settlements:</b>
                  Release deeds are often used in family settlements to clarify
                  and formalize the division of property or relinquishment of
                  rights among family members.
                </>
              ) : (
                <>
                  <b className="bold">ಕುಟುಂಬ ಒಪ್ಪಂದಗಳಲ್ಲಿ ಬಳಕೆ:</b> ಆಸ್ತಿಯ
                  ವಿಭಜನೆಯನ್ನು ಸ್ಪಷ್ಟಪಡಿಸಲು ಮತ್ತು ಅಧಿಕೃತಗೊಳಿಸಲು ಅಥವಾ ಕುಟುಂಬ
                  ಸದಸ್ಯರ ನಡುವೆ ಹಕ್ಕುಗಳನ್ನು ಬಿಟ್ಟುಕೊಡಲು ಬಿಡುಗಡೆ ಪತ್ರಗಳನ್ನು
                  ಹೆಚ್ಚಾಗಿ ಕುಟುಂಬ ಒಪ್ಪಂದಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold"> Mutual Agreement:</b>
                  The release deed is typically executed based on the mutual
                  agreement of the parties involved. Both the releasor and the
                  releasee must consent to the terms outlined in the document.
                </>
              ) : (
                <>
                  <b className="bold">ಪರಸ್ಪರ ಒಪ್ಪಂದ:</b> ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರವನ್ನು
                  ಸಾಮಾನ್ಯವಾಗಿ ಒಳಗೊಂಡಿರುವ ಪಕ್ಷಗಳ ಪರಸ್ಪರ ಒಪ್ಪಂದದ ಆಧಾರದ ಮೇಲೆ
                  ಕಾರ್ಯಗತಗೊಳಿಸಲಾಗುತ್ತದೆ. ಹಕ್ಕು ಪಡೆವವರು ಮತ್ತು ಹಕ್ಕು ಕೊಡುವವರು
                  ಇಬ್ಬರೂ ದಾಖಲೆಯಲ್ಲಿ ರೂಪರೇಖೆಗೊಳಿಸಿದ ಷರತ್ತುಗಳಿಗೆ ಒಪ್ಪಬೇಕು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Details of the Parties:</b> The names,
                  addresses, and other identifying information of both the
                  releasor and the releasee are specified in the document.
                </>
              ) : (
                <>
                  <b className="bold">ಪಕ್ಷಗಳ ವಿವರಗಳು:</b> ಹಕ್ಕು ಪಡೆವವರು ಮತ್ತು
                  ಹಕ್ಕು ಕೊಡುವವರು ಇಬ್ಬರ ಹೆಸರುಗಳು, ವಿಳಾಸಗಳು ಮತ್ತು ಇತರ ಗುರುತಿಸುವ
                  ಮಾಹಿತಿಯನ್ನು ದಾಖಲೆಯಲ್ಲಿ ನಿರ್ದಿಷ್ಟಪಡಿಸಲಾಗಿದೆ.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Consideration:</b>
                  While a release deed may not always involve monetary
                  consideration, there could be other considerations or
                  conditions mentioned in the deed that the parties have agreed
                  upon.
                </>
              ) : (
                <>
                  <b className="bold">ಪರಿಗಣನೆ:</b> ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರವು ಯಾವಾಗಲೂ
                  ಹಣದ ಪರಿಗಣನೆಯನ್ನು ಒಳಗೊಂಡಿರದೆಯಾದರೂ, ಪಕ್ಷಗಳು ಒಪ್ಪಿಕೊಂಡಿರುವ ಇತರ
                  ಪರಿಗಣನೆಗಳು ಅಥವಾ ಷರತ್ತುಗಳನ್ನು ದಾಖಲೆಯಲ್ಲಿ ಉಲ್ಲೇಖಿಸಬಹುದು.
                </>
              )}
            </li>
            <li>
              {language === "eng" ? (
                <>
                  <b className="bold">Property Description:</b>
                  The release deed includes a detailed description of the
                  property or rights being released. This description helps in
                  clearly identifying the subject matter of the release.
                </>
              ) : (
                <>
                  <b className="bold">ಆಸ್ತಿಯ ವಿವರಣೆ:</b>ಹಕ್ಕುಖುಲಾಸೆ ಪತ್ರವು
                  ಬಿಡುಗಡೆಯಾಗಿರುವ ಆಸ್ತಿ ಅಥವಾ ಹಕ್ಕುಗಳ ವಿವರವಾದ ವಿವರಣೆಯನ್ನು
                  ಒಳಗೊಂಡಿದೆ. ಈ ವಿವರಣೆಯು ಬಿಡುಗಡೆಯ ವಿಷಯವನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಗುರುತಿಸಲು
                  ಸಹಾಯ ಮಾಡುತ್ತದೆ.
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
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "releasee" : "ಹಕ್ಕು ಕೊಡುವವರು"}
            </summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>
              {language === "eng" ? "releasor" : "ಹಕ್ಕು ಪಡೆವವರು"}
            </summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC</li>
              <li>MR</li>
              <li>Family Tree</li>
              <li>
                Old Documents (eg. Sale /Partition /Gift /Release /Land grant
                certificate)
              </li><br />
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

export default Release;
