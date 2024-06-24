---
layout: single
title: Listenin'
---
<script src="../feed_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/music`,
  desc: 'last.fm'
} ];

$(document).ready(function() {

  make_feed_widget(FEEDS, 'tunes_here');
});

</script>

Stuff I've been listening to.

<div id="tunes_here" />
