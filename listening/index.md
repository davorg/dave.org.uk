---
layout: single
title: Listenin'
---
<script src="https://cdn.davecross.co.uk/js/feed_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/music`,
  desc: 'last.fm'
} ];

document.addEventListener('DOMContentLoaded', function() {
  make_feed_widget(FEEDS, 'tunes_here');
});

</script>

Stuff I've been listening to.

<div id="tunes_here" />
