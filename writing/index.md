---
layout: single
title: Writin'
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="../rss_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://dev.to/feed/davorg`,
  desc: 'dev.to'
}, {
  url: `https://perlhacks.com/feed`,
  desc: 'Perl Hacks'
}, {
  url: `https://feeds.davecross.co.uk/substack`,
  desc: 'Substack'
}, {
  url: `https://blog.dave.org.uk/feed`,
  desc: 'Davblog'
} ];

$(document).ready(function() {

  make_rss_widget(FEEDS, 'rss_here');
});

</script>

Stuff I've been writing recently.

<div id="rss_here" />
