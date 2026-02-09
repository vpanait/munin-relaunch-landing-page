import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header hideNavLinks={true} />
      <main className="container mx-auto px-6 lg:px-12 py-24 pt-32 max-w-4xl">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <p className="text-sm font-semibold text-foreground mb-2">MUNIN</p>
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-2">
            PRIVACY POLICY
          </h1>
          <p className="text-muted-foreground mb-10">
            Last updated: 01/12/2026
          </p>

          <p className="text-muted-foreground mb-10">
            Financial Freedom Fighters, Inc. d/b/a Munin ("Munin", "we", "us" or "our") is committed to respecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information that you ("you" or "user") may provide to us through your use of our website at <a href="https://www.muninai.com" target="_blank" rel="noopener noreferrer">https://www.muninai.com</a> (the "Website") and all of its sub-domains, the platform at <a href="https://app.muninai.com" target="_blank" rel="noopener noreferrer">https://app.muninai.com</a>, which we also make available through the Website (the "Platform"), and any related services, social media pages and apps (the Website and Platform, together with any related services, social media pages and apps, are collectively referred to as our "Services").
          </p>
          <p className="text-muted-foreground mb-10">
            By visiting, accessing and/or using our Services you agree to be bound by this Privacy Policy. If you do not agree to the terms of this Privacy Policy, please do not use the Services. Each time you use the Services, the current versions of this Privacy Policy will apply.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">INFORMATION WE COLLECT AND HOW WE USE IT</h2>
          <p className="text-muted-foreground mb-6">
            We collect two types of information from users of our Services: "Personal Information," which is information that can be used to identify you (such as your name or your email address), and "Aggregate Information," which is information that cannot be used to identify you (such as frequency of visits to the Website and Platform or your browser type).
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">Lawful Bases (EU/UK)</h3>
          <p className="text-muted-foreground mb-6">
            Where the GDPR/UK GDPR applies, we process Personal Information under one or more of the following legal bases: performance of a contract; consent (which you may withdraw at any time); legitimate interests such as improving and securing the Services (not overridden by your interests/rights); and legal obligations.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">INFORMATION YOU PROVIDE TO US</h2>
          <p className="text-muted-foreground mb-6">
            We collect Personal Information that you voluntarily provide to us when you use our Services. For example, you may provide us with your contact information, your name, the content of your communication, or other Personal Information when you choose to send it to us through email, an online form, when engaging with our conversational artificial intelligence tools, or other method. If you interact with us on social media, we may collect your social media profile information, your communications with us, and your communications and posts on our social media pages.
          </p>
          <p className="text-muted-foreground mb-6">
            If you choose to link your User Systems (as described in more detail below) to the Platform, we may collect Provided Data from Data Sources designated by you, which may include Personal Information of your clients. You may also provide us client information (including the Personal Information of your clients) directly by email, online forms, or other methods, which shall be deemed Provided Data (as described below).
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">REGISTRATION INFORMATION</h2>
          <p className="text-muted-foreground mb-6">
            In order to use the Platform, you must first complete our registration process. During registration you are required to provide truthful contact information (such as first and last name, email address, and LinkedIn profile name). We use this information to verify your identity, to set up your account, and to communicate with you.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">USER SYSTEMS & PROVIDED DATA</h2>
          <p className="text-muted-foreground mb-6">
            When using the Services, you will have the opportunity to link your business systems and tools (such as your CRM, brokerage accounts, and other technology solutions) (collectively, "User Systems") to your Munin account in order to authorize and enable the Services to retrieve certain materials, information and data, including, but not limited to, client communications, client information and client documents ("Provided Data") from you and from the banks, financial institutions and other service providers that maintain Provided Data on your behalf ("Data Sources"). We will use Provided Data solely to provide Services to you.
          </p>
          <p className="text-muted-foreground mb-6">
            Data Source Segregation: Certain features may involve third-party AI processing. However, Google user data obtained via Google APIs (including Google Calendar data accessed via OAuth) is strictly segregated and is not sent to any AI/LLM or speech-to-text vendors. AI features (if enabled) operate only on user-provided content that is not obtained from Google APIs, via a separate user flow.
          </p>
          <p className="text-muted-foreground mb-6">
            Munin links to User Systems by utilizing API connections with the Data Sources or by utilizing your log-in credentials that you voluntarily provide to us to such User Systems for this purpose ("User Credentials"). If you choose to share your User Credentials with Munin, we will arrange for you to do so in a secure manner and we will only retain such User Credentials for so long as is necessary to provide you Services.
          </p>
          <p className="text-muted-foreground mb-6">
            You will have the ability to unlink User Systems from the Services at any time, and upon your written request, we will promptly and permanently delete your Provided Data in Munin's possession. As a general business practice, we strive to delete your Provided Data as soon as it is no longer needed to provide Services to you; however, we may need to retain certain information (including but limited to Personal Information): (i) to comply with a legal requirement, law, subpoena, judicial proceeding, court order, governmental request, or legal process; (ii) to investigate a possible crime, such as fraud or identity theft; or (iii) when we believe it is necessary to protect the rights, property, or safety of Munin or other persons.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">Roles</h3>
          <p className="text-muted-foreground mb-6">
            For <strong className="text-foreground">Provided Data</strong> you supply or connect (including client information pulled from User Systems), you are the controller, and Munin acts as your <strong className="text-foreground">processor/service provider</strong> performing the Services under your instructions and our agreement. For Munin account administration, billing, support, and our website analytics, Munin is a <strong className="text-foreground">controller</strong> of that limited Personal Information.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">Calendar Integrations (Google & Microsoft) — Read-Only</h2>
          <p className="text-muted-foreground mb-4">
            OAuth Access (Read-Only). If you choose to connect a calendar provider, Munin accesses calendar data via OAuth 2.0 solely to power user-facing features that display your calendar information in-app. Munin does not create, edit, or delete calendars or events, and Munin does not add notes or attachments to calendars or events.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Google Calendar (read-only scopes only).</strong> We request only the narrowest scopes needed for read-only features:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>https://www.googleapis.com/auth/calendar.events.readonly — read event data to display meetings in-app; and/or</li>
            <li>https://www.googleapis.com/auth/calendar.readonly — read calendars and events where needed for a read-only feature.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            We do not request write scopes (e.g., …/calendar, …/calendar.events). Google classifies applicable Calendar scopes as sensitive, so OAuth app verification applies.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Microsoft Outlook / Office 365 (Microsoft Graph) (read-only permissions only).</strong> We request only read-only Microsoft Graph permissions, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            <li>Calendars.Read — read events in user calendars;</li>
            <li>Calendars.ReadBasic — read basic event details (no body/attachments); and, if you enable it,</li>
            <li>Calendars.Read.Shared — read events in calendars the user has shared access to.</li>
          </ul>
          <p className="text-muted-foreground mb-4">
            We do not request write permissions (e.g., Calendars.ReadWrite).
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Data We Access & Use (Calendars).</strong> Depending on what you select and the scopes/permissions you approve, we may read event metadata (e.g., calendar and event IDs, titles, start/end times, attendee emails, locations, conferencing links). We use this information only to provide or improve user-facing features that are prominent in the application, and not for advertising or unrelated purposes.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Google API Data Boundary (Limited Use).</strong> Information received from Google APIs is used only to provide and improve the specific user-facing, read-only calendar features that are visible and prominent in the app. We do not use Google API data for advertising, profiling, or marketing. We do not sell Google API data. We do not transfer Google API data to third-party AI/LLM providers or use it to train, fine-tune, or improve generalized AI/ML models.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Google Limited Use Compliance.</strong> Our use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We limit use of Google user data to providing or improving user-facing features; we do not use or transfer Google user data for ads (including retargeting or interest-based advertising); we do not sell Google user data; and we do not allow human reading of Google user data except (i) with your affirmative agreement for a specific item, (ii) for security (e.g., investigating abuse), (iii) to comply with law, or (iv) when data is aggregated for internal operations consistent with the policy.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Disconnecting & Revoking Access.</strong> You can unlink calendars in Munin at any time. You can also revoke access with your provider:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Google — in your Google Account → Third-party connections (remove the app's access).</li>
            <li>Microsoft — in the My Apps portal (Edit or revoke application permissions).</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            After revocation, Munin cannot access your calendar data; we then delete stored tokens and any cached calendar data per the retention policy below.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">PAYMENT INFORMATION</h2>
          <p className="text-muted-foreground mb-6">
            We work with a third party payment processor called Stripe to process credit and debit card transactions for any one-time or recurring payment authorized by you through the Platform for subscription fees for the Services. Your credit or debit card information is never shared with us, and at no point in any transaction do we have access to that information. You should consult Stripe's policies to learn more about how it processes credit and debit card transactions for us by visiting <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/privacy</a>.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">YOUR COMMUNICATION WITH US</h2>
          <p className="text-muted-foreground mb-6">
            We collect information when you communicate with us. The specific types of information we collect will depend on the forum in which you communicate with us. For example, if you send us an email, we will collect your email address and the content of your email.
          </p>
          <p className="text-muted-foreground mb-6">
            Our artificial intelligence tools will also generate draft email communications for you based on instructions and data provided to our Services. We may collect any modifications or amendments made by you to outputs generated by our Services. For example, if you edit an email that our artificial intelligence tools assist in drafting, we may collect the content of those edits.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">INFORMATION WE AUTOMATICALLY COLLECT</h2>
          <p className="text-muted-foreground mb-4">
            When you use our Website and Platform, we automatically receive and collect information from your device. This information includes the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Information about your device, such as the Internet Protocol (IP) address and device ID.</li>
            <li>The specific actions that you take when you use our Website and/or Platform, including but not limited to the pages and screens that you view or visit, search terms that you enter, and how you interact with our Website and Platform.</li>
            <li>The time, frequency, connection type, and duration of your use of our Website and Platform.</li>
            <li>Information regarding your interaction with email messages, for example, whether you opened, clicked on, or forwarded the email message.</li>
            <li>Identifiers associated with cookies or other technologies that may uniquely identify your device or browser (as further described below).</li>
            <li>Pages you visited before or after navigating to our Website and/or Platform.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">AGGREGATE INFORMATION COLLECTED</h2>
          <p className="text-muted-foreground mb-6">
            Aggregate Information is information that does not identify you. Aggregate Information may be collected when you use our Services, independent of any information you voluntarily enter. Additionally, we may use one or more processes to de-identify information that contains Personal Information, such that only Aggregate Information remains. We may collect, use, store, and transfer Aggregate Information without restriction (subject to applicable law).
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">COOKIES AND ANALYTICS</h2>
          <p className="text-muted-foreground mb-6">
            Like most websites, our Website and Platform may use "cookies." Cookies are alphanumeric identifiers that we transfer to your computer's hard drive through your web browser to help us identify you when you come to our Website and Platform. Our Website and Platform collect cookies and may use cookies for reasons including, but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Analyzing our web traffic using an analytics package.</li>
            <li>Identifying if you are signed in to the Website or Platform.</li>
            <li>Testing content on the Website or Platform.</li>
            <li>Storing information about your preferences.</li>
            <li>Recognizing when you return to the Website or Platform.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Overall, cookies help us provide you with a better experience with our Services by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This setting may prevent you from taking full advantage of the Services.
          </p>
          <p className="text-muted-foreground mb-6">
            We may use third parties, such as Google Analytics or other analytics providers, to analyze traffic to our Website and Platform. Google Analytics does not create individual profiles for visitors and only collects aggregate data. To disable Google Analytics, please download the browser add-on for the deactivation of Google Analytics provided by Google at <a href="http://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout?hl=en</a>. To learn more about privacy and Google Analytics, please consult the Google Analytics overview provided by Google at <a href="http://www.google.com/intl/en/analytics/privacyoverview.html" target="_blank" rel="noopener noreferrer">http://www.google.com/intl/en/analytics/privacyoverview.html</a>.
          </p>
          <p className="text-muted-foreground mb-6">
            We may also use cookies, pixels, beacons, or other web tracking technologies to track the amount of time spent on our Website and/or Platform and whether or not certain content was viewed. We may work with a third party to collect and process this information for us, based on our instructions and in compliance with this Privacy Policy. We are currently working with a third party analytics provider called MixPanel, whose policies are available here: <a href="https://mixpanel.com/legal/contact-us" target="_blank" rel="noopener noreferrer">https://mixpanel.com/legal/contact-us</a>.
          </p>
          <p className="text-muted-foreground mb-6">
            Although we do our best to honor the privacy preferences of our visitors and users, we are not able to respond to Do Not Track signals from your browser.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">HOW WE USE YOUR INFORMATION</h2>
          <p className="text-muted-foreground mb-4">
            Our use of your information and Provided Data (including any Personal Information) is subject to state and other applicable laws regarding information use, disclosure and retention. In general, however, we use information to provide our Services, operate Munin, communicate with you, and provide products, services, and information that you request from us. This includes but is not limited to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Providing, operating, improving, maintaining, and protecting our Services, including the safety and security thereof.</li>
            <li>Establishing your Munin account if you create one.</li>
            <li>Providing personalized products and services to you.</li>
            <li>Enhancing or improving your user experience.</li>
            <li>Providing you with technical and other support.</li>
            <li>Sending you updates, communications, and other information about Munin, our Services, and about products and services of third parties that we think you may be interested in.</li>
            <li>Sending you notices and alerts.</li>
            <li>Conducting research, analytics, and monitoring and analyzing trends and usage.</li>
            <li>Contacting you and responding to your inquiries.</li>
            <li>As necessary to comply with any applicable law, regulation, subpoena, legal process, or governmental request.</li>
            <li>Enforcing contracts, including investigation of potential violations thereof.</li>
            <li>Detecting, preventing, or otherwise addressing fraud, security or technical issues.</li>
            <li>Protecting against harm to the rights, property or safety of Munin, our users, or the public as required or permitted by law.</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            No Marketing Use of Google or Microsoft Calendar Data. While we may send service updates or marketing about Munin, we do not use Google user data or Microsoft calendar data for marketing or advertising, and we do not combine such data with other data for those purposes. Any marketing communications use only contact details you provided directly to Munin, not via Google or Microsoft APIs.
          </p>
          <p className="text-muted-foreground mb-6">
            No "Sale" or "Sharing." We do not "sell" Personal Information and we do not "share" Personal Information for cross-context behavioral advertising as those terms are defined under the California Consumer Privacy Act (CPRA). We also prohibit our service providers and contractors from using Personal Information for advertising or their own purposes.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">HOW WE SHARE YOUR INFORMATION</h2>
          <p className="text-muted-foreground mb-6">
            <strong className="text-foreground">We do not rent or sell your Personal Information.</strong>
          </p>
          <p className="text-muted-foreground mb-6">
            We share information, including Personal Information, in certain circumstances with third parties through operation of our Services. Below we explain when that happens. We also disclose information and Personal Information when required by applicable law.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">SERVICE PROVIDERS</h3>
          <p className="text-muted-foreground mb-6">
            We may transfer Personal Information to third parties for the purpose of providing the Services or operating our business. For example, we may transfer your Personal Information to non-affiliated third-party service providers to assist with providing the Platform, to enable certain artificial intelligence functionality layers ("AI Enablement") within the Platform, or to communicate with you.
          </p>
          <p className="text-muted-foreground mb-6">
            AI Service Providers (Non-Google Data Only). If you enable AI-assisted features, we may share limited user-provided content with AI service providers solely to generate outputs you request (e.g., drafting text). We do not send Google user data obtained via Google APIs (including Google Calendar data) to any AI service providers. AI processing uses only content you provide directly to Munin in a separate user flow and that is not sourced from Google APIs.
          </p>
          <p className="text-muted-foreground mb-6">
            To learn more about Munin's current AI Enablement provider, OpenAI and Deepgram. please review these policies:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>OpenAI's usage policies are found at <a href="https://openai.com/policies/usage-policies" target="_blank" rel="noopener noreferrer">https://openai.com/policies/usage-policies</a></li>
            <li>OpenAI's terms of service is found at <a href="https://openai.com/policies" target="_blank" rel="noopener noreferrer">https://openai.com/policies</a></li>
            <li>Deepgram's privacy policy is found at <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer">https://deepgram.com/privacy</a></li>
            <li>Deepgram's security & privacy for Speech-to-Text is found at <a href="https://deepgram.com/data-security" target="_blank" rel="noopener noreferrer">https://deepgram.com/data-security</a></li>
            <li>Deepgram's terms of service is found at <a href="https://deepgram.com/terms" target="_blank" rel="noopener noreferrer">https://deepgram.com/terms</a></li>
          </ul>
          <p className="text-muted-foreground mb-6">
            By using our Services, you acknowledge and agree to OpenAI and Deepgram's terms and conditions, and that any use, storage or processing of Provided Data and other information provided by you shall be subject to OpenAI and Deepgram's policies, We will use commercially reasonable efforts to identify any changes to our AI Enablement provider and its associated terms and conditions by posting this information within the Services; however, you acknowledge that a service provider's terms and conditions may change from time to time, and that it is your responsibility to check the terms and conditions of OpenAI, Deepgram and our other identified service providers regularly to ensure continued compliance.
          </p>
          <p className="text-muted-foreground mb-6">
            Processors for Calendar Data (Read-Only). We may share limited calendar data with service providers (e.g., hosting, infrastructure, error logging) only to provide or improve user-facing read-only features that are visible and prominent in the app, and only under agreements that restrict their use to our documented instructions with confidentiality obligations. We do not permit such providers to use calendar data for advertising or for their own purposes. We do not send Google or Microsoft calendar data to any AI/LLM or speech-to-text vendors.
          </p>
          <p className="text-muted-foreground mb-6">
            We vet service providers for security and privacy, bind them to confidentiality and data-protection obligations, and require them to process Personal Information only on our documented instructions for the specified purpose.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">REQUIRED TRANSFERS</h3>
          <p className="text-muted-foreground mb-6">
            We may also transfer your Personal Information to third parties under the following circumstances: (i) to comply with a legal requirement, law, subpoena, judicial proceeding, court order, governmental request, or legal process; (ii) to investigate a possible crime, such as fraud or identity theft; (iii) when we believe it is necessary to protect the rights, property, or safety of Munin or other persons, or (iv) as otherwise required or permitted by law, including any contractual obligations of Munin.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">AS DIRECTED BY YOU AND WITH YOUR CONSENT</h3>
          <p className="text-muted-foreground mb-6">
            We also share Personal Information with companies, agencies, organizations or individuals outside of Munin at your direction or when we have your consent to do so.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">HOW DO WE PROTECT YOUR INFORMATION</h2>
          <p className="text-muted-foreground mb-6">
            We take the security of your Personal Information very seriously. We use reasonable administrative, physical, and technical safeguards to secure the Personal Information you share with us. Despite these safeguards and our additional efforts to secure your information, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your Personal Information.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">Storage, Security & Retention for Calendar Data</h3>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Tokens & Storage.</strong> We store OAuth access/refresh tokens securely (encrypted at rest) solely to maintain your calendar connection. If we cache limited event metadata to deliver read-only features you enable, we retain only what is necessary.
          </p>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Retention & Deletion.</strong> We retain calendar data only as long as needed to provide the enabled feature (or as required by law) and delete or irreversibly de-identify it when it is no longer needed. If you disconnect a calendar in Munin or revoke access in your provider account, we will delete associated tokens and any cached calendar data within 30 days.
          </p>
          <p className="text-muted-foreground mb-6">
            <strong className="text-foreground">No AI Model Training</strong> Munin does not use Google user data obtained via Google APIs (including Google Calendar data) to train, fine-tune, or improve generalized AI/ML models, and does not transfer such Google API data to AI/LLM providers. Where we use AI vendors for non-calendar features, we configure them to restrict use of submitted content to providing the requested service and not for training generalized models, and we do not send Google API data to those vendors.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">THIRD-PARTY WEBSITES</h2>
          <p className="text-muted-foreground mb-6">
            The Services may contain hyperlinks to websites operated by third parties, which may include social media features, such as social media buttons or links. We provide such hyperlinks for your reference and convenience only. We do not control such websites and are not responsible for their content or the privacy or other practices of such websites. It is up to you to read and fully understand their privacy policies. Our inclusion of hyperlinks to such websites does not imply any endorsement of the material on such websites. If you are submitting information to any such third party, you should review and understand that party's applicable policies, including their privacy policies, before providing your information to the third-party.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">INTERNATIONAL VISITORS</h2>
          <p className="text-muted-foreground mb-6">
            Our Services are hosted in the United States. If you use our Services from the United Kingdom, European Union or other regions of the world with laws governing data collection and use that may differ from the laws of the United States, then please note that by sending an email or other communication containing Personal Information or by providing Personal Information through our Services, you are assuming the risk of doing so and are voluntarily transferring your Personal Information outside of those regions to the United States and other countries.
          </p>
          <p className="text-muted-foreground mb-6">
            Google API Data Handling Summary: If you connect Google services via OAuth, Munin's use and transfer of information received from Google APIs will comply with the Google API Services User Data Policy (Limited Use). Google API data is used only for the read-only features you enable, is not used for advertising, is not sold, and is not transferred to AI/LLM providers or used to train generalized AI/ML models.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">OPT OUT</h2>
          <p className="text-muted-foreground mb-6">
            If you no longer wish to receive our marketing and promotional communications, you may opt out by following the instructions included in each communication.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">Your Privacy Rights</h3>
          <p className="text-muted-foreground mb-6">
            Depending on your location, you may have rights to access, correct, delete, port, or restrict/opt-out of certain processing of your Personal Information. You may exercise these rights by emailing hello@muninai.com. We will verify your request and respond as required by applicable law. We will not discriminate against you for exercising your rights.
          </p>

          <h3 className="text-lg font-serif font-bold text-foreground mt-8 mb-3">Disconnecting & Revoking Access (Calendars)</h3>
          <p className="text-muted-foreground mb-4">
            You can unlink calendars in Munin at any time. You can also review or revoke access in your provider account:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Google — Google Account → Third-party connections (remove access).</li>
            <li>Microsoft — My Apps portal (edit or revoke application permissions).</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            After revocation, Munin cannot access your calendar data; we then delete stored tokens and any cached calendar data consistent with the retention policy above.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">CHILDREN'S PRIVACY</h2>
          <p className="text-muted-foreground mb-6">
            Our Services are not intended for use by individuals under 18 and we do not knowingly collect Personal Information from individuals under 18 in connection with the Services.
          </p>
          <p className="text-muted-foreground mb-6">
            To the extent that any Provided Data includes information about children under the age of 18, Munin will only collect, transmit, store and process such information in connection with providing Services to you.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">CHANGES TO OUR PRIVACY POLICY</h2>
          <p className="text-muted-foreground mb-6">
            We reserve the right to amend this Privacy Policy at any time without any prior notice to you. Each time you use our Services the current version of this Privacy Policy will apply. When you use our Services, we encourage you to check the dates of the Privacy Policy and review any changes since the last version.
          </p>

          <h2 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">QUESTIONS</h2>
          <p className="text-muted-foreground mb-6">
            If you have any questions about this Privacy Policy, or our privacy practices, please contact us at hello@muninai.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
