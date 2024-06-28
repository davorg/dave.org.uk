---
layout: single
title: Writin'
---
<script src="../feed_widget.js"></script>
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

document.addEventListener('DOMContentLoaded', function() {
  make_feed_widget(FEEDS, 'feed_here');
});

</script>

Stuff I've been writing recently.

<div id="feed_here" />
