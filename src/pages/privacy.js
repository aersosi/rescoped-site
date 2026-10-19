import React from 'react';
import Layout from '@theme/Layout';
import Obfuscate from 'react-obfuscate';

// DRAFT: Resolve every TODO against the actual website setup before publication.
// This wording does not replace statutory obligations or a review of actual data flows.
export default function Privacy() {
  return (
      <div id="page-privacy" className="relative">
        <Layout
            title="rescoped privacy"
            description="We take the protection of your personal data very seriously."
        >
          <div className="flex flex-col gap-4 px-4 sm:px-8 md:px-16 mx-auto py-16 w-full bg-theme">
            <div className="wrapper">
              <h1 className="py-10 text-2xl font-medium">Privacy Policy</h1>
              <p>
                This privacy notice describes the processing of personal data in connection
                with this website. It does not constitute a voluntary guarantee of absolute
                confidentiality, uninterrupted security, or the absence of security incidents.
                Applicable statutory obligations and data subject rights remain unaffected.
              </p>
              <p>
                With this privacy policy, we explain what data is collected when you visit or use our{' '}
                <a href="https://rescoped.io/">rescoped.io</a> website, what we use it for, and how
                long we store it. In addition, we inform you about your rights under the General Data
                Protection Regulation (GDPR).
              </p>
            </div>
            <div className="flex flex-col py-10 gap-4">
              <h2 className="text-lg font-medium text-avo-green-green">1 General information</h2>
              <p>
                When you use a website, various types of personal data may be collected. In the
                following, we inform you about the collection of personal data, which takes place
                during the use of our website and the services connected to it.
              </p>
              <p>
                We point out that data transmission on the Internet may have security gaps. Complete
                protection of the data against access by third parties is not possible.
              </p>

              <h3 className="font-medium mt-6">1.1 Processing of personal data</h3>
              <p>
                Personal data in the sense of Art. 4 GDPR is all information with which you are
                personally identified or identifiable. This can be done, for example, on the basis of
                your name, address, email addresses, etc.
              </p>

              <h3 className="font-medium mt-6">1.2 Controller and privacy contact</h3>
              <p>
                The responsible body as defined in Art. 4 No. 7 GDPR for the processing of personal
                data on this website is:
              </p>

              <div>
                <p className="font-medium mt-6">Arthur Ersosi</p>
                <p>Wandsedamm 2B</p>
                <p>22047 Hamburg</p>
                <p>Germany</p>
                <br/>

                <p>
                  <Obfuscate linkText="hello@aersosi.com" email="hello@aersosi.com" />
                </p>
                <p>
                  <a href="https://www.aersosi.com">https://www.aersosi.com</a>
                </p>

              </div>

              <h3 className="font-medium mt-6">Privacy contact</h3>
              <p>
                For questions about this notice or to exercise your data protection rights,
                please contact the controller using the details above.
              </p>
              {/* TODO: If a Data Protection Officer has been appointed, add their verified
                contact details here. A privacy contact is not automatically a DPO. */}

              <p>
                Certain processing operations may be carried out under the responsibility of other
                companies. This is indicated below in the respective processing description, if this
                is the case.
              </p>

              <h3 className="font-medium mt-6">1.3 Rights of the data subject</h3>
              <p>
                You have the following rights as a data subject of the data processing in accordance
                with the legal provisions regarding the personal data concerning you:
              </p>

              <ol>
                <li>• Right of access, Art. 15 GDPR</li>
                <li>• Right to rectification, Art. 16 GDPR</li>
                <li>• Right to erasure, the "right to be forgotten", Art. 17 GDPR</li>
                <li>• Right to restriction of processing, Art. 18 GDPR</li>
                <li>• Right to object to processing, Art. 21 GDPR</li>
                <li>• Right to data portability, Art. 20 GDPR.</li>
              </ol>

              <p>
                You also have the right to complain to the competent data protection supervisory
                authority about the processing of your personal data.
              </p>
              <p>
                When processing your rights, we may ask you for proof of identity. Any information requested to verify your identity is used to handle your request
                and is limited to what is necessary for that purpose.
              </p>

              <h3 className="font-medium mt-6">1.4 Revocation of your consent to data processing</h3>
              <p>
                Where processing is based on your consent, you can
                revoke an already given consent at any time. To do so, it is sufficient to let us know
                via email. The legality of the data processing carried out up until you have revoked
                your consent remains unaffected by said revocation.
              </p>

              <h3 className="font-medium mt-6">1.5 Objection to data processing</h3>
              <p>
                Insofar as we base the processing of your personal data on the balance of interests,
                you may object to the processing. This is the case if the processing is not necessary,
                in particular, for the fulfillment of a contract with you, which is presented by us in
                each case in the description of the functions and offers. When exercising such an
                objection, we ask you to explain the reasons why we should not process your personal
                data as we have done. In the event of your justified objection, we will review the
                factual situation and either discontinue or adapt the data processing or show you our
                compelling legitimate grounds on the basis of which we will continue the processing.
              </p>

              <p>
                Of course, you can object to the processing of your personal data for purposes of
                advertising and data analysis at any time. You can submit your objection for
                advertising purposes using the contact details provided under 1.2.
              </p>

              <h3 className="font-medium mt-6">1.6 Right to data portability</h3>
              <p>
                You have the right to have data that we process automatically on the basis of your
                consent or in fulfillment of a contract handed over to you or to a third party in a
                common, machine-readable format. If you request the direct transfer of the data to
                another controller, this will only be done insofar as it is technically feasible.
              </p>

              <h3 className="font-medium mt-6">1.7 Disclosure to authorities</h3>
              <p>
                Personal data may be disclosed to competent authorities where required by
                applicable law.
              </p>
              <p>Legal basis: Art. 6 (1) p. 1 lit. c GDPR (legal obligation)</p>
            </div>

            <div className="flex flex-col py-10 gap-4">
              <h2 className="text-lg font-medium text-avo-green-green">
                2 Collection and processing of personal data when visiting our website
              </h2>

              <h3 className="font-medium mt-6">2.1 Server log files</h3>
              {/* TODO: Identify the hosting provider, log data, purposes, legal basis,
                recipients, retention periods, and any international transfers. */}
              <p>
                [Before publication: insert verified information about technical data
                processed when this website is accessed, including processing by the hosting
                provider. Do not state that no personal data is collected unless verified.]
              </p>

              <h3 className="font-medium mt-6">2.2 Cookies</h3>
              {/* TODO: Check cookies, local storage, third-party requests and consent requirements. */}
              <p>
                [Before publication: describe the cookies and similar technologies actually
                used, their purposes, providers, duration and applicable legal bases.
                State that none are used only if this has been verified.]
              </p>

              <h3 className="font-medium mt-6">2.3 External links</h3>
              <p>
                This website contains links to third-party websites. When you follow an
                external link, the destination provider processes personal data under its own
                privacy notice. We do not control that processing. This does not exclude any
                responsibility imposed on us by applicable law.
              </p>
              {/* TODO: Separately describe any embedded third-party services that transmit
                data when this website loads. A link is not the same as an embedded service.
                Disclose actual recipients and international transfer safeguards where required.
                Do not claim that standard contractual clauses have been concluded without evidence. */}
            </div>

            <div className="flex flex-col py-10 gap-4">
              <h2 className="text-lg font-medium text-avo-green-green">
                3 Other functions and offers (inside and outside the website)
              </h2>
              <p>
                In addition to the purely informational use of our website, we offer various services
                that you can use if you are interested. For this purpose, you will usually have to
                provide additional personal data that we use to provide the respective service and to
                which the aforementioned data processing principles apply.
              </p>
              <p>
                If we use contracted service companies for individual functions of our offer or would
                like to use your data for advertising purposes, we will inform you in detail about the
                respective processes below. In doing so, we also state the specified criteria for the
                storage period.
              </p>
              <p>
                Where service providers process personal data on our behalf, the applicable
                statutory requirements for engaging those providers apply.
                This notice does not promise a particular monitoring frequency.
                [Before publication: identify the providers and processing activities actually used.]
              </p>

              <h3 className="font-medium mt-6">3.1 Request by email, telephone, or fax</h3>
              <p>
                If you contact us by email, telephone, or fax, your inquiry including all related
                personal data (name, inquiry) will be stored and processed by us for the purpose of
                processing your request. Personal data may be made available to service providers used to handle
                communications where a valid legal basis exists, or disclosed where required
                by law. [Before publication: specify the actual recipients or recipient categories.]
              </p>

              <p>
                The processing of this data is based on Art. 6 (1) lit. b GDPR, provided that your
                request is related to the performance of a contract or is necessary for the
                implementation of pre-contractual measures. In all other cases, the processing is
                based on our legitimate interest in the effective processing of the requests addressed
                to us (Art. 6 (1) lit. f GDPR) or on your consent (Art. 6 (1) lit. a GDPR) if this has
                been requested.
              </p>
              <p>
                Contact request data is retained for as long as necessary to handle the
                request and meet applicable legal obligations. Requests for erasure and
                withdrawals of consent are handled in accordance with the applicable legal
                requirements. [Before publication: specify actual retention periods or criteria.]
              </p>

              <h3 className="font-medium mt-6">
                3.2 Processing of data (customer and contract data)
              </h3>
              <p>
                We collect, process, and use personal data only to the extent that they are necessary
                for the establishment, content or modification, of the legal relationship (master
                data). This is done on the basis of Art. 6 (1) lit. b GDPR, which permits the
                processing of data for the performance of a contract or pre-contractual measures. We
                collect, process, and use personal data about the use of our internet pages (usage
                data) only to the extent necessary to enable the user to use the service or to bill
                the user. Customer data is retained for as long as necessary for the stated purposes
                or to comply with applicable legal retention obligations.
                [Before publication: specify the applicable retention periods or the criteria
                used to determine them.]
              </p>
            </div>
          </div>
        </Layout>
      </div>
  );
}
