---
layout: single
title: Watchin'
---
<script src="https://cdn.davecross.co.uk/js/feed_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/film`,
  desc: 'Films'
}, {
  url: `https://feeds.davecross.co.uk/tv`,
  desc: 'TV'
} ];

document.addEventListener('DOMContentLoaded', function() {
  make_feed_widget(FEEDS, 'video_here');
});

</script>

Stuff I've been watching recently.

<div id="video_here" />
