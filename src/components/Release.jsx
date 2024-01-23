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
          A release deed is a legal document used to transfer the ownership
          interest or rights in a property from one party to another. It is
          commonly employed when the original owner (releasor) wishes to
          relinquish or release their rights, interests, or claims in favor of
          another party (releasee). Unlike a sale deed or a gift deed, a release
          deed is often used to formalize the surrender or abandonment of
          certain rights without the exchange of money or other consideration.
        </p>
        <div className="sale_keypoints">
          <ul>
            <li>
              <b className="bold"> Use in Family Settlements:</b>
              Release deeds are often used in family settlements to clarify and
              formalize the division of property or relinquishment of rights
              among family members.
            </li>
            <li>
              <b className="bold"> Mutual Agreement:</b>
              The release deed is typically executed based on the mutual
              agreement of the parties involved. Both the releasor and the
              releasee must consent to the terms outlined in the document.
            </li>
            <li>
              <b className="bold">Details of the Parties:</b> The names,
              addresses, and other identifying information of both the releasor
              and the releasee are specified in the document.
            </li>
            <li>
              <b className="bold">Consideration:</b>
              While a release deed may not always involve monetary
              consideration, there could be other considerations or conditions
              mentioned in the deed that the parties have agreed upon.
            </li>
            <li>
              <b className="bold">Property Description:</b>
              The release deed includes a detailed description of the property
              or rights being released. This description helps in clearly
              identifying the subject matter of the release.
            </li>
            <li>
              <b className="bold">Signatures and Witnesses:</b> The sale deed is
              signed by both the buyer and the seller. It may also require the
              presence of witnesses, whose signatures attest to the authenticity
              of the transaction.
            </li>
          </ul>
        </div>
        <div className="sale_docs">
          <h4 className="sale_subheader">Required Documents</h4>
          <details>
            <summary style={{ cursor: "pointer" }}>releasee</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
            </ul>
          </details>
          <details>
            <summary style={{ cursor: "pointer" }}>releasor</summary>
            <ul>
              <li>Adhar Card (Any add.Proof)</li>
              <li>RTC</li>
              <li>MR</li>
              <li>Family Tree</li>
              <li>Original letter</li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Release;
