---
layout: single
---

<script src="https://raw.githubusercontent.com/davorg/rss_widget/main/rss_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://dev.to/feed/davorg`,
  desc: 'dev.to'
}, {
  url: `https://perlhacks.com/feed`,
  desc: 'Perl Hacks'
}, {
  url: 'https://davecross.co.uk/2020-vision/feed.rss',
  desc: '2020 Vision',
}, {
  url: `https://blog.dave.org.uk/feed`,
  desc: 'Davblog'
} ];

$(document).ready(function() {

  make_rss_widget(FEEDS, 'rss_here');
});

</script>

Stuff I've been writing recently.

<div id="#rss_here" />
