import Script from "next/script";

/**
 * Google Ads tracking — global tag + conversion helper
 *
 * Mounts the gtag.js library, configures the conversion ID,
 * and exposes window.gtag_report_conversion(url) globally
 * so components (like Contact form) can fire the conversion
 * event on lead form submit.
 */
export function GoogleAnalytics() {
  const GA_ID = "AW-18281444691";
  const CONVERSION_LABEL = "AW-18281444691/2PZpCPu62cccENPqoo1E";

  return (
    <>
      {/* Loads gtag.js asynchronously */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initializes gtag + defines conversion helper on window */}
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}');

          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': '${CONVERSION_LABEL}',
              'event_callback': callback
            });
            return false;
          };
        `}
      </Script>
    </>
  );
}
