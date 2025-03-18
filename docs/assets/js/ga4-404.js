// Check if the current page is a 404 page before sending the event
if (document.title.includes("404") || window.location.pathname === "/404.html") {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }

  window.addEventListener('load', function() {
    setTimeout(function() {
      gtag('event', 'page_404', {
        'event_category': 'error',
        'event_label': document.location.pathname,
        'page_location': document.location.href,
        'page_title': '404 Not Found',
        'referrer': document.referrer,
        'debug_mode': true
      });
    }, 500); // Small delay to ensure GA4 is fully loaded
  });
}

