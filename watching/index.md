---
layout: single
title: Watchin'
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="https://cdn.davecross.co.uk/js/feed_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/film`,
  desc: 'Films'
}, {
  url: `https://feeds.davecross.co.uk/tv`,
  desc: 'TV'
} ];

$(document).ready(function() {

  make_feed_widget(FEEDS, 'video_here');
});

</script>

Stuff I've been watching recently.

<div id="video_here" />
