---
layout: single
title: Watchin'
---
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="../rss_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://trakt.tv/users/davorg/progress/watched/activity.atom?slurm=e94f879ae8bd21e4c6aca5a25228eeda&hide_completed=true`,
  desc: 'dev.to'
} ];

$(document).ready(function() {

  make_rss_widget(FEEDS, 'rss_here');
});

</script>

Stuff I've been watching recently.

<div id="rss_here" />
