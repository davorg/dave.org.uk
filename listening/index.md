---
layout: single
title: Listenin'
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="../atom_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/music`,
  desc: 'last.fm'
} ];

$(document).ready(function() {

  make_atom_widget(FEEDS, 'tunes_here');
});

</script>

Stuff I've been listening to.

<div id="tunes_here" />
