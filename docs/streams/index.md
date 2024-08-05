---
layout: single
title: BBC Radio Streams
---

For about four years from November 2004 to July 2008 this page contained
links to the Real Audio radio streams that the BBC published on its web
site. I created the page for the reasons explained in
[this blog post](https://blog.dave.org.uk/2004/11/bbc-real-audio.html).

The page was very popular. Within the BBC opinions were, apparently,
mixed. At one point I was summoned to a meeting with them where they
explained why I really shouldn't be doing what I was doing and given a
list of suggested changes which would render the page more acceptable
to management. Later on I'm told that running this site almost stopped
me being offered a contract at the BBC. On the other hand, many BBC
employees from that time have told me how much they liked it.

Of course, it all looks a bit silly now. No-one uses Real Audio any more
and pretty much all of the BBC's radio output is available on
[BBC Sounds](https://www.bbc.co.uk/sounds).

The programs that generated the new version of the page every day haven't
run for a few years, so you're not going to get anything useful from the
page. But I've left it here for historical interest. While looking around
my site today I was reminded of its existence and thought that I should
put a notice like this up pointing out that the site was dead. So here it is.

Thanks for the interest.

Dave Cross (4 Oct 2012)

p.s. The code that I used to generate the streams is
[on Github](https://github.com/davorg/get-streams/).
Oh course, it will do nothing useful these days.

---

***25 May 2010***

I've got email from a couple of people saying that the Real Audio radio
streams were finally turned off overnight. This means that the few links
left on these pages (and any links that you have saved from earlier
versions of this page) will no longer work.

I expected this day to come at some point. The BBC really want everyone
to use the [Radio iPlayer](https://www.bbc.co.uk/iplayer/radio) instead.

This does, however, pose a problem for people who were using the Real Audio
streams to power internet radios and similar devices. I'm not sure that
there's a solution to this problem, but I'll have a poke around and see if
I can find a way around it.

Other than that, I'd just like to say thanks for using these pages during
the five and a half years that they have been live. When I sat down to
[hack out a quick solution in November 2004](https://blog.dave.org.uk/2004/11/bbc-real-audio.html)
I had no idea how many people would find the pages so useful.

---

***29 Sep 2008***

Whilst you're waiting for me to get my act together, you might find it
useful to have a look around on the
[iPlayer Real Converter](http://www.iplayerconverter.co.uk/) site. It's
doing pretty much what I intended to do - creating a directory of Real
Audio links from the iPlayer data.

It all looks rather nice.

---

***23 Sep 2008***

Time for an update. I'm sorry that things are taking so long.

I have a first draft of the new software to extract the broadcast data.
I'm just a bit caught up on using that to publish the new pages. Won't
be long now though. Perhaps a couple of weeks.

---

***31 Jul 2008***

Hmm... things have gone a bit strange today. The starting point that I
use for grabbing this data is
[here](http://www.bbc.co.uk/radio/aod/index_noframes.shtml).
You'll notice that most of the radio stations have vanished from there.
Which means that most of the stations have vanished from this site too.

I think that my source page has fallen out of favour given the
introduction of the new version of the
[Radio iPlayer](https://www.bbc.co.uk/iplayer/radio) and it's no longer
kept up to date. I suspect that I can pull the data I need together
from other sources (perhaps the iPlayer itself) but that's going to
involve me finding some spare time that I don't really have currently.

So keep watching this page for information about what is happening, but
in the meantime,why not try using the Radio iPlayer instead.

---

***13 Dec 20078***

The BBC Radio Player is no more. The Listen Again streams have been
integrated into the [iPlayer](https://www.bbc.co.uk/iplayer).
See [here for details](http://www.bbc.co.uk/radio/help/faq/development_news.shtml).

It looks to me as if everything works as well as it used to, but I'll
be taking a closer look at it over the next few days.

It might even be that the BBC have finally produced a decent catalogue
of their radio streams which would render these pages redundant.
I'll let you know.

---

***10 Oct 2007***

As part of the recent server move, it seems I also managed to break the
Real Player links. Thanks to Alan Torchinsky for pointing it out.

Still working on fixing the automated build tho'.

---

***2 Oct 2007***

I've moved this site to a new web server. I thought that I had got the
automated nightly rebuild of the streams pages working, but it looks
like I was mistaken as the new pages didn't appear this morning.

I'll look into the problem as soon as I can, but it might be a day or
two. Please bear with me. Apologies for the inconvenience.

---

***28 Feb 2007***

I keep meaning to get round to writing a FAQ for these pages but I
never seem to have the time. Until I do I wanted to point out a few
things:

* My streams are exactly the same as the streams that you get from the
  BBC. All I'm doing is providing links to the BBC site (though,
  hopefully, in an easier to use format.
* The BBC have help pages about their streams 
  [here](http://www.bbc.co.uk/radio/contact_aod.shtml).
* If you have questions about using the streams on Windows or
  Windows-based PDAs then I'm completely the wrong person to ask. I
  don't use Windows at all. I use Linux whenever possible.

---

Slight redesign overnight. It was pointed out to me that screenreading
browsers (as used by blind people) would have a much better chance of
understanding my pages if I made better use of HTML header records. I'm
embarassed that I hadn't thought of it myself, but a big thanks to
Jonathan Mosen for bringing it to my attention.

---

I've finally got round to automating the rebuild of the pages. You
should now see new pages appearing each day at about 6am.

Let me know if you see any problems.

---

Ok, here's the new version of the page.

Yes, you'll see that things have changed significantly and yes I've
removed some of the links. This is because of an off the record
discussion that I had with the man from the BBC. He explained the
reasons why they don't provide direct Real Player links for music shows
(it's all to do with the perfidious rewind button) and I agreed to
provide only the same links that they do (tho', I hope, in an easier to
navigate format).

Hopefully, by removing the extra links, I have made it easier for the
BBC to negotiate with various other parties so that they are eventually
able to provide all of the links themselves.

In case it's not clear to anyone, I haven't been closed down, lent on or
threatened with legal action. These changes are completely down to me,
following a discussion with the BBC. Sometimes you have to give a bit of
ground in order to win back a lot more in the future.

**Note:** Please don't email me asking for older versions of the pages
(I don't keep backups) or for "just one stream URL" (I don't fancy
becoming a manual search engine). Instead, why not try seeing what you
can learn from viewing the source of the BBC Radio Player pages.

As you'll see, I've split each station out into a separate page. The
list was getting too long and becoming unmanageable. I think this
approach works much better.

I've also included a link to the YAML file at the bottom of this page,
you might want to take a look at that rather than running `get_streams`
yourself. I suppose that means I should document the data structure at
some point...

By the way, I'm watching
[Backstage](https://www.bbc.co.uk/blogs/bbcbackstage) with great interest.
Maybe something will come out of it that will mean I don't have to
screenscrape this stuff.

As always, I'm interested in hearing any comments or suggestions. My
email address is at the bottom of the page.

Oh, and sorry about the reappearance of the the Google ads. Bandwidth
costs money.
