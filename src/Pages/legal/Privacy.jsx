import React, {useEffect} from "react";
import {scrollEffect} from "../../Components/Effects";
import ScrollToTop from "../../Components/ScrollToTop";
import Navbar from "../../Components/Navbar";
import TopScreen from "../../Components/TopScreen";
import MLogo from "../../Images/mutils500.png";
import Footer from "../../Components/Footer";

function Privacy() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/legal/imprint" />
        <TopScreen title="Privacy"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    In this whole document when being referred as "we" or "us", MUtils Project as a whole is meant with everybody responsible.<br/>
                    When referring to "personal data", your discord profile data (including a linked email address) is meant as well as any information you manually share with any of our services.
                </div>
                <img className="box-image" alt="MUtils Logo" src={MLogo} />
            </div>

            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <h2>Privacy Policy</h2>
                    <p>Personal data (usually referred to just as "data" below) will only be processed by us to the
                        extent necessary and for the purpose of providing a functional and user-friendly website,
                        including its contents, and the services offered there.</p>
                    <p>Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation
                        (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of
                        operations such as collection, recording, organization, structuring, storage, adaptation,
                        alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or
                        otherwise making available, alignment, or combination, restriction, erasure, or destruction
                        performed on personal data, whether by automated means or not.</p>
                    <p>The following privacy policy is intended to inform you in particular about the type, scope,
                        purpose, duration, and legal basis for the processing of such data either under our own control
                        or in conjunction with others. We also inform you below about the third-party components we use
                        to optimize our website and improve the user experience which may result in said third parties
                        also processing data they collect and control.</p>
                    <p>Our privacy policy is structured as follows:</p>
                    <p>I. Information about us as controllers of your data<br/>II. The rights of users and data
                        subjects<br/>III. Information about the data processing</p>
                    <h3>I. Information about us as controllers of your data</h3>
                    <p>The party responsible for this website (the "controller") for purposes of data protection law can be found in the </p>
                    <p><a href="https://mutils.de/legal/imprint" target="_blank">Imprint</a></p><br/>
                    <h3>II. The rights of users and data subjects</h3>
                    <p>With regard to the data processing to be described in more detail below, users and data subjects
                        have the right</p>
                    <ul type="disc">
                        <li>to confirmation of whether data concerning them is being processed, information about the
                            data being
                            processed, further information about the nature of the data processing, and copies of the
                            data (cf. also
                            Art. 15 GDPR);
                        </li>
                        <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
                        <li>to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or,
                            alternatively, if
                            further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said
                            processing per
                            Art. 18 GDPR;
                        </li>
                        <li>to receive copies of the data concerning them and/or provided by them and to have the same
                            transmitted
                            to other providers/controllers (cf. also Art. 20 GDPR);
                        </li>
                        <li>to file complaints with the supervisory authority if they believe that data concerning them
                            is being
                            processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).
                        </li>
                    </ul>
                    <p>In addition, the controller is obliged to inform all recipients to whom it discloses data of any
                        such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para.
                        1, 18 GDPR. However, this obligation does not apply if such notification is impossible or
                        involves a disproportionate effort. Nevertheless, users have a right to information about these
                        recipients.</p>
                    <p><strong>Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the
                        controller's future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In
                        particular, an objection to data processing for the purpose of direct advertising is
                        permissible.</strong></p>
                    <h3>III. Information about the data processing</h3>
                    <p>Your data processed when using our website will be deleted or blocked as soon as the purpose for
                        its storage ceases to apply, provided the deletion of the same is not in breach of any statutory
                        storage obligations or unless otherwise stipulated below.</p>
                    <h4>Server data</h4>
                    <p>For technical reasons, the following data sent by your internet browser to us or to our server
                        provider will be collected, especially to ensure a secure and stable website: These server log
                        files record the type and version of your browser, operating system, the website from which you
                        came (referrer URL), the webpages on our site visited, the date and time of your visit, as well
                        as the IP address from which you visited our site.</p>
                    <p>The data thus collected will be temporarily stored, but not in association with any other of your
                        data.</p>
                    <p>The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the
                        improvement, stability, functionality, and security of our website.</p>
                    <p>The data will be deleted within no more than seven days, unless continued storage is required for
                        evidentiary purposes. In which case, all or part of the data will be excluded from deletion
                        until the investigation of the relevant incident is finally resolved.</p>
                    <h4>Cookies</h4>
                    <h5>a) Session cookies</h5>
                    <p>We use cookies on our website. Cookies are small text files or other storage technologies stored
                        on your computer by your browser. These cookies process certain specific information about you,
                        such as your browser, location data, or IP address. &nbsp;</p>
                    <p>This processing makes our website more user-friendly, efficient, and secure, allowing us, for
                        example, to display our website in different languages or to offer a shopping cart function.</p>
                    <p>The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are
                        used to collect data to initiate or process contractual relationships.</p>
                    <p>If the processing does not serve to initiate or process a contract, our legitimate interest lies
                        in improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f)
                        GDPR.</p>
                    <p>When you close your browser, these session cookies are deleted.</p>
                    <h5>b) Third-party cookies</h5>
                    <p>If necessary, our website may also use cookies from companies with whom we cooperate for the
                        purpose of advertising, analyzing, or improving the features of our website.</p>
                    <p>Please refer to the following information for details, in particular for the legal basis and
                        purpose of such third-party collection and processing of data collected through cookies.</p>
                    <h5>c) Disabling cookies</h5>
                    <p>You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use
                        the browser to delete cookies that have already been stored. However, the steps and measures
                        required vary, depending on the browser you use. If you have any questions, please use the help
                        function or consult the documentation for your browser or contact its maker for support. Browser
                        settings cannot prevent so-called flash cookies from being set. Instead, you will need to change
                        the setting of your Flash player. The steps and measures required for this also depend on the
                        Flash player you are using. If you have any questions, please use the help function or consult
                        the documentation for your Flash player or contact its maker for support.</p>
                    <p>If you prevent or restrict the installation of cookies, not all of the functions on our site may
                        be fully usable.</p>
                    <h4>Newsletter</h4>
                    <p>If you register for our free newsletter, the data requested from you for this purpose, i.e. your
                        email address and, optionally, your name and address, will be sent to us. We also store the IP
                        address of your computer and the date and time of your registration. During the registration
                        process, we will obtain your consent to receive this newsletter and the type of content it will
                        offer, with reference made to this privacy policy. The data collected will be used exclusively
                        to send the newsletter and will not be passed on to third parties.</p>
                    <p>The legal basis for this is Art. 6 Para. 1 lit. a) GDPR.</p>
                    <p>You may revoke your prior consent to receive this newsletter under Art. 7 Para. 3 GDPR with
                        future effect. All you have to do is inform us that you are revoking your consent or click on
                        the unsubscribe link contained in each newsletter.</p>
                    <h4>Contact</h4>
                    <p>If you contact us via email or the contact form, the data you provide will be used for the
                        purpose of processing your request. We must have this data in order to process and answer your
                        inquiry; otherwise we will not be able to answer it in full or at all.</p>
                    <p>The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.</p>
                    <p>Your data will be deleted once we have fully answered your inquiry and there is no further legal
                        obligation to store your data, such as if an order or contract resulted therefrom.</p>
                    <h4>User posts, comments, and ratings</h4>
                    <p>We offer you the opportunity to post questions, answers, opinions, and ratings on our website,
                        hereinafter referred to jointly as "posts." If you make use of this opportunity, we will process
                        and publish your post, the date and time you submitted it, and any pseudonym you may have
                        used.</p>
                    <p>The legal basis for this is Art. 6 Para. 1 lit. a) GDPR. You may revoke your prior consent under
                        Art. 7 Para. 3 GDPR with future effect. All you have to do is inform us that you are revoking
                        your consent.</p>
                    <p>In addition, we will also process your IP address and email address. The IP address is processed
                        because we might have a legitimate interest in taking or supporting further action if your post
                        infringes the rights of third parties and/or is otherwise unlawful.</p>
                    <p>In this case, the legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in any
                        legal defense we may have to mount.</p>
                    <h4>Contests</h4>
                    <p>We offer you the opportunity to take part in contests on our website. If you participate in one
                        of our competitions, the data you provide when you enter will be processed without your further
                        consent, but only to run the contest.</p>
                    <p>As part of the competition, we will pass on your data to the transport company entrusted with the
                        delivery of the goods or to a financial service provider if the transfer is necessary for the
                        delivery or payment of your winnings. If you win and your information is to be published, you
                        will be informed of this in the declaration of consent.</p>
                    <p>The legal basis for the transfer of this data is Art. 6 Para. 1 lit. b) GDPR.</p>
                    <p>Your consent to the processing of your data for participation in our competitions may be
                        exercised in accordance with Art. 7 Para. 3 GDPR with future effect. All you have to do is
                        inform us that you are revoking your consent.</p>
                    <h4>Twitter</h4>
                    <p>We maintain an online presence on Twitter to present our company and our services and to
                        communicate with customers/prospects. Twitter is a service provided by Twitter Inc., 1355 Market
                        Street, Suite 900, San Francisco, CA 94103, USA.</p>
                    <p>We would like to point out that this might cause user data to be processed outside the European
                        Union, particularly in the United States. This may increase risks for users that, for example,
                        may make subsequent access to the user data more difficult. We also do not have access to this
                        user data. Access is only available to Twitter.</p>
                    <p>The privacy policy of Twitter can be found at</p>
                    <p><a href="https://twitter.com/de/privacy" target="_blank"
                          rel="noopener">https://twitter.com/privacy</a></p>
                    <h4>YouTube</h4>
                    <p>We maintain an online presence on YouTube to present our company and our services and to
                        communicate with customers/prospects. YouTube is a service of Google Ireland Limited, Gordon
                        House, Barrow Street, Dublin 4, Ireland, a subsidiary of Google LLC, 1600 Amphitheater Parkway,
                        Mountain View, CA 94043 USA.</p>
                    <p>We would like to point out that this might cause user data to be processed outside the European
                        Union, particularly in the United States. This may increase risks for users that, for example,
                        may make subsequent access to the user data more difficult. We also do not have access to this
                        user data. Access is only available to YouTube.</p>
                    <p>The YouTube privacy policy can be found here:</p>
                    <p><a href="https://policies.google.com/privacy" target="_blank"
                          rel="noopener">https://policies.google.com/privacy</a></p><br/>
                    <h4>Social media links via graphics</h4>
                    <p>We also integrate the following social media sites into our website. The integration takes place
                        via a linked graphic of the respective site. The use of these graphics stored on our own servers
                        prevents the automatic connection to the servers of these networks for their display. Only by
                        clicking on the corresponding graphic will you be forwarded to the service of the respective
                        social network.</p>
                    <p>Once you click, that network may record information about you and your visit to our site. It
                        cannot be ruled out that such data will be processed in the United States.</p>
                    <p>Initially, this data includes such things as your IP address, the date and time of your visit,
                        and the page visited. If you are logged into your user account on that network, however, the
                        network operator might assign the information collected about your visit to our site to your
                        personal account. If you interact by clicking Like, Share, etc., this information can be stored
                        your personal user account and possibly posted on the respective network. To prevent this, you
                        need to log out of your social media account before clicking on the graphic. The various social
                        media networks also offer settings that you can configure accordingly.</p>
                    <p>The following social networks are integrated into our site by linked graphics:</p>
                    <h4>twitter</h4> <p>Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA</p>
                    <p>Privacy Policy: <a href="https://twitter.com/privacy" target="_blank"
                                          rel="noopener">https://twitter.com/privacy</a></p>
                    <h4>YouTube</h4>
                    <p>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, a subsidiary of Google
                        LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA</p>
                    <p>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank"
                                          rel="noopener">https://policies.google.com/privacy</a></p>
                    <h4>Twitter plug-in</h4>
                    <p>Our website uses the plug-in of the Twitter social network. The Twitter service is operated by
                        Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA ("Twitter").</p>
                    <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in improving the
                        quality of our website.</p>
                    <p>If the plug-in is stored on one of the pages you visit on our website, your browser will download
                        an icon for the plug-in from Twitter's servers in the USA. For technical reasons, it is
                        necessary for Twitter to process your IP address. In addition, the date and time of your visit
                        to our website will also be recorded.</p>
                    <p>If you are logged in to Twitter while visiting one of our plugged-in websites, the information
                        collected by the plug-in from your specific visit will be recognized by Twitter. The information
                        collected may then be assigned to your personal account at Twitter. If, for example, you use the
                        Twitter Tweet button, this information will be stored in your Twitter account and may be
                        published on the Twitter platform. To prevent this, you must either log out of Twitter before
                        visiting our site or make the appropriate settings in your Twitter account.</p>
                    <p>Further information about the collection and use of data as well as your rights and protection
                        options in Twitter's privacy policy found at</p>
                    <p><a href="https://twitter.com/privacy" target="_blank"
                          rel="noopener">https://twitter.com/privacy</a></p>
                    <h4>Google Analytics</h4>
                    <p>We use Google Analytics on our website. This is a web analytics service provided by Google
                        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                    <p>The Google Analytics service is used to analyze how our website is used. The legal basis is Art.
                        6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic
                        operation of our site.</p>
                    <p>Usage and user-related information, such as IP address, place, time, or frequency of your visits
                        to our website will be transmitted to a Google server in the United States and stored there.
                        However, we use Google Analytics with the so-called anonymization function, whereby Google
                        truncates the IP address within the EU or the EEA before it is transmitted to the US.</p>
                    <p>The data collected in this way is in turn used by Google to provide us with an evaluation of
                        visits to our website and what visitors do once there. This data can also be used to provide
                        other services related to the use of our website and of the internet in general.</p>
                    <p>Google states that it will not connect your IP address to other data. In addition, Google
                        provides further information with regard to its data protection practices at</p>
                    <p><a href="https://www.google.com/intl/de/policies/privacy/partners" target="_blank"
                          rel="noopener">https://www.google.com/intl/de/policies/privacy/partners,</a></p>
                    <p>including options you can exercise to prevent such use of your data.</p>
                    <p>In addition, Google offers an opt-out add-on at</p>
                    <p><a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank"
                          rel="noopener">https://tools.google.com/dlpage/gaoptout?hl=en</a></p>
                    <p>in addition with further information. This add-on can be installed on the most popular browsers
                        and offers you further control over the data that Google collects when you visit our website.
                        The add-on informs Google Analytics' JavaScript (ga.js) that no information about the website
                        visit should be transmitted to Google Analytics. However, this does not prevent information from
                        being transmitted to us or to other web analytics services we may use as detailed herein.</p>
                    <h4>Google reCAPTCHA</h4>
                    <p>Our website uses Google reCAPTCHA to check and prevent automated servers ("bots") from accessing
                        and interacting with our website. This is a service provided by Google Ireland Limited, Gordon
                        House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                    <p>This service allows Google to determine from which website your request has been sent and from
                        which IP address the reCAPTCHA input box has been used. In addition to your IP address, Google
                        may collect other information necessary to provide and guarantee this
                        service.&nbsp;&nbsp;&nbsp;</p>
                    <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the security of
                        our website and in the prevention of unwanted, automated access in the form of spam or
                        similar.</p>
                    <p>Google offers detailed information at</p>
                    <p><a href="https://policies.google.com/privacy" target="_blank"
                          rel="noopener">https://policies.google.com/privacy</a></p>
                    <p>concerning the general handling of your user data.</p>
                    <h4>Google Fonts</h4>
                    <p>Our website uses Google Fonts to display external fonts. This is a service provided by Google
                        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                    <p>To enable the display of certain fonts on our website, a connection to the Google server in the
                        USA is established whenever our website is accessed.</p>
                    <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization
                        and economic operation of our site.</p>
                    <p>When you access our site, a connection to Google is established from which Google can identify
                        the site from which your request has been sent and to which IP address the fonts are being
                        transmitted for display.</p>
                    <p>Google offers detailed information at</p>
                    <p><a href="https://adssettings.google.com/authenticated" target="_blank"
                          rel="noopener">https://adssettings.google.com/authenticated</a></p>
                    <p><a href="https://policies.google.com/privacy" target="_blank"
                          rel="noopener">https://policies.google.com/privacy</a></p>
                    <p>in particular on options for preventing the use of data.</p>
                    <h4>YouTube</h4>
                    <p>We use YouTube on our website. This is a video portal operated by YouTube LLC, 901 Cherry Ave,
                        94066 San Bruno, CA, USA, hereinafter referred to as "YouTube".</p>
                    <p>YouTube is a subsidiary of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland,
                        hereinafter referred to as "Google".</p>
                    <p>We use YouTube in its advanced privacy mode to show you videos. The legal basis is Art. 6 Para. 1
                        lit. f) GDPR. Our legitimate interest lies in improving the quality of our website. According to
                        YouTube, the advanced privacy mode means that the data specified below will only be transmitted
                        to the YouTube server if you actually start a video.</p>
                    <p>Without this mode, a connection to the YouTube server in the USA will be established as soon as
                        you access any of our webpages on which a YouTube video is embedded.</p>
                    <p>This connection is required in order to be able to display the respective video on our website
                        within your browser. YouTube will record and process at a minimum your IP address, the date and
                        time the video was displayed, as well as the website you visited. In addition, a connection to
                        the DoubleClick advertising network of Google is established.</p>
                    <p>If you are logged in to YouTube when you access our site, YouTube will assign the connection
                        information to your YouTube account. To prevent this, you must either log out of YouTube before
                        visiting our site or make the appropriate settings in your YouTube account.</p>
                    <p>For the purpose of functionality and analysis of usage behavior, YouTube permanently stores
                        cookies on your device via your browser. If you do not agree to this processing, you have the
                        option of preventing the installation of cookies by making the appropriate settings in your
                        browser. Further details can be found in the section about cookies above.</p>
                    <p>Further information about the collection and use of data as well as your rights and protection
                        options in Google's privacy policy found at</p>
                    <p><a href="https://policies.google.com/privacy" target="_blank"
                          rel="noopener">https://policies.google.com/privacy</a></p>
                    <h4>Amazon Associates (PartnerNet)</h4>
                    <p>Our website participates in the Amazon Associates program, known as PartnerNet in German. This is
                        a service provided by Amazon Europe Core S.à r.l., 5 Rue Plaetis, 2338 Luxembourg, Luxembourg.
                        Advertisements from Amazon.de are placed on our website via the Amazon Associates program. If
                        you click on one of these advertisements, you will be redirected to the corresponding offer on
                        the Amazon website. If you subsequently decide to purchase the advertised product there, we will
                        receive a commission from Amazon.</p>
                    <p>Amazon uses cookies to allow this service to work. With the help of these cookies, Amazon can
                        verify that you were forwarded from our website to its website.</p>
                    <p>Amazon offers further information about data protection at this link:</p>
                    <p><a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010." target="_blank"
                          rel="noopener">https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010.</a></p>
                    <p>The legal basis for collecting and processing this information is Art. 6 Para. 1 lit. f) GDPR.
                        Our legitimate interest lies in ensuring that our commissions are processed and paid by
                        Amazon.</p>
                    <p>If you do not agree to this processing, you have the option of preventing the installation of
                        cookies by making the appropriate settings in your browser. Further details can be found in the
                        section about cookies above.</p>
                    <h4>Google AdWords with Conversion Tracking</h4>
                    <p>Our website uses Google AdWords and conversion tracking. This is a service provided by Google
                        Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                    <p>We use conversion tracking to provide targeted promotion of our site. The legal basis is Art. 6
                        Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic
                        operation of our site.</p>
                    <p>If you click on an ad placed by Google, the conversion tracking we use stores a cookie on your
                        device. These so-called conversion cookies expire after 30 days and do not otherwise identify
                        you personally.</p>
                    <p>If the cookie is still valid and you visit a specific page of our website, both we and Google can
                        evaluate that you clicked on one of our ads placed on Google and that you were then forwarded to
                        our website.</p>
                    <p>The data collected in this way is in turn used by Google to provide us with an evaluation of
                        visits to our website and what visitors do once there. In addition, we receive information about
                        the number of users who clicked on our advertisement(s) as well as about the pages on our site
                        that are subsequently visited. Neither we nor third parties who also use Google AdWords will be
                        able to identify you from this conversion tracking.</p>
                    <p>You can also prevent or restrict the installation of cookies by making the appropriate settings
                        in your browser. Likewise, you can use the browser to delete cookies that have already been
                        stored. However, the steps and measures required vary, depending on the browser you use. If you
                        have any questions, please use the help function or consult the documentation for your browser
                        or contact its maker for support.</p>
                    <p>In addition, Google provides further information with regard to its data protection practices
                        at</p>
                    <p><a href="https://services.google.com/sitestats/de.html" target="_blank"
                          rel="noopener">https://services.google.com/sitestats/de.html</a></p>
                    <p><a href="https://www.google.com/policies/technologies/ads/" target="_blank"
                          rel="noopener">https://www.google.com/policies/technologies/ads/</a>&nbsp;</p>
                    <p><a href="https://www.google.de/policies/privacy/" target="_blank"
                          rel="noopener">http://www.google.de/policies/privacy/</a></p>
                    <p>in particular information on how you can prevent the use of your data.</p>
                    <h4>Google AdSense</h4>
                    <p>We use Google AdSense on our website to integrate advertisements. This is a service provided by
                        Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).</p>
                    <p>Google AdSense stores cookies and web beacons on your device via your browser. This enables
                        Google to analyze how you use our website. In addition to your IP address and the advertising
                        formats displayed, the information thus collected will be transmitted to Google in the USA and
                        stored there. Google may also share this information with third parties. Google states that it
                        will not connect your IP address to other data.</p>
                    <p>The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the analysis,
                        optimization, and economic operation of our site.</p>
                    <p>If you do not agree to this processing, you have the option of preventing the installation of
                        cookies by making the appropriate settings in your browser. Further details can be found in the
                        section about cookies above.</p>
                    <p>In addition, Google offers an opt-out add-on at</p>
                    <p><a href="https://policies.google.com/privacy" target="_blank"
                          rel="noopener">https://policies.google.com/privacy</a></p>
                    <p><a href="https://adssettings.google.com/authenticated" target="_blank"
                          rel="noopener">https://adssettings.google.com/authenticated</a></p>
                    <p>in particular on options for preventing the use of data.</p>
                    <h4>XSOLLA „CHECK-OUT“</h4>
                    <p>To process orders through our online shop, we use the payment service of Xsolla Berlin GmbH,
                        Mindspace, Krausenstraße 9-10 10117 Berlin, Germany referred to as "Xsolla", on our website.</p>
                    <p>For this purpose, we have integrated Xsolla's check-out into the final order page of our online
                        shop.</p>
                    <p>The legal basis is the fulfilment of the contract according to Art. 6 Para. 1 lit. b.)&nbsp; EU
                        General Data Protection Regulation (GDPR). In addition, we have a legitimate interest in
                        offering effective and secure payment options, so that another legal basis ensues from Art. 6
                        para. 1 lit f.) GDPR.&nbsp;</p>
                    <p>By integrating Xsolla, your internet browser loads the check-out page from a Xsolla server. This
                        means that the operating system you are using, type and version of your Internet browser,
                        website from which the check-out has been requested, date and time of the call and the IP
                        address are sent to Xsolla - even without your interaction with the check-out page.</p>
                    <p>As soon as you complete the order in our online shop, the data you have entered in the input
                        fields of the check-out page will be processed by Xsolla at your own responsibility in order to
                        process the payment.</p>
                    <p>With the offered payment methods "PayPal" and "Advance Payment", processing without your further
                        consent is limited to the transfer of the payment data to us or PayPal.</p>
                    <p>With the offered payment methods of "Purchase on Account", "Hire Purchase", "Credit Card",
                        "Direct Debit" or "Immediate Payment", the following personal data is processed by Xsolla for
                        the purpose of payment processing and for identity and credit checking:</p>
                    <p>- Contact information such as names, addresses, date of birth, gender, email address, telephone
                        number, mobile phone number, IP address, etc.</p>
                    <p>- Information on the processing of the order, such as product type, product number, price,
                        etc.</p>
                    <p>- Payment information, such as debit and credit card data (card number, expiry date and CCV
                        code), invoice data, account number, etc.</p>
                    <p>If you choose the payment method "Purchase on Account" or "Hire Purchase", Xsolla collects and
                        uses personal data and information about your previous payment behaviour to decide whether you
                        will be granted the desired payment method. In addition, probability values for your future
                        payment behaviour (so-called scoring) are used. Scoring is calculated on the basis of
                        scientifically recognized mathematical and statistical methods.</p>
                    <p>Xsolla provides further information on the processing described above as well as the applicable
                        data protection regulations.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Privacy