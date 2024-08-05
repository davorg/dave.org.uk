---
layout: single
title: Listenin'
---
<script src="https://cdn.davecross.co.uk/js/feed_widget.js"></script>
<script>
const FEEDS = [ {
  url: `https://feeds.davecross.co.uk/music`,
  desc: 'Recent tracks'
} ];

document.addEventListener('DOMContentLoaded', function() {
  make_feed_widget(FEEDS, 'tunes_here');

  // Fetch data from the URL
  fetch('https://dave.org.uk/data/laststats.json')
    .then(response => response.json())
    .then(data => {
      const listContainer = document.createElement('ul');
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} (${item.count} plays)`;
        listContainer.appendChild(listItem);
      });
      document.getElementById('stats_here').appendChild(listContainer);
    })
    .catch(error => console.error('Error fetching data:', error));

});

</script>

Stuff I've been listening to.

<div id="tunes_here" />

<h2>Top Artists in the last week</h2>
<div id="stats_here"></div>